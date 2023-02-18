import Head from "next/head"

const Home = () => {
  return (
    <>
      <Head>
        <title>Movies & TV shows</title>
        <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
      </Head>
      <main className="bg-slate-800 text-white text-center">
        <h1 className="font-bold uppercase underline">This is the homepage</h1>
        <p>This is a paragraph</p>
      </main>
    </>
  )
}

export default Home