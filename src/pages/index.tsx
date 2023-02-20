import Head from "next/head"

const Home = () => {

  
  return (
    <>
      <Head>
        <title>Movies & TV shows</title>
        <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
      </Head>
      <main 
        className="bg-slate-800 text-white h-screen"
      >
        <section 
          className="bg-[url('../../public/hero-image.jpg')] bg-no-repeat bg-cover bg-center h-[400px] grid place-content-center"
        >
          <h1 
            className="shadow-md shadow-gray-400 bg-slate-900 p-3 text-4xl text-center font-medium"
          >
            Explore Millions of Movies and TV Shows
          </h1>
        </section>
      </main>
    </>
  )
}

export default Home