import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center overflow-y-auto p-6"
      onClick={onClose}
    >
      <div
        className="rounded-2xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="flex items-center justify-between p-6 border-b bg-white rounded-t-2xl">
            <h2 className="text-xl font-semibold">
              {title}
            </h2>

            {onClose && (
              <button
                onClick={onClose}
                className="text-2xl text-gray-500"
              >
                ×
              </button>
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  );
}