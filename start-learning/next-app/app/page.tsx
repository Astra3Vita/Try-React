import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Hello, Next.js!</h1>
        <Link href="/users">Go to Users Page</Link>
        <ProductCard />
      </main>
    </div>
  );
}
