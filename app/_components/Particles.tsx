"use client"

import { useEffect, useRef } from "react"

type DotsProps = {
  x: number;
  y: number;
  size: number;
  color: string;
}

function Particles() {

  const bannerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {

    const canvas = canvasRef.current
    const banner = bannerRef.current

    if (canvas && banner) {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      const ctx = canvas.getContext("2d")

      const arrayColor = ["red", "pink", "blue", "purple", "orange", "green", "yellow"]
      const dots: DotsProps[] = []
      for (let index = 0; index < 20; index++) {
        dots.push({
          x: Math.floor(Math.random() * canvas.width),
          y: Math.floor(Math.random() * canvas.height),
          size: Math.random() * 50 + 50,
          color: arrayColor[Math.floor(Math.random() * 5)]
        })
      }
      const drawDots = () => {
        if (ctx) {

          dots.forEach(dot => {
            ctx.fillStyle = dot.color
            ctx.beginPath()
            ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
            ctx.shadowBlur = 50
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            ctx.shadowColor = dot.color;
            ctx.fill()
          })
        }
      }
      drawDots()
    }
  }, [])

  return (
    <div ref={bannerRef} className="z-1 banner w-screen h-screen flex justify-center items-center relative">
      <span className="text-4xl z-2 font-bold text-black">HOLA MANOLA</span>

      <canvas id="canvas" ref={canvasRef} className=" -z-1 pointer-events-none absolute inset-0 w-full h-full">
      </canvas>
    </div>
  )
}

export default Particles