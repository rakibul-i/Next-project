import Link from "next/link";
import HeaderItem from "./HeaderItem";

import {
  HomeIcon,
  UserIcon,
  SearchIcon,
  LightningBoltIcon,
  CollectionIcon,
  BadgeCheckIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 items-center justify-between h-auto">
      <div className="flex flex-grow items-center justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      {/* logo */}
      <Link href="/" passHref>
        <span className="text-5xl font-bold tracking-wider cursor-pointer text-white font-arial">
          Blog
        </span>
      </Link>
    </header>
  );
};

export default Header;
