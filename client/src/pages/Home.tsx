import Header from "../components/Header";

const Home = () => {
  return (
    // <div className="px-4 py-12 max-w-2xl mx-auto">
    //   <h1 className="text-3xl font-bold mb-4 text-slate-800">Home Page</h1>
    //   <p className="mb-4 text-slate-700">Lorem ipsum home page section</p>
    // </div>
    <>
      <Header />
      <div className="overflow-hidden h-80">
        <div className="flex gap-2">
          <div className="bg-yellow-400 lg:h-screen lg:w-[300px] overflow-hidden">
            <p className="uppercase text-6xl text-center">sidebar</p>
          </div>

          <div className="bg-yellow-400 lg:h-screen lg:w-screen overflow-hidden rounded-lg">
            <p className="uppercase text-6xl text-center">sidebar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
