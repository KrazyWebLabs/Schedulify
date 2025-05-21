"use client"

interface ModalProps {
  state: boolean;
  children: React.ReactNode;
}

export default function Modal({ children, state }: ModalProps) {
  return (
    <div>
      {state &&
        <div className='fixed top-0 left-0 z-50 w-full h-full bg-gray-900/90 flex justify-center items-center'>
          {
            children
          }
        </div>
      }
    </div>
  );
};