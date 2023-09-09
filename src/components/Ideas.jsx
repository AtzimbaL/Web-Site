import React from "react";

function Ideas(){
    return(
        <section className="flex flex-col items-center w-full px-5 py-3 bg-[#D4DDE3]">
            <div className="flex sm:flex-col md:flex-row md:flex-wrap lg:flex-nowrap lg:flex-row md:justify-center sm:w-full w-11/12 h-full">
                <div className=" md:w-2/5 lg:w-1/4  text-[#F2F2F2] text-center bg-[#1B778C] border-2 border-[#1B778C] p-3 sm:my-1 md:mx-1 lg:mx-1 rounded-xl">
                    <i class="fa-solid fa-earth-americas"></i>
                    <h6>MUNDIALMENTE CONOCIDO</h6>
                    <p>Actualmente el K-pop se ha expandido al rededor del mundo debido a que los artistas son muy talentosos mostrandole a los usuarios su cualidades.</p>
                </div>
                <div className=" md:w-2/5 lg:w-1/4  text-[#F2F2F2] text-center bg-[#1B778C] border-2 border-[#1B778C] p-3 sm:my-1 md:mx-1 lg:mx-1 rounded-xl">
                    <i class="fa-regular fa-face-smile-beam"></i>
                    <h6>FANS</h6>
                    <p>Debido a que en el mundo del K-pop existen demasiados grupos, estos cuentan con su respectivo fandom.</p>
                </div>
                <div className=" md:w-2/5 lg:w-1/4  text-[#F2F2F2] text-center bg-[#1B778C] border-2 border-[#1B778C] p-3 sm:my-1 md:mx-1 lg:mx-1 rounded-xl">
                    <i class="fa-solid fa-music"></i>
                    <h6>GRAN ESTILO</h6>
                    <p>Muchos de estos artistas son sus propios productores e incluso llegan a producir canciones o videos musicales para otros artistas.</p>
                </div>
                <div className=" md:w-2/5 lg:w-1/4 text-[#F2F2F2] text-center bg-[#1B778C] border-2 border-[#1B778C] p-3 sm:my-1 md:mx-1 lg:mx-1 rounded-xl">
                    <i class="fa-solid fa-language"></i>
                    <h6>IDIOMAS</h6>
                    <p>Algunas personas han tomado la iniciativa por aprender el idioma coreano por el gusto de escuchar este estilo de musica.</p>
                </div>

            </div>

            <div className="w-full py-3 flex items-center justify-center ">
                <button  className="rounded-full sm:px-2 md:px-5 sm:py-1 md:py-3 sm:text-lg md:text-md text-[#104568] border-2 border-[#104568] hover:bg-[#104568] hover:text-white transition duration-300">
                    Mas información
                </button>
            </div>

        </section>
    );

}

export default Ideas;