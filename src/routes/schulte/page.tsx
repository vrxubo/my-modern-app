import { useEffect, useRef, useState } from 'react';
// import { useMachine } from '@xstate/react';
// import { createMachine } from 'xstate';
import { RocketIcon } from '@radix-ui/react-icons';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// const toggleMachine = createMachine({
//   id: 'toggle',
//   initial: 'inactive',
//   states: {
//     inactive: {
//       on: { TOGGLE: 'active' },
//     },
//     active: {
//       on: { TOGGLE: 'inactive' },
//     },
//   },
// });

const colVariants: { [key in number]: string } = {
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
};

function Schulte({ level = 3 }: { level: number }) {
  const start = useRef(0);
  const consuming = useRef<string>('');
  const [status, setStatus] = useState<'ready' | 'playing' | 'end'>('ready');
  const [result, setResult] = useState<Array<number>>([]);
  const gridData = useRef<Array<number>>(
    Array(level * level)
      .fill(0)
      .map((_, i) => i + 1),
  );
  const handleClick = (v: number) => {
    if (v === result.length + 1) {
      setResult([...result, v]);
    }
  };

  useEffect(() => {
    if (result.length === level * level) {
      const total = Date.now() - start.current;
      consuming.current = `${Math.floor(total / 1000)} S.${total % 1000}`;
      setStatus('end');
    }
  }, [result]);

  useEffect(() => {
    if (status === 'playing') {
      start.current = Date.now();
      gridData.current = Array(level * level)
        .fill(0)
        .map((_, i) => i + 1)
        .sort(() => Math.random() - 0.5);
      setResult([]);
    }
  }, [status]);

  const colCls = status === 'playing' ? colVariants[level] : 'grid-cols-1';

  return (
    <div className="p-2">
      <Alert className="bg-orange-200 mb-2">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Schulte</AlertTitle>
        <AlertDescription>以最快的速度从1点到{level * level}</AlertDescription>
      </Alert>
      <div className={`grid gap-1 max-w-2xl ${colCls}`}>
        {status === 'ready' && (
          <span
            onClick={() => setStatus('playing')}
            className="aspect-square flex items-center justify-center text-4xl font-bold text-white select-none bg-sky-300"
            key={0}
          >
            开始
          </span>
        )}
        {status === 'playing' &&
          gridData.current.map(item => (
            <span
              onClick={() => handleClick(item)}
              className={`aspect-square flex items-center justify-center text-4xl font-bold text-white select-none ${
                result.includes(item) ? 'bg-sky-500' : 'bg-sky-300'
              }`}
              key={item}
            >
              {item}
            </span>
          ))}
        {status === 'end' && (
          <span
            onClick={() => setStatus('playing')}
            className="aspect-square flex items-center justify-center text-4xl font-bold text-white select-none bg-sky-300"
            key={0}
          >
            重新开始
          </span>
        )}
      </div>
      <Dialog open={status === 'end'} onOpenChange={() => setStatus('ready')}>
        <DialogContent className="w-1/2 rounded-xl">
          <div className="flex items-center justify-center p-1  text-base">
            耗时：{consuming.current}
          </div>
          <div className="text-center">
            <Button onClick={() => setStatus('playing')}>再来一次</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Schulte;
