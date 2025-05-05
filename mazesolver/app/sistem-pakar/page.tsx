"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Tally3, Shirt, Sparkles } from "lucide-react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
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
          <Link className="text-sm font-semibold bg-indigo-100 px-3 py-2 rounded-lg transition-all duration-300" href="/sistem-pakar">
            Beranda
          </Link>
          <Link className="text-sm font-semibold hover:bg-indigo-100 px-3 py-2 rounded-lg transition-all duration-300" href="/about">
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


      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-indigo-500 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93"
              alt="Stylish fashion background with clothing and accessories"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4 animate-slide-up">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl drop-shadow-lg">
                  Sistem Pakar Rekomendasi Outfit
                </h1>
                <p className="max-w-[700px] text-indigo-100 text-lg md:text-xl leading-relaxed">
                  Temukan gaya outfit ideal Anda dengan kecerdasan buatan berbasis metode forward chaining.
                </p>
              </div>
              <Link href="/quiz">
                <Button className="gap-2 bg-white text-indigo-600 hover:bg-indigo-100 transition-all transform hover:scale-105 shadow-lg animate-slide-up animation-delay-200">
                  <Sparkles className="h-4 w-4 animate-pulse" />
                  Mulai Konsultasi
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Outfit Categories Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-indigo-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900 drop-shadow-md">
                Kategori Outfit
              </h2>
              <p className="max-w-[700px] text-gray-700 md:text-xl leading-relaxed font-medium">
                Temukan rekomendasi outfit dari lima kategori utama yang sesuai dengan gaya dan preferensi Anda.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/90 backdrop-blur-lg border border-gray-200/30 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <CardHeader>
                  <Image
                    src="https://blog.cove.id/content/images/2023/03/kemeja-putih-celana-denim.webp"
                    alt="Casual outfit with jeans and t-shirt"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-xl"
                    loading="lazy"
                  />
                  <CardTitle className="text-2xl font-bold text-indigo-700">Casual</CardTitle>
                  <CardDescription className="text-gray-600">Santai dan nyaman untuk aktivitas sehari-hari</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">T-shirt, jeans, sneakers, dan aksesori simpel untuk gaya santai yang praktis.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/90 backdrop-blur-lg border border-gray-200/30 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <CardHeader>
                  <Image
                    src="https://juaraga.id/cdn/shop/articles/portrait-handsome-smiling-stylish-hipster-lambersexual-model_1.jpg?v=1698288647"
                    alt="Formal outfit with suit and tie"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-xl"
                    loading="lazy"
                  />
                  <CardTitle className="text-2xl font-bold text-indigo-700">Formal</CardTitle>
                  <CardDescription className="text-gray-600">Elegan untuk acara resmi</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Jas, kemeja, celana kain, dan sepatu formal untuk tampilan profesional.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/90 backdrop-blur-lg border border-gray-200/30 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <CardHeader>
                  <Image
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
                    alt="Vintage outfit with retro dress"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-xl"
                    loading="lazy"
                  />
                  <CardTitle className="text-2xl font-bold text-indigo-700">Vintage</CardTitle>
                  <CardDescription className="text-gray-600">Gaya klasik dengan sentuhan nostalgia</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Pakaian retro, warna pastel, dan aksesori klasik untuk nuansa zaman dulu.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/90 backdrop-blur-lg border border-gray-200/30 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <CardHeader>
                  <Image
                    src="https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
                    alt="Streetwear outfit with hoodie and sneakers"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-xl"
                    loading="lazy"
                  />
                  <CardTitle className="text-2xl font-bold text-indigo-700">Streetwear</CardTitle>
                  <CardDescription className="text-gray-600">Trendi dengan vibe urban</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Hoodie, jaket, celana cargo, dan sneakers untuk gaya budaya jalanan.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-indigo-100 to-indigo-200 backdrop-blur-lg border border-indigo-300/50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <CardHeader>
                  <Image
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
                    alt="Outfit inspiration for consultation"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-xl"
                    loading="lazy"
                  />
                  <CardTitle className="text-2xl font-bold text-indigo-700 text-center mt-3">Mulai Sekarang</CardTitle>
                  <CardDescription className="text-gray-600 text-center">Dapatkan outfit yang sesuai untuk Anda</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Link href="/quiz">
                    <Button className="gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg rounded-lg px-6 py-3">
                      <Tally3 className="h-4 w-4 animate-pulse" />
                      Mulai Konsultasi
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-white/90 backdrop-blur-lg border border-gray-200/30 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <CardHeader>
                  <Image
                    src="https://cdn.medcom.id/dynamic/content/2024/08/23/1708631/1pKsZ62E7f.png?w=480"
                    alt="Sporty outfit with activewear"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-xl"
                    loading="lazy"
                  />
                  <CardTitle className="text-2xl font-bold text-indigo-700">Sporty</CardTitle>
                  <CardDescription className="text-gray-600">Dinamis untuk gaya hidup aktif</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Legging, jersey, sepatu running, dan aksesori untuk aktivitas fisik.</p>
                </CardContent>
              </Card>
      
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-50 to-purple-50 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1445205170230-053b83016050')] bg-fixed bg-cover opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900 drop-shadow-md">
                Bagaimana Cara Kerjanya?
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-lg leading-relaxed">
                Sistem kami menganalisis preferensi Anda dengan algoritma forward chaining untuk rekomendasi outfit terbaik.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="flex flex-col items-center space-y-4 bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Jawab Kuesioner</h3>
                  <p className="text-gray-600 text-center">
                    Ceritakan preferensi dan gaya Anda melalui pertanyaan singkat.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Analisis Cerdas</h3>
                  <p className="text-gray-600 text-center">
                    Algoritma forward chaining memproses jawaban untuk rekomendasi tepat.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Rekomendasi Outfit</h3>
                  <p className="text-gray-600 text-center">
                    Dapatkan saran outfit yang sesuai dengan kebutuhan Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white shadow-sm">
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} OutfitExpert. Hak Cipta Dilindungi.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs text-gray-600 hover:text-indigo-600 transition-colors hover:underline underline-offset-4">
            Kebijakan Privasi
          </Link>
          <Link href="#" className="text-xs text-gray-600 hover:text-indigo-600 transition-colors hover:underline underline-offset-4">
            Syarat & Ketentuan
          </Link>
        </nav>
      </footer>
    </div>
    
  )
}