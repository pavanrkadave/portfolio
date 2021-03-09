import Link from "next/link";

export default function Navbar({ title }) {
  return (
    <>
      <nav className="flex items-center flex-wrap bg-green-400 shadow-xl p-3">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              {title}
            </span>
          </a>
        </Link>
      </nav>
    </>
  );
}
