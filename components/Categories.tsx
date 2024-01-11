import Link from "next/link";

export default function Categories() {
  return (
    <div className="flex flex-row justify-center w-full py-4">
      <Link className="mx-2" href={`#`}>{"<"}</Link>
      <Link className="mx-2" href={`#`}>Electro</Link>
      <Link className="mx-2" href={`#`}>Maison</Link>
      <Link className="mx-2" href={"#"}>Cuisine</Link>
      <Link className="mx-2" href={"#"}>{">"}</Link>
    </div>
  );
}
