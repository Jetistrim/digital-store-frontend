
const Modal = ({ visible, children }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center transition-colors z-40">
      {children}
    </div>
  );
};

export default Modal;
