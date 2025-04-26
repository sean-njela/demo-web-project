import type { ReactNode } from "react"

interface PowerBlockProps {
  icon: ReactNode
  title: string
  description: string
}

export default function PowerBlock({ icon, title, description }: PowerBlockProps) {
  return (
    <div className="group flex flex-col items-center rounded-lg bg-zinc-900 p-8 text-center transition-transform hover:-translate-y-2">
      <div className="mb-4 transform transition-transform group-hover:scale-110">{icon}</div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  )
}
