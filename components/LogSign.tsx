import Link from "next/link";

export default function LogSign() {
  return (
    <div className="flex flex-row items-center">
      <Link href={"/login"} className="m-1 font-bold">
        Connexion
      </Link>
      <Link href={"/signup"} className="m-1 font-bold">
        Inscription
      </Link>
    </div>
  );
}
