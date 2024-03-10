"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Gotejamento() {
  const [volume, setVolume] = useState("");
  const [gotejamento, setGotejamento] = useState("");
  const [tempo, setTempo] = useState("");

  const limpar = () => {
    setVolume("");
    setGotejamento("");
    setTempo("");
  };

  const calcular = () => {
    let vol = parseFloat(volume);
    let got = parseFloat(gotejamento);
    let time = parseFloat(tempo);

    if (gotejamento == "" && volume != "" && tempo != "") {
      let gotResult = Math.round(vol / (time * 3));
      setGotejamento(gotResult.toString());
    }
    if (volume == "" && gotejamento != "" && tempo != "") {
      let volResult = Math.round(got * 3 * time);
      setVolume(volResult.toString());
    }
    if (tempo == "" && gotejamento != "" && volume != "") {
      let timeResult = Math.round(vol / (3 * got));
      setTempo(timeResult.toString());
    }
  };

  return (
    <div className="w-full m-auto flex flex-col items-center justify-center my-8 border-t-2 border-red-400 gap-8 ">
      <h2 className="text-2xl my-8  ">
        Calculadora de Gotejamento de Medicações
      </h2>
      <section className="flex flex-col md:flex-row  w-full max-[1200px] items-center justify-center gap-4">
        <div className="flex flex-col justify-center items-center ">
          <label htmlFor="volume" className="text-red-600 font-bold">
            {" "}
            Volume Total (ml)
          </label>
          <input
            type="text"
            name="volume"
            id="volume"
            className="text-black w-full p-3 rounded-md"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <label htmlFor="gotejamento" className="text-red-600 font-bold">
            {" "}
            Gotejamento (gotas/minuto)
          </label>
          <input
            type="text"
            name="gotejamento"
            id="gotejamento"
            value={gotejamento}
            onChange={(e) => setGotejamento(e.target.value)}
            className="text-black w-full p-3 rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <label htmlFor="tempo" className="text-red-600 font-bold">
            {" "}
            Tempo Total (h)
          </label>
          <input
            type="text"
            name="tempo"
            id="tempo"
            value={tempo}
            onChange={(e) => setTempo(e.target.value)}
            className="text-black w-full p-3 rounded-md"
          />
        </div>
      </section>
      <div className="flex gap-8 mt-8">
        <button
          onClick={calcular}
          className="bg-purple-400 px-12 py-4 rounded-xl text-black font-bold hover:bg-slate-400 ease-in duration-100 flex gap-2 items-center justify-center"
        >
          <Image
            src={"/icons/calc.svg"}
            width={24}
            height={24}
            alt="icone calculadora"
          />
          Calcular
        </button>
        <button
          onClick={limpar}
          className="bg-purple-400 px-12 py-4 rounded-xl text-black font-bold hover:bg-slate-400 ease-in duration-100 flex gap-2 items-center justify-center"
        >
          <Image
            src={"/icons/trash.svg"}
            width={24}
            height={24}
            alt="icone lixeira"
          />
          Limpar
        </button>
      </div>
    </div>
  );
}
