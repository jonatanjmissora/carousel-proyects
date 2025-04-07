"use client"
import Image from "next/image";
import { useState } from "react";

const PROYECTS = [
  {
    id: 1,
    title: "PROYECT 1",
    img: "/img1.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    github: "",
    demo: ""
  },
  {
    id: 2,
    title: "PROYECT 2",
    img: "/img2.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    github: "",
    demo: ""
  },
  {
    id: 3,
    title: "PROYECT 3",
    img: "/img3.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    github: "",
    demo: ""
  },
  {
    id: 4,
    title: "PROYECT 4",
    img: "/img4.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    github: "",
    demo: ""
  },
]

export default function Home() {

  const [actualProyect, setActualProyect] = useState<number>(1)
  const [oldProyect, setOldProyect] = useState<number>(PROYECTS.length)

  const nextProyect = actualProyect + 1 > PROYECTS.length ? 1 : actualProyect + 1
  const prevProyect = actualProyect - 1 === 0 ? PROYECTS.length : actualProyect - 1

  const handleArrow = (direction: string) => {
    const index = direction === "next" ? nextProyect : prevProyect
    setActualProyect(index)
    setOldProyect(actualProyect)
  }

  return (
    <article className="carousel w-screen h-screen bg-violet-900 relative overflow-hidden">

      {/* IMAGES */}
      {
        PROYECTS.map(proyect =>

          <div key={proyect.id} className={`proyect w-screen h-screen absolute inset-0 ${proyect.id === actualProyect && "actual"} ${proyect.id === oldProyect && "old"}`}>
            <div className="proyect-img">
              <Image src={proyect.img} alt={proyect.title} fill className="object-cover" />
            </div>
          </div>
        )
      }

      <div className="w-1/3 absolute bottom-0 left-0 m-10 flex flex-col gap-8">

        {/* CARD> */}
        {
          PROYECTS.map(proyect =>

            <div key={proyect.id} className={`card flex-1 p-6 px-8 rounded-xl shadow-xl bg-white/50 text-black ${actualProyect === proyect.id && "actual"}`}>
              <div className="">KatoDev</div>
              <div className="text-2xl font-bold tracking-widest">{proyect.title}</div>
              <div className="text-xs py-4">{proyect.description}</div>
              <div className="flex gap-8 text-xs">
                <button>Github</button>
                <button>Demo</button>
              </div>
            </div>
          )
        }

        {/* THUMBNAIL */}
        <div className={`flex-1 flex gap-x-4 items-center justify-evenly relative z-3 p-7`}>

          <button onClick={() => handleArrow("prev")} className="bg-white/50 text-black font-bold text-xl p-2 px-3 rounded-full absolute left-0 top-[50%] -translate-y-1/2 z-3">{"<"}</button>

          {
            PROYECTS.map(proyect =>

              <div key={proyect.id} className={`flex-1 thumbnail flex flex-col gap-2 ${proyect.id === actualProyect && "active"}`}>
                <div className="w-[100%] h-[200px] relative rounded-xl shadow-xl overflow-hidden">
                  <Image src={proyect.img} alt={`thumbnail-${proyect.title}`} fill className="object-cover" />
                </div>
                <div className="text-center absolute bottom-0 left-0 right-0">
                  {proyect.title}
                </div>
              </div>
            )
          }

          <button onClick={() => handleArrow("next")} className="bg-white/50 text-black font-bold text-xl p-2 px-3 rounded-full absolute right-0 top-[50%] -translate-y-1/2 z-3">{">"}</button>

        </div>
      </div>

    </article>
  );
}
