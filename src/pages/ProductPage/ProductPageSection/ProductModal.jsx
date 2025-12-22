const ProductModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white w-[95%] max-w-5xl max-h-[90vh] overflow-y-auto p-6 rounded relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
};

export default ProductModal;
