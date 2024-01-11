import Link from "next/link";
import Logo from "./Logo";
import SearchField from "./SearchField";
import LogSign from "./LogSign";
import AvatarLogOut from "./AvatarLogOut";

export default function Header() {
  return (
    <header className="w-full bg-fg fixed p-4 flex flex-row justify-between items-center">
      <Logo />
      <SearchField />
      {/* <LogSign /> */}
      <AvatarLogOut />
    </header>
  );
}
