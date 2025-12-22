const ProductModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white w-[95%] max-w-5xl max-h-[75vh] overflow-y-auto  p-4 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-lg font-bold bg-primary rounded-full w-7 text-white"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
};

export default ProductModal;
