import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Philosophy from "@/components/Philosophy";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <Philosophy />
      <Projects />
      <Footer />
    </main>
  )
}
