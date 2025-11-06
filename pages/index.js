import Layout from "../components/Layout";
import BoldCommerce from "../components/BoldCommerce";
import fs from "fs/promises";
import path from "path";

export default function Home({ products }) {
  const settings = {
  "logo": null,
  "logoText": "Aniruddha25",
  "colors": {
    "primary": "#14532D",
    "secondary": "#F0FDF4",
    "accent": "#22C55E"
  },
  "typography": {
    "fontFamily": "inter"
  },
  "business": {
    "name": "Aniruddha25",
    "tagline": "Aniruddha25",
    "email": "Aniruddha25@yourstore.com",
    "phone": "564654",
    "address": "123 Main Street, City, Pune 12345"
  }
};
  
  return (
    <Layout>
      <BoldCommerce settings={settings} products={products} />
    </Layout>
  );
}

export async function getStaticProps() {
  const file = path.join(process.cwd(), "public", "products.json");
  const json = await fs.readFile(file, "utf-8");
  const products = JSON.parse(json);
  return { props: { products } };
}