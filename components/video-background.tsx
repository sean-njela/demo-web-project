"use client"

import { useEffect, useRef } from "react"

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  return (
    <video ref={videoRef} autoPlay muted loop playsInline className="h-full w-full object-cover">
      <source src="/videos/training.mp4" type="video/mp4" />
      Twoja przeglądarka nie obsługuje tagu wideo.
    </video>
  )
}
