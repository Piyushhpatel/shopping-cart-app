const QuantityCounter = ({ quantity, increase, decrease }) => {
  return (
    <div className="flex items-center gap-3">
      <p>Quantity: </p>
      <div
        className="text-2xl bg-gray-200 h-6 w-6 flex items-center justify-center  rounded-full cursor-pointer select-none"
        onClick={() => {
          if (quantity != 1) decrease();
        }}
      >
        -
      </div>
      <div className="text-xl font-semibold">{quantity}</div>
      <div
        className="text-2xl bg-gray-200 h-6 w-6 flex items-center justify-center rounded-full cursor-pointer select-none"
        onClick={increase}
      >
        +
      </div>
    </div>
  );
};

export default QuantityCounter;
