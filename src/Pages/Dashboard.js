import { Nav } from "../Components/Nav";
import { Header } from "../Components/Header";
import { Reviews } from "../Components/Reviews";
import { Content } from "../Components/Content";
import { Footer } from "../Components/Footer";
import { Stats } from "../Components/Stats";

export default function Dashboard() {
  return (
    <>
      <Nav />
      <Header />
      <Stats />
      <Content />
      <Reviews />

      <Footer />
    </>
  );
}
