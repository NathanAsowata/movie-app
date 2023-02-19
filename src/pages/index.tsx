import Head from "next/head"

const Home = () => {
  return (
    <>
      <Head>
        <title>Movies & TV shows</title>
        <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
      </Head>
      <main className="bg-slate-800 text-white h-screen">
        <h1>This is the home page</h1>
      </main>
    </>
  )
}

export default Home