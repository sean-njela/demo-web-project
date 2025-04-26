"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  { src: "/images/competition1.jpg", alt: "Walka na zawodach" },
  { src: "/images/training1.jpg", alt: "Sesja treningowa" },
  { src: "/images/fans.jpg", alt: "Z fanami" },
  { src: "/images/award.jpg", alt: "Ceremonia wręczenia nagród" },
  { src: "/images/training2.jpg", alt: "Sesja treningowa" },
  { src: "/images/competition2.jpg", alt: "Moment mistrzowski" },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="group relative h-64 cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(image.src)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute right-4 top-4 rounded-full bg-red-600 p-2" onClick={() => setSelectedImage(null)}>
            <X className="h-6 w-6" />
          </button>
          <div className="relative h-[80vh] w-full max-w-4xl">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Powiększone zdjęcie z galerii"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
