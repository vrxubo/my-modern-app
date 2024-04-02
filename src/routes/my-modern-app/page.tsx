import { useEffect, useRef, useState } from 'react';

async function getImg(path: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = err => {
      reject(err);
    };
  });
}

function transtion(num: number) {
  return num * 2;
}

type CameraType = 'user' | 'environment';
type StateType = {
  isUse?: boolean;
  // 闪光灯
  track?: MediaStreamTrack | null;
  isUseTorch?: boolean;
  trackStatus?: boolean;
};
type WatermarkType = {
  type: string;
  url?: string;
  text?: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  color?: string;
  fontSize?: number;
};

const watermark: WatermarkType[] = [
  {
    type: 'text',
    text: '测试水印',
    x: 10,
    y: 10,
    color: '#000',
    fontSize: 20,
  },
];
function Camera() {
  const [state, setState] = useState<StateType>({
    isUse: false,
    track: null,
    isUseTorch: false,
    trackStatus: false,
  });
  const [, setImgUrl] = useState<string>('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasBox = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cameraCanvasRef = useRef<HTMLCanvasElement>(null);
  const canvas2dRef = useRef<CanvasRenderingContext2D | null>(null);
  const cameraCanvas2dRef = useRef<CanvasRenderingContext2D | null>(null);

  const [cameraExact, setCameraExact] = useState<CameraType>('environment');

  const handleShutter = () => {
    cameraCanvas2dRef.current?.drawImage(
      videoRef.current as HTMLVideoElement,
      0,
      0,
      videoRef.current?.videoWidth as number,
      videoRef.current?.videoHeight as number,
    );
    const img = cameraCanvasRef.current?.toDataURL('image/png');
    setImgUrl(img as string);
  };
  const handleTrach = () => {
    setState(s => {
      // state.track?.applyConstraints({
      //   advanced: [{ torch: !s.trackStatus }],
      // });
      return {
        trackStatus: !s.trackStatus,
      };
    });
  };
  const closeCamera = () => {
    if (videoRef.current?.srcObject) {
      (videoRef.current.srcObject as MediaStream).getTracks().forEach(track => {
        track.stop();
      });
    }
  };

  const makeWatermark = async (ctx2d: CanvasRenderingContext2D) => {
    if (watermark.length === 0) {
      return;
    }
    for (const item of watermark) {
      switch (item.type) {
        case 'img': {
          const [getImgErr, { path: imgPath }] = [false, { path: '' }];
          if (getImgErr) {
            throw new Error(`${item.url} 没有找到`);
          }
          const img = await getImg(imgPath);
          ctx2d.drawImage(
            img,
            item.x,
            item.y,
            item.width || 0,
            item.height || 0,
          );
          break;
        }
        case 'text': {
          const color = item.color || '#000';
          const fontSize = item.fontSize || 16;

          ctx2d.fillStyle = color;
          ctx2d.font = `${fontSize}px normal`;
          item?.text && ctx2d.fillText(item.text, item.x, item.y);
          break;
        }
        default:
          // do nothing
          break;
      }
    }
  };
  const openScan = async () => {
    const width = transtion(
      document.documentElement.clientWidth || document.body.clientWidth,
    );
    const height = transtion(
      document.documentElement.clientHeight || document.body.clientHeight,
    );

    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(device => device.kind === 'videoinput');
    if (videoDevices.length === 0) {
      console.error('设备不支持');
      return;
    }

    console.log('videoDevices', videoDevices);

    const videoParam = {
      audio: false,
      video: {
        facingMode: cameraExact,
        width: { min: 1, ideal: height, max: height },
        height: { min: 1, ideal: width, max: width },
      },
    };
    navigator.mediaDevices
      .getUserMedia(videoParam)
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.setAttribute('playsinline', 'true');
          videoRef.current.setAttribute('webkit-playsinline', 'true');
          videoRef.current.play();
          makeWatermark(canvas2dRef.current as CanvasRenderingContext2D);
          const videoTrack = stream.getVideoTracks()[0];
          console.log('Constraints', videoTrack.getConstraints());
          console.log('Capabilities', videoTrack.getCapabilities());
          console.log('Settings', videoTrack.getSettings());
          console.log(
            'support',
            navigator.mediaDevices.getSupportedConstraints(),
          );

          setState({
            isUse: true,
            track: stream.getVideoTracks()[0],
          });
          setTimeout(() => {
            setState({
              isUseTorch:
                (state.track?.getCapabilities() as any)?.torch || false,
            });
          }, 500);
        }
      })
      .catch(err => {
        console.error('设备不支持', err);
      });
  };
  useEffect(() => {
    if (location.protocol !== 'https:') {
      console.error('请使用https协议');
    }
    if (canvasRef.current) {
      canvas2dRef.current = canvasRef.current.getContext('2d');
    }
    if (cameraCanvasRef.current) {
      cameraCanvas2dRef.current = cameraCanvasRef.current?.getContext('2d');
    }
    openScan();
    return () => {
      closeCamera();
    };
  }, []);

  const handleSwitch = () => {
    setCameraExact(s => {
      return s === 'environment' ? 'user' : 'environment';
    });
    closeCamera();
    openScan();
  };

  return (
    <div>
      <div ref={canvasBox} className="relative">
        <div className="fixed top-2 right-2 p-2 z-20" onClick={handleSwitch}>
          Switch
        </div>
        <div className="trach-box" onClick={handleTrach}>
          trach
        </div>
        <div className="fixed bottom-0 left-0 w-full flex items-center justify-center bg-transparent z-40">
          <a
            className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white"
            onClick={handleShutter}
          >
            拍
          </a>
        </div>
        <video ref={videoRef} className="h-full w-full fixed left-0 top-0" />
        <canvas
          ref={canvasRef}
          id="canvas"
          className="h-full w-full fixed left-0 top-0"
        />
        <canvas
          ref={cameraCanvasRef}
          id="camera-canvas"
          className="h-full w-full fixed left-0 top-0 hidden"
        />
      </div>
    </div>
  );
}

export default Camera;
