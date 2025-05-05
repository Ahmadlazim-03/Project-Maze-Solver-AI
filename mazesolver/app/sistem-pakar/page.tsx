import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Tally3, Shirt, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <Shirt className="h-6 w-6" />
          <span>OutfitExpert</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Beranda
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            Tentang
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sistem Pakar Rekomendasi Outfit</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Gunakan kecerdasan buatan dengan metode forward chaining untuk menemukan gaya outfit yang sesuai
                  dengan preferensi Anda.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/quiz">
                  <Button className="gap-2">
                    <Sparkles className="h-4 w-4" />
                    Mulai Konsultasi
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Kategori Outfit</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Sistem pakar kami akan merekomendasikan outfit dari 5 kategori utama berdasarkan preferensi Anda.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Casual</CardTitle>
                  <CardDescription>Nyaman dan santai untuk kegiatan sehari-hari</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Kombinasi t-shirt, jeans, sneakers, dan aksesori sederhana yang cocok untuk aktivitas santai.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Formal</CardTitle>
                  <CardDescription>Elegan dan profesional untuk acara resmi</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Setelan jas, kemeja, celana kain, sepatu formal, dan aksesori yang memberikan kesan profesional.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Vintage</CardTitle>
                  <CardDescription>Gaya klasik terinspirasi era lampau</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Pakaian dengan desain retro, warna pastel, dan aksesori klasik yang memberikan nuansa nostalgia.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Streetwear</CardTitle>
                  <CardDescription>Gaya urban yang trendi dan ekspresif</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Kombinasi hoodie, jaket, celana cargo, sneakers, dan aksesori yang mencerminkan budaya urban.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sporty</CardTitle>
                  <CardDescription>Aktif dan dinamis untuk gaya hidup energik</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Pakaian olahraga, legging, jersey, sepatu running, dan aksesori fungsional yang mendukung aktivitas
                    fisik.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mulai Sekarang</CardTitle>
                  <CardDescription>Temukan rekomendasi outfit yang tepat untuk Anda</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Link href="/quiz">
                    <Button className="gap-2">
                      <Tally3 className="h-4 w-4" />
                      Mulai Konsultasi
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Bagaimana Cara Kerjanya?</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Sistem pakar kami menggunakan metode forward chaining untuk menganalisis preferensi Anda dan memberikan
                rekomendasi outfit yang tepat.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Jawab Pertanyaan</h3>
                  <p className="text-muted-foreground text-center">
                    Isi kuesioner singkat tentang preferensi, aktivitas, dan gaya yang Anda sukai.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Analisis Forward Chaining</h3>
                  <p className="text-muted-foreground text-center">
                    Sistem menganalisis jawaban Anda menggunakan algoritma forward chaining untuk menentukan
                    rekomendasi.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Dapatkan Rekomendasi</h3>
                  <p className="text-muted-foreground text-center">
                    Terima rekomendasi outfit yang sesuai dengan preferensi dan kebutuhan Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} OutfitExpert. Hak Cipta Dilindungi.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Kebijakan Privasi
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Syarat & Ketentuan
          </Link>
        </nav>
      </footer>
    </div>
  )
}
