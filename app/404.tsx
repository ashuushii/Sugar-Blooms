import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | Sugar Blooms</title>
        <meta
          name="description"
          content="Oops! The page you're looking for doesn't exist. Return to Sugar Blooms and explore our delicious cupcakes."
        />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-pink-50 text-center">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-pink-200 max-w-md">
          <h1 className="text-6xl font-bold text-pink-600 mb-4">404</h1>
          <p className="text-lg text-pink-700 mb-6">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link href="/">
            <a className="bg-gradient-to-r from-pink-400 to-rose-400 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:from-pink-500 hover:to-rose-500 transition-all">
              Return to Home
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
