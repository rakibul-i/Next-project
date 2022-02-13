import Link from "next/link";

const user = { name: "John", email: "user@gmail.com", role: "admin" };

const Header = () => {
  return (
    <header className="md:w-9/12 w-11/12 mx-auto flex flex-col sm:flex-row m-5 items-center justify-between h-auto">
      <div className="">
        <Link href={`/dashboard/${user.role}`}>
          <a className="text-2xl font-bold mr-6">Dashboard</a>
        </Link>
        <Link href={`/jobs`}>
          <a className="text-2xl font-bold">Jobs</a>
        </Link>
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
