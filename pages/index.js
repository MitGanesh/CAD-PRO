import Landing from "@/components/Landing";
import Philosophy from "@/components/Philosophy";
import Projects from "@/components/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SGCC - Planning & Designing</title>
        <meta name="description" content="Genrated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <Philosophy />
      <Projects />
    </div>
  )
}
