import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex flex-row items-center">
      <Image role="img" src="/logo.png" alt="Revie" width={40} height={40}  className="rounded-xl"/>
      <p className="text-2xl font-bold ml-2">Revie</p>
    </Link>
  );
}
