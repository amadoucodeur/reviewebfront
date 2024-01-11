import Image from "next/image";
import SearchField from "./SearchField";

export default function Cover() {
  return (
    <div className="relative -z-10">
      <Image
        src="/cover.jpg"
        className=""
        alt="cover"
        width={1920}
        height={1080}
      />
      <div className="absolute top-0 w-full h-full bg-opacity-50 bg-fg text-white flex flex-col justify-center items-start pl-10">
        <h1 className="text-6xl font-bold text-center p-2 text-slate-950">:/Revie</h1>
        <h2 className=" max-w-md text-slate-950 text-left hidden  md:block">
          Donnez une seconde vie à vos articles, économisez, préservez la nature
          et défiez la cherté de la vie – pour un quotidien plus durable et
          abordable.
        </h2>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Rechercher..."
            className="p-1 px-4 outline-none rounded-xl opacity-50 hover:opacity-100 transition-opacity duration-300"
          />{" "}
        </div>
      </div>
    </div>
  );
}
