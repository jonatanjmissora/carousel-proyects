"use client"

import { useRef } from 'react'

export default function Card1() {

  const card1Ref = useRef<HTMLDivElement>(null)

  const handleMouseEvent = (e: React.MouseEvent<HTMLDivElement>) => {

    if (card1Ref.current) {

      const x = e.pageX - card1Ref?.current?.offsetLeft
      const y = e.pageY - card1Ref?.current?.offsetTop

      card1Ref.current?.style.setProperty("--x", x + "px")
      card1Ref.current?.style.setProperty("--y", y + "px")
    }

  }

  return (
    <div className="card-container">

      <div ref={card1Ref} onMouseMoveCapture={handleMouseEvent} className="box1 flex justify-center items-center font-bold tracking-widest text-xl text-white">
        GLOW CARD
        1
      </div>
    </div>
  )
}
