import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  Brain,
  ChevronRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Trophy,
  Youtube,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import VideoBackground from "@/components/video-background"
import PowerBlock from "@/components/power-block"
import Gallery from "@/components/gallery"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Piotr Siegoczyński w akcji"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            PIOTR <span className="text-red-600">SIEGOCZYŃSKI</span>
          </h1>
          <p className="mb-8 text-xl font-medium sm:text-2xl md:text-3xl">Wielokrotny Mistrz Świata w Kickboxingu</p>
          <div className="max-w-3xl">
            <blockquote className="mb-8 border-l-4 border-red-600 pl-4 text-xl font-medium italic md:text-2xl">
              "Mistrzowie nie rodzą się na ringu — tworzą się podczas treningów."
            </blockquote>
          </div>
          <Button className="mt-8 bg-red-600 px-8 py-6 text-lg font-bold hover:bg-red-700">
            ZAREZERWUJ TRENING <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center">
          <a href="#power-blocks" className="animate-bounce rounded-full bg-white/10 p-2 backdrop-blur-sm">
            <ChevronRight className="h-6 w-6 rotate-90 text-white" />
          </a>
        </div>
      </section>

      {/* Power Blocks */}
      <section id="power-blocks" className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <PowerBlock
              icon={<Trophy className="h-12 w-12 text-red-600" />}
              title="Mistrz Świata"
              description="Wielokrotny Mistrz Świata w Kickboxingu z niezrównanym oddaniem dla sportu."
            />
            <PowerBlock
              icon={<Brain className="h-12 w-12 text-red-600" />}
              title="Mentor i Trener"
              description="Przekształcam sportowców w mistrzów poprzez profesjonalne wskazówki i spersonalizowane treningi."
            />
            <PowerBlock
              icon={<Award className="h-12 w-12 text-red-600" />}
              title="30+ Lat w Kickboxingu"
              description="Dekady doświadczenia na najwyższym poziomie rywalizacji w kickboxingu."
            />
          </div>
        </div>
      </section>

      {/* Video Background Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <VideoBackground />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">TRENUJ Z NAJLEPSZYMI</h2>
            <Button className="bg-red-600 px-8 py-6 text-lg font-bold hover:bg-red-700">ZAREZERWUJ TRENING</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-zinc-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            O <span className="text-red-600">PIOTRZE</span>
          </h2>
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="md:w-1/3">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                <Image src="/images/portrait.jpg" alt="Piotr Siegoczyński portret" fill className="object-cover" />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="mb-6 text-lg">
                Piotr Siegoczyński to wielokrotny Mistrz Świata w Kickboxingu z ponad 30-letnim doświadczeniem w tym
                sporcie. Jego droga od młodego sportowca do światowej sławy mistrza jest dowodem jego oddania,
                dyscypliny i pasji do kickboxingu.
              </p>
              <p className="mb-6 text-lg">
                Obecnie Piotr dzieli się swoją wiedzą jako trener i mentor, pomagając kolejnemu pokoleniu sportowców
                osiągnąć pełny potencjał. Jego metodologia treningowa łączy techniczną precyzję z siłą mentalną, tworząc
                mistrzów zarówno na ringu, jak i poza nim.
              </p>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                CZYTAJ WIĘCEJ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">OSIĄGNIĘCIA</h2>
          <div className="mx-auto max-w-3xl">
            <div className="relative border-l border-red-600 pl-8">
              <div className="mb-12">
                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-600">
                  <Trophy className="h-3 w-3" />
                </div>
                <h3 className="text-xl font-bold">Mistrz Świata</h3>
                <p className="text-zinc-400">Wielokrotny Mistrz Świata w Kickboxingu w różnych kategoriach wagowych</p>
              </div>
              <div className="mb-12">
                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-600">
                  <Trophy className="h-3 w-3" />
                </div>
                <h3 className="text-xl font-bold">Mistrz Europy</h3>
                <p className="text-zinc-400">Zdominował europejski obieg z wieloma tytułami mistrzowskimi</p>
              </div>
              <div className="mb-12">
                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-600">
                  <Trophy className="h-3 w-3" />
                </div>
                <h3 className="text-xl font-bold">10-krotny Mistrz Polski</h3>
                <p className="text-zinc-400">Niepokonany mistrz krajowy przez dekadę</p>
              </div>
              <div className="mb-12">
                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-600">
                  <Trophy className="h-3 w-3" />
                </div>
                <h3 className="text-xl font-bold">Członek Kadry Narodowej</h3>
                <p className="text-zinc-400">Reprezentował Polskę w zawodach międzynarodowych</p>
              </div>
              <div className="mb-12">
                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-600">
                  <Trophy className="h-3 w-3" />
                </div>
                <h3 className="text-xl font-bold">Trener i Mentor</h3>
                <p className="text-zinc-400">Wyszkolił wielu mistrzów i elitarnych sportowców</p>
              </div>
              <div>
                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-600">
                  <Trophy className="h-3 w-3" />
                </div>
                <h3 className="text-xl font-bold">Laureat Nagród</h3>
                <p className="text-zinc-400">Uznany za wkład w rozwój kickboxingu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-zinc-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">GALERIA</h2>
          <Gallery />
        </div>
      </section>

      {/* Offer Section */}
      <section id="offers" className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">USŁUGI</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-zinc-900 text-white">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">Treningi Indywidualne</h3>
                <p className="mb-6">
                  Sesje treningowe jeden na jeden dostosowane do Twoich celów i poziomu umiejętności.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">ZAREZERWUJ</Button>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 text-white">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">Warsztaty Motywacyjne</h3>
                <p className="mb-6">Inspirujące sesje skupione na sile mentalnej i osiąganiu szczytowej wydajności.</p>
                <Button className="w-full bg-red-600 hover:bg-red-700">DOWIEDZ SIĘ WIĘCEJ</Button>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 text-white">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">Konsultacje</h3>
                <p className="mb-6">
                  Profesjonalne porady dla sportowców, zespołów i organizacji chcących podnieść swoje wyniki.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">ZAPYTAJ</Button>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 text-white">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">Wystąpienia Gościnne</h3>
                <p className="mb-6">Inspirujące prezentacje dla wydarzeń, firm i organizacji sportowych.</p>
                <Button className="w-full bg-red-600 hover:bg-red-700">ZAREZERWUJ WYDARZENIE</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-zinc-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">OPINIE</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-black text-white">
              <CardContent className="p-6">
                <blockquote className="border-l-4 border-red-600 pl-4">
                  <p className="mb-4 italic">
                    "Trening z Piotrem przekształcił nie tylko moją technikę, ale całe podejście do sportu. Jego
                    wskazówki zaprowadziły mnie od amatora do mistrza kraju."
                  </p>
                  <footer className="font-bold">— Marek Kowalski, Mistrz Polski</footer>
                </blockquote>
              </CardContent>
            </Card>
            <Card className="bg-black text-white">
              <CardContent className="p-6">
                <blockquote className="border-l-4 border-red-600 pl-4">
                  <p className="mb-4 italic">
                    "Warsztat motywacyjny Piotra zmienił nastawienie naszego zespołu. Techniki mentalnej wytrzymałości,
                    którymi się podzielił, okazały się bezcenne podczas zawodów."
                  </p>
                  <footer className="font-bold">— Warszawski Klub Walki</footer>
                </blockquote>
              </CardContent>
            </Card>
            <Card className="bg-black text-white">
              <CardContent className="p-6">
                <blockquote className="border-l-4 border-red-600 pl-4">
                  <p className="mb-4 italic">
                    "Połączenie technicznej wiedzy i psychologicznego wglądu, które Piotr wnosi do treningu, jest
                    niezrównane. Nie tworzy tylko zawodników; tworzy mistrzów."
                  </p>
                  <footer className="font-bold">— Anna Nowak, Medalistka Mistrzostw Europy</footer>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">KONTAKT</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold">Skontaktuj się</h3>
              <ContactForm />
            </div>
            <div>
              <h3 className="mb-6 text-2xl font-bold">Informacje Kontaktowe</h3>
              <div className="mb-6 flex items-center">
                <Phone className="mr-4 h-5 w-5 text-red-600" />
                <p>+48 123 456 789</p>
              </div>
              <div className="mb-6 flex items-center">
                <Mail className="mr-4 h-5 w-5 text-red-600" />
                <p>kontakt@piotrsiegoczyński.pl</p>
              </div>
              <div className="mb-8 flex items-start">
                <MapPin className="mr-4 h-5 w-5 text-red-600" />
                <p>Warszawa, Polska</p>
              </div>
              <h3 className="mb-4 text-xl font-bold">Obserwuj Mnie</h3>
              <div className="flex space-x-4">
                <Link href="#" className="rounded-full bg-zinc-800 p-3 transition-colors hover:bg-red-600">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="rounded-full bg-zinc-800 p-3 transition-colors hover:bg-red-600">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="rounded-full bg-zinc-800 p-3 transition-colors hover:bg-red-600">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-500">© {new Date().getFullYear()} Piotr Siegoczyński. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  )
}
