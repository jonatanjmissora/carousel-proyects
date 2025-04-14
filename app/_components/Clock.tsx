"use client"

export default function Clock() {

  return (
    <>
      <div className="ring">
        {/* <div className="hours" style={{ "transform": `translateY(-60px) rotate(${hourState * 6}deg)` }}></div> */}
        {/* <div className="minutes" style={{ "transform": `translateY(-65px) rotate(${minState * 6}deg)` }}></div> */}
        {/* <div className="seconds" style={{ "transform": `translateY(-70px) rotate(${secState * 6}deg)` }}></div> */}
      </div>
      <div className="numbers">
        <span className="span-hour"></span>
        <span className="span-minute"></span>
        <span className="span-second"></span>
      </div>
    </>
  )
}
