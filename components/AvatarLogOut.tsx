import Image from "next/image";
import Link from "next/link";

export default function AvatarLogOut() {
  return (
    <div className="flex flex-row items-center ">
      <Link href={"/logout"} className="m-1 font-bold">
        Déconnexion
      </Link>
      <Link href={"/profile"} className="m-1 font-bold">
        <img
          role="img"
          src="https://ui-avatars.com/api/?name=Amadou+Coulibaly&background=0D8ABC&color=fff"
          alt="Avatar"
          width={30}
          height={30}
          className="rounded-full"
        />
      </Link>
    </div>
  );
}
