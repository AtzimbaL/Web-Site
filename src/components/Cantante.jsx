import React from "react";

function Cantante() {
  return (
    <section className="sm:bg-[#D4DDE3]  w-full flex justify-center">
      <div className="flex flex-wrap items-start nor:flex-wrap justify-center md:flex-nowrap md:flex-row w-11/12">
        <div className="sm:w-2/3 nor:w-2/5  text-center px-3 py-3 flex flex-col  justify-around items-center rounded-3xl m-2 border-2">
          <img
            src="./imagenes/img1.jpeg"
            className="rounded-full sm:w-2/3 nor:w-2/3 lg:w-2/4"
          />
          <h4 className="m-1 font-bold">DPR IAN</h4>
          <p className="w-full sm:text-base m-2">
            Es un artista con bastante creatividad, es productor, director y
            cantante..
          </p>
          <a
            href="https://drama.fandom.com/es/wiki/DPR_IAN"
            className="rounded-full sm:px-2 md:px-5 sm:py-1 md:py-3 sm:text-lg md:text-md text-[#104568] border-2 border-[#104568] hover:bg-[#104568] hover:text-white transition duration-300"
          >
            Saber más
          </a>
        </div>

        <div className="sm:w-2/3 nor:w-2/5 text-center px-3 py-3 flex flex-col  justify-around items-center rounded-3xl m-2 border-2 ">
          <img
            src="./imagenes/img3.jpeg"
            className="rounded-full sm:w-2/3 nor:w-2/3 lg:w-2/4"
          />
          <h4 className="m-1 font-bold">DPR LIVE</h4>
          <p className="w-full sm:text-base m-2">
            Es un artista perteneciente a la firma DPR.
          </p>
          <a
            href="https://drama.fandom.com/es/wiki/DPR_LIVE"
            className="rounded-full sm:px-2 md:px-5 sm:py-1 md:py-3 sm:text-lg md:text-md text-[#104568] border-2 border-[#104568] hover:bg-[#104568] hover:text-white transition duration-300"
          >
            Saber más
          </a>
        </div>

        <div className="sm:w-2/3 nor:w-2/5 text-center px-3 py-3 flex flex-col  justify-around items-center rounded-3xl m-2 border-2">
          <img
            src="./imagenes/img4.jpg"
            className="rounded-full sm:w-2/3 nor:w-2/3 lg:w-2/4"
          />
          <h4 className="m-1 font-bold">JAY PARK</h4>
          <p className="w-full sm:text-base m-2">
            Es un cantante estadounidense dedicado al khh.
          </p>
          <a
            href="https://drama.fandom.com/es/wiki/Jay_Park"
            className="rounded-full sm:px-2 md:px-5 sm:py-1 md:py-3 sm:text-lg md:text-md text-[#104568] border-2 border-[#104568] hover:bg-[#104568] hover:text-white transition duration-300"
          >
            Saber más
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cantante;
