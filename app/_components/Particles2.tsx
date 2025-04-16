"use client"

import { useEffect } from "react"

type DotProps = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  color: number;
  size: number;
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function Particles2() {


  useEffect(() => {

    const canvas = document.getElementById("canvas") as HTMLCanvasElement
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const ctx = canvas.getContext("2d")
    let dots: DotProps[] = []

    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      ctx?.clearRect(0, 0, canvas.width, canvas.height)
      createDots()
    }

    window.addEventListener("resize", resizeCanvas);

    function drawDots() {
      if (ctx) {

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        dots.forEach(dot => {
          dot.y += dot.dy
          dot.x += dot.dx
          dot.color += 0.5

          if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1
          if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1

          ctx.beginPath()
          ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
          ctx.fillStyle = `hsl(${dot.color}, 100%, 50%)`
          ctx.shadowBlur = 15

          ctx.shadowColor = `hsl(${dot.color}, 100%, 50%)`
          ctx.fill()
        })
        requestAnimationFrame(drawDots)
      }
    }

    const createDots = () => {
      dots = []
      for (let i = 0; i < 20; i++) {
        const dot: DotProps = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: rand(0.05, -0.05),
          dy: rand(0.05, -0.05),
          color: Math.random() * 360,
          size: 4
        }
        dots.push(dot)
      }
    }

    createDots()
    drawDots()

    return removeEventListener("resize", resizeCanvas, true)
  }, [])

  return (
    <div className="relative w-screen h-[400px] border flex justify-center items-center">
      <span className="text-4xl z-2 font-bold text-black">HOLA MANOLA</span>

      <canvas id="canvas" className=" -z-1 pointer-events-none absolute inset-0 w-full h-full">
      </canvas>
    </div>
  )
}

export default Particles2