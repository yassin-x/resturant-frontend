import Intro from "@/features/Home/components/Intro";
import Layout from "@/features/Home/components/Layout";
import Menu from "@/features/Home/components/Menu";

export default function Home() {
  return (
    <Layout>
      <Intro />
      <Menu />
    </Layout>
  );
}
