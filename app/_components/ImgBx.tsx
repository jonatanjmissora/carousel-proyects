"use client"
import { animate } from "animejs"
import { useEffect } from "react"

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export default function ImgBx() {

  useEffect(() => {
    const imgBx = document.querySelector(".imgBx") as HTMLDivElement

    const gridSize = 10
    const cellSize = 300 / gridSize

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const box = document.createElement("i")
        box.style.backgroundPosition = `${-col * cellSize}px ${-row * cellSize}px`
        imgBx?.appendChild(box)
      }
    }

    if (imgBx) {
      imgBx.addEventListener("mousemove", () => {
        const boxes = document.querySelectorAll("i")
        boxes.forEach(box =>
          animate(box,
            {
              x: rand(-100, 100),
              y: rand(-100, 100),
              rotate: rand(-180, 180),
              scale: rand(0.5, 1.5),
              duration: 500,
              ease: 'inOut(1)',
              opacity: rand(0.1, 0.75),
            })
        )
      })

      imgBx.addEventListener("mouseout", () => {
        const boxes = document.querySelectorAll("i")
        boxes.forEach(box =>
          animate(box, { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 })
        )
      })

    }

    return () => {
      imgBx.removeEventListener("mouseover", () => { })
      imgBx.removeEventListener("mouseout", () => { })
    }

  }, [])

  return (
    <div className="img-container w-[400px] h-[400px] relative">
      <div className="imgBx"></div>
    </div>
  )
}


