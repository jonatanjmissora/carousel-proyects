import Card1 from "./_components/Card1";
import Card2 from "./_components/Card2";
import Clock from "./_components/Clock";
import Particles from "./_components/Particles";
import Speech from "./_components/Speech";

export default function Home() {

  return (
    <article className="container w-screen h-screen flex justify-center items-center flex-wrap gap-8 relative overflow-x-hidden">

      <Card1 />

      <Card2 />

      <Speech />

      {/* <Clock /> */}

      <Particles />

    </article>
  );
}
