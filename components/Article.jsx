import Image from "next/image";

export default function Article({name, price}) {
  return (
    <div className="flex flex-col justify-center items-center bg-fg rounded-md p-8 w-64 h-80">
      <Image src="/pc.png" alt="Image d'article" width={150} height={150} />
      <div className="flex flex-row items-end">
        <h3 className="text-sm font-bold">
          {name} <br /> <span className="text-gray-500">2/3</span>
        </h3>
        <p className="text-sm">{price}<sup>Fcfa</sup></p>
      </div>
    </div>
  );
}
