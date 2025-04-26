"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    alert("Dziękujemy za wiadomość! Odezwiemy się wkrótce.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Twoje Imię"
          value={formData.name}
          onChange={handleChange}
          required
          className="border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500"
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Twój Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500"
        />
      </div>
      <div>
        <Input
          type="text"
          name="subject"
          placeholder="Temat"
          value={formData.subject}
          onChange={handleChange}
          required
          className="border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500"
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Twoja Wiadomość"
          value={formData.message}
          onChange={handleChange}
          required
          className="min-h-[150px] border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500"
        />
      </div>
      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
        WYŚLIJ WIADOMOŚĆ
      </Button>
    </form>
  )
}
