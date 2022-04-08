import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import { getSession } from "next-auth/react";

export default function Home({ session }) {
  return (
    <div className="">
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* wIDGET */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get user session
  const session = await getSession(context);
  console.log(session);
  return {
    props: { session },
  };
}
