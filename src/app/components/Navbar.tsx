import Link from "next/link";

export const Navbar = async () => {
  return (
    <header className="dark:bg-mygrey light:bg-white w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="z-40 flex font-mono text-lg font-bold">
          łewis®<span className="text-myorange">Co</span>
        </Link>
      </div>
    </header>
  );
};
