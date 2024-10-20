import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen lg:flex">
      <aside className="w-screen lg:w-[35%] h-screen bg-[#1e213a] flex flex-col items-center">
        <nav className="w-[80%] flex mt-5 items-center justify-between">
          <button className="w-48 h-9 text-white bg-gray-500 active:ease-out active:duration-500 active:bg-green-300 active:w-44 active:h-7 hover:ease-out hover:duration-1000 hover:bg-gray-600">Search for places</button>
          <ul className="w-10 h-10 bg-gray-700 flex justify-center items-center   rounded-full cursor-pointer hover:ease-out hover:duration-1000 hover:bg-gray-500 hover:w-12 hover:h-12 active:ease-out active:duration-500 active:bg-green-300 active:w-10 active:h-10">
            <li className="w-6 h-4 flex justify-center items-center ">
              <Image className="" src="./weatherapp/location.svg" width={20} height={20} layout="responsive" alt="" />
            </li>
          </ul>
        </nav>
        <section className="w-full h-4/5 ">
          <div className="w-full h-[70%] mt-2 opacity-40   bg-[url('/weatherapp/others/Cloud-background.png')] "></div>
          <Image className="absolute flex top-1/4 left-36 h-48 w-52" src="/weatherapp/weather/04d.png" alt="" width={1080} height={1920}/>
        </section>
      </aside>
      <div className="w-[65%] h-full bg-slate-950 flex flex-col items-center">
        <header className="w-[70%] h-16  text-white flex justify-end mt-5">
          <ul className="flex items-center justify-center gap-x-2">
            <li className="text-black text-xl font-medium rounded-full bg-white w-10 h-10 flex items-center justify-center">°C</li>
            <li className="text-white text-xl font-medium rounded-full bg-gray-500 w-10 h-10 flex items-center justify-center">°F</li>
          </ul>
        </header>
        <div className="w-[70%] h-1/5  text-white flex justify-center gap-x-4 mt-4">
          <article className="flex flex-col items-center w-32 h-36 bg-[#1e213a] text-white">
            <h2 className="text-lg">Tomorrow</h2>
            <Image className="h-12 w-20 pe-4" src="/weatherapp/weather/04d.png" alt="" width={1080} height={1920}/>
            <h2 className="text-lg text-white mt-8">30°C <span className="opacity-50">18°C </span></h2>
          </article>
          <article className="flex flex-col items-center w-32 h-36 bg-[#1e213a] text-white">

          </article>
          <article className="flex flex-col items-center w-32 h-36 bg-[#1e213a] text-white">

          </article>
          <article className="flex flex-col items-center w-32 h-36 bg-[#1e213a] text-white">

          </article>
          <article className="flex flex-col items-center w-32 h-36 bg-[#1e213a] text-white">

          </article>

        </div>
        <section className="w-[70%] h-4/5  grid grid-rows-10 grid-cols-12 gap-3  ">
          <h2 className="text-2xl text-white mt-4 w-full h-12 grid-rows-10 gridTemplate">Today&apos;s Hightlights</h2>
          <article className=" bg-[#1e213a] topSquareLeft"></article>
          <article className=" bg-[#1e213a] topSquareRight"></article>
          <article className=" bg-[#1e213a] bottomSquareLeft"></article>
          <article className=" bg-[#1e213a] bottomSquareRight"></article>
        </section>
      </div>


    </div>
  );
}
