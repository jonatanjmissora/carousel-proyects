import Card1 from "./_components/Card1";
import Card2 from "./_components/Card2";
import Clock from "./_components/Clock";
import Cord from "./_components/Cord";
import Particles from "./_components/Particles";
import Slider from "./_components/Slider";
import Speech from "./_components/Speech";

export default function Home() {

  return (
    <article className="w-screen flex justify-center items-center flex-col gap-8 relative">

      <Cord />

      <Card1 />

      <Card2 />

      <Speech />

      {/* <Clock /> */}

      <Particles />

      <Slider />


    </article>
  );
}
