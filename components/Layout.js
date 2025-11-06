import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Aniruddha25</title>
        <meta name="description" content="Aniruddha25" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white text-gray-900">{children}</div>
    </>
  );
}