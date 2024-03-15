import { useState } from 'react';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Modal trigger button */}
      <button className="..." onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      {/* Modal content */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl mb-4">详细</h2>
            {/* Modal body */}
            <div className="space-y-4">{/* Replace with your content */}</div>
            {/* Modal footer with buttons */}
            <div className="mt-6">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                获取验证码
              </button>
            </div>
            {/* Close button */}
            <button
              className="absolute top-0 right-0 mt-4 mr-4"
              onClick={() => setIsOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
