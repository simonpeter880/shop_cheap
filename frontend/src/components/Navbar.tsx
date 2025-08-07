export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <div className="text-xl font-bold">MyAmazon</div>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/cart" className="hover:underline">Cart</a>
        <a href="/account" className="hover:underline">Account</a>
      </div>
    </nav>
  );
}
