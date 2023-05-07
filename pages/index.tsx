import { API_ROUTES } from "@/helpers/constants";
import fetcher from "@/service/service";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>TechIND</title>
      </Head>
      <main className={`min-h-screen p-4 pt-14 select-none`}>
        <div  >Test</div>
      </main>
    </>
  );
}
