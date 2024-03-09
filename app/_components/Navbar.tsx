import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container w-[1200px] m-auto my-8 items-center justify-between flex-col md:flex">
      <h2 className="text-4xl text-red-700 font-semibold">Enfermagem Kit</h2>
      <div className="flex-col lg:flex gap-6">
        <Link
          href={"/pages/gotejamento"}
          className="text-md text-white p-4 hover:text-blue-800 ease-in duration-300"
        >
          Calculo de Gotejamento
        </Link>
        <Link
          href={""}
          className="text-md text-white p-4 hover:text-blue-800 ease-in duration-300"
        >
          Calculo de Bomba Infusora
        </Link>
        <Link
          href={"/pages/gerador"}
          className="text-md text-white p-4 hover:text-blue-800 ease-in duration-300"
        >
          Gerador de evolução
        </Link>
      </div>
    </div>
  );
}
