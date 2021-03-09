import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Layout({ children, title }) {
  return (
    <div className="flex flex-col h-screen justify-between bg-green-100">
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Head>
      <Navbar title={title} />
      <main className="flex flex-col items-center justify-between p-4">
        {children}
      </main>
      <footer className="flex h-16 flex-col items-center justify-between p-2">
        <p className="text-lg">
          <span className="font-medium">
            &copy; {new Date().getFullYear()}{" "}
          </span>{" "}
          Pavan Hegde
        </p>
      </footer>
    </div>
  );
}
