import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import { getSession } from "next-auth/react";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import Feed from "../components/Feed";
import { useSession } from "next-auth/react";

export default function Home({ session }) {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
    },
  });

  if (status === "loading") {
    return <Login />;
  }

  return (
    <div className="w-full overflow-hidden">
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      <main className="flex mt-6">
        {/* Sidebar */}
        <Sidebar></Sidebar>
        {/* Feed */}
        <Feed></Feed>
        {/* wIDGET */}
        <Widget></Widget>
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
