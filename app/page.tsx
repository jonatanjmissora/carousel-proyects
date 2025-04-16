import Card1 from "./_components/Card1";
import Card2 from "./_components/Card2";
import CardReveal from "./_components/CardReveal";
// import Clock from "./_components/Clock";
import Particles from "./_components/Particles";
import Particles2 from "./_components/Particles2";
import Slider from "./_components/Slider";
import Speech from "./_components/Speech";

export default function Home() {

  return (
    <article className="w-screen flex justify-center items-center flex-col gap-8 relative">



      <Particles2 />

      <Card1 />

      <Card2 />

      <Speech />

      {/* <Clock /> */}

      <Particles />

      <Slider />

      <CardReveal />

    </article>
  );
}
