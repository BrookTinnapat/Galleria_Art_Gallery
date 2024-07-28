import ContentCard from "../components/ContentCard";

import Header from "../components/Header";
// import ContentMap from "../components/ContentMap";
import { data } from "../data/db";
import logo from "../public/assets/logo.svg";

function App() {
  console.log(data);
  return (
    <>
      {/* <header className="border border-black bg-slate-500 py-8 flex justify-between">
        <img src={logo} alt="logo" className="w-[113px] h-[32px] mx-5" />
        <span className="text-sm mx-5 ">START SLIDESHOW</span>
      </header> */}

      <Header />

      <div className="mt-10 flex flex-col flex-wrap justify-center items-center">
        {data.map((items) => {
          return (
            <ContentCard
              key={items.id}
              thumbnail={items.images.thumbnail}
              name={items.name}
              artist={items.artist.name}
              alt={items.name}
            />
          );
        })}
      </div>

      {/* <div className="w-[346px] h-[auto] relative my-9">
        <img src={data[0].images.thumbnail} alt="test" className="relative" />
        <div className="absolute bottom-8 left-7">
          <p className="text-white text-[24px] font-medium">{data[0].name}</p>
          <p className="text-gray-400 text-[13px] font-medium">
            {data[0].artist.name}
          </p>
        </div>
      </div> */}
    </>
  );
}

export default App;
