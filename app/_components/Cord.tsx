"use client"

import { useEffect, useRef } from "react"

function Cord() {

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {

    const canvas = canvasRef.current

    if (canvas) {
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
      const mouseX = canvas.width / 2
      const mouseY = canvas.height / 2

      const drawCord = () => {
        ctx?.clearRect(0, 0, canvas.width, canvas.height)
        ctx.strokeStyle = "#fff"
        ctx.lineWidth = 1
      }

    }
  }, [])

  return (
    <div className="w-screen">


      <canvas id="canvas" ref={canvasRef} className="w-full h-[400px] border mx-auto">
      </canvas>
    </div>
  )
}

export default Cord