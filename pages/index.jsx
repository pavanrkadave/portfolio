import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Portfolio | Pavan">
      <div className="flex flex-col items-center justify-center h-96 w-96 bg-green-50 rounded-xl shadow-lg transform hover:shadow-2xl">
        <h1 className="text-4xl font-bold p-4 text-center">
          Hey I'm Pavan <span className="text-4xl font-thin"> Hegde</span>
        </h1>
        <p className="text-xl font-thin mb-8">Consultant @ Grant Thornton LLP</p>
        <p className="text-xl font-mono">Page under construction!</p>
      </div>
    </Layout>
  );
}
