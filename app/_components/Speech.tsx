"use client"

import { useRef } from "react"

export default function Speach() {

  const textRef = useRef<HTMLTextAreaElement>(null)

  const handlePlay = () => {
    const msg = new SpeechSynthesisUtterance()
    msg.text = textRef?.current?.value ?? ""
    msg.rate = 0.8
    const voices = window.speechSynthesis.getVoices()
    msg.voice = voices[1]
    speechSynthesis.speak(msg)
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <textarea ref={textRef} className="bg-white text-black p-2 text-center rounded-lg border border-slate-600" name="speech" id="speech"></textarea>
      <button className="border p-3 py-2 rounded-lg" onClick={handlePlay} >PLAY</button>
    </div>
  )
}
