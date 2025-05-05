"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Shirt, Brain, ArrowRight } from "lucide-react"

export default function AboutPage() {
   const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <header className="px-4 lg:px-8 h-16 flex items-center justify-between border-b bg-white shadow-lg sticky top-0 z-50">
        <Link className="flex items-center gap-2 font-bold text-xl tracking-tight" href="/">
          <Shirt className="h-7 w-7 text-indigo-600" />
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            OutfitExpert
          </span>
        </Link>

        <button className="sm:hidden block text-indigo-600" onClick={toggleMenu}>
          {/* icon hamburger */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav className="hidden sm:flex ml-auto gap-4">
          <Link className="text-sm font-semibold hover:bg-indigo-100 px-3 py-2 rounded-lg transition-all duration-300" href="/sistem-pakar">
          
            Beranda
          </Link>
          <Link className="text-sm font-semibold bg-indigo-100 px-3 py-2 rounded-lg transition-all duration-300" href="/about">
         
            Tentang
          </Link>
        </nav>
        {menuOpen && (
  <div
    className="absolute top-16 right-4 w-40 bg-white rounded-lg shadow-lg py-2 z-50"
    style={{
      animation: 'fadeInDown 0.3s ease-out both',
      opacity: 0,
      transform: 'translateY(-0.5rem)',
      animationFillMode: 'forwards',
    }}
  >
    <style>
      {`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-0.5rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}
    </style>

    <Link
      href="/sistem-pakar"
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 rounded-md transition"
    >
      Beranda
    </Link>
    <Link
      href="/about"
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 rounded-md transition"
    >
      Tentang
    </Link>
  </div>
)}

      </header>
      <main className="flex-1">
        <section className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-r from-indigo-100 to-purple-100">
          <div className="container px-4 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3">
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Tentang OutfitExpert
                </h1>
                <p className="max-w-[700px] text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mx-auto">
                  Sistem pakar berbasis AI untuk rekomendasi outfit yang stylish dan sesuai dengan kepribadian Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-28 lg:py-36">
          <div className="container px-4 md:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                  <Brain className="mr-2 h-5 w-5" />
                  <span>Sistem Pakar</span>
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl text-gray-900">
                  Apa itu Sistem Pakar?
                </h2>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
                  Sistem pakar adalah teknologi AI yang meniru keahlian manusia untuk menyelesaikan masalah kompleks. Sistem ini menggabungkan pengetahuan mendalam dengan logika cerdas untuk memberikan solusi terbaik.
                </p>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
                  OutfitExpert memanfaatkan sistem pakar untuk merekomendasikan outfit berdasarkan acara, cuaca, warna favorit, dan gaya pribadi Anda.
                </p>
              </div>
              <Card className="relative bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-3xl overflow-hidden max-w-xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-70" />
                <CardHeader className="relative z-10 p-8">
                  <CardTitle className="text-3xl font-bold text-gray-900 tracking-tight text-center">
                    Komponen Sistem Pakar
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-500 text-center mt-3">
                    Elemen utama yang membuat OutfitExpert cerdas
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 p-8 grid gap-8">
                  <div className="grid grid-cols-[40px_1fr] items-start pb-4 transition-transform duration-300 hover:scale-105">
                    <span className="flex h-4 w-4 translate-y-2 rounded-full bg-indigo-500 shadow-lg" />
                    <div className="space-y-2">
                      <p className="font-semibold text-lg text-gray-900">Basis Pengetahuan</p>
                      <p className="text-base text-gray-600 leading-relaxed">
                        Koleksi aturan dan tren fashion terkini
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[40px_1fr] items-start pb-4 transition-transform duration-300 hover:scale-105">
                    <span className="flex h-4 w-4 translate-y-2 rounded-full bg-indigo-500 shadow-lg" />
                    <div className="space-y-2">
                      <p className="font-semibold text-lg text-gray-900">Mesin Inferensi</p>
                      <p className="text-base text-gray-600 leading-relaxed">
                        Algoritma cerdas untuk analisis dan rekomendasi
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[40px_1fr] items-start pb-4 transition-transform duration-300 hover:scale-105">
                    <span className="flex h-4 w-4 translate-y-2 rounded-full bg-indigo-500 shadow-lg" />
                    <div className="space-y-2">
                      <p className="font-semibold text-lg text-gray-900">Antarmuka Pengguna</p>
                      <p className="text-base text-gray-600 leading-relaxed">
                        Kuesioner interaktif yang mudah digunakan
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[40px_1fr] items-start pb-4 transition-transform duration-300 hover:scale-105">
                    <span className="flex h-4 w-4 translate-y-2 rounded-full bg-indigo-500 shadow-lg" />
                    <div className="space-y-2">
                      <p className="font-semibold text-lg text-gray-900">Modul Penjelasan</p>
                      <p className="text-base text-gray-600 leading-relaxed">
                        Transparansi dalam proses rekomendasi
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-r from-purple-100 to-indigo-100">
          <div className="container px-4 md:px-8">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-6 text-center">
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl text-gray-900">
                Forward Chaining
              </h2>
              <p className="max-w-[85%] text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
                OutfitExpert menggunakan teknik forward chaining untuk memproses informasi secara logis dan menghasilkan rekomendasi outfit yang tepat.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 mt-12">
              {[
                { step: 1, title: "Pengumpulan Fakta", desc: "Mengumpulkan preferensi Anda melalui kuesioner interaktif" },
                { step: 2, title: "Penerapan Aturan", desc: "Menerapkan aturan fashion pada data yang terkumpul" },
                { step: 3, title: "Inferensi", desc: "Menghasilkan fakta baru berdasarkan aturan yang cocok" },
                { step: 4, title: "Iterasi", desc: "Mengulangi proses dengan fakta baru untuk hasil optimal" },
                { step: 5, title: "Kesimpulan", desc: "Memberikan rekomendasi outfit yang sesuai" },
              ].map(({ step, title, desc }) => (
                <Card key={step} className="flex flex-col items-center justify-center p-6 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl">
                  <CardHeader className="flex flex-col items-center text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-xl">
                      {step}
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 mt-4">{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-base text-gray-600">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-28 lg:py-36">
          <div className="container px-4 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl text-gray-900">
                Mulai Konsultasi Sekarang
              </h2>
              <p className="max-w-[700px] text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
                Dapatkan rekomendasi outfit yang stylish dan sesuai dengan kebutuhan Anda hanya dalam beberapa klik.
              </p>
              <Link href="/quiz">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white gap-3 rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 shadow-lg">
                  Mulai Konsultasi <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-8 border-t bg-white shadow-md">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} OutfitExpert. Hak Cipta Dilindungi.
        </p>
        <nav className="sm:ml-auto flex gap-6">
          <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="#">
            Kebijakan Privasi
          </Link>
          <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="#">
            Syarat & Ketentuan
          </Link>
        </nav>
      </footer>
    </div>
  )
}