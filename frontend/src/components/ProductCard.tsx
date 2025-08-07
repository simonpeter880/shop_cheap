export default function ProductCard() {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <img
        src="/placeholder.png"
        alt="Product"
        className="w-full h-48 object-cover mb-2"
      />
      <h3 className="text-lg font-semibold">Sample Product</h3>
      <p className="text-gray-600">$99.99</p>
      <button className="mt-2 bg-yellow-500 text-black px-4 py-1 rounded hover:bg-yellow-400">
        Add to Cart
      </button>
    </div>
  );
}
