import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>
    </>
  );
}
