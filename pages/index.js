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
      <Landing heading="PLANNING - INTERIOR DESIGN - CONSERVATION - ARTS PLUS" buttonLable="Know More" customClass="custom-img" />
      <Philosophy />
      <Projects />
    </div>
  )
}
