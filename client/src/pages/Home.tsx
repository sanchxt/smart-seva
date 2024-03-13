import Header from "../components/Header";

const Home = () => {
  return (
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
