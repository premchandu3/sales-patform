interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center overflow-y-auto p-6">
      {children}
    </div>
  );
}