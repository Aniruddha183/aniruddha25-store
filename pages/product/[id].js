import Layout from "../../components/Layout";
import fs from "fs/promises";
import path from "path";

export default function ProductPage({ product }) {
  if (!product) return null;
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        <div className="relative w-full h-80 rounded-xl overflow-hidden bg-gray-50">
          {product.images?.[0] && <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />}
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="text-xl font-semibold mb-4">{"$" + (Number(product.price).toFixed(0))}</div>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button className="px-6 py-3 bg-black text-white rounded-lg">Add to Cart</button>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const file = path.join(process.cwd(), "public", "products.json");
  const json = await fs.readFile(file, "utf-8");
  const products = JSON.parse(json);
  return {
    paths: products.map(p => ({ params: { id: p.id.toString() } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const file = path.join(process.cwd(), "public", "products.json");
  const json = await fs.readFile(file, "utf-8");
  const products = JSON.parse(json);
  const product = products.find(p => p.id.toString() === params.id);
  return { props: { product: product || null } };
}