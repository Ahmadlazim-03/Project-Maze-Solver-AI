import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Shirt, Brain, ArrowRight } from "lucide-react"

export default function AboutPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tentang OutfitExpert</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Sistem pakar berbasis kecerdasan buatan untuk rekomendasi outfit yang sesuai dengan preferensi Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                  <Brain className="mr-1 h-4 w-4" />
                  <span>Sistem Pakar</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Apa itu Sistem Pakar?</h2>
                <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  Sistem pakar adalah cabang dari kecerdasan buatan yang menggunakan pengetahuan manusia untuk
                  menyelesaikan masalah yang biasanya membutuhkan keahlian manusia. Sistem ini dirancang untuk meniru
                  proses pengambilan keputusan seorang pakar dalam bidang tertentu.
                </p>
                <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  OutfitExpert menggunakan sistem pakar untuk memberikan rekomendasi outfit berdasarkan berbagai faktor
                  seperti acara, cuaca, preferensi warna, dan gaya yang Anda sukai.
                </p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Komponen Sistem Pakar</CardTitle>
                  <CardDescription>Elemen-elemen utama dalam sistem pakar OutfitExpert</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-primary" />
                    <div className="space-y-1">
                      <p className="font-medium leading-none">Basis Pengetahuan</p>
                      <p className="text-sm text-muted-foreground">
                        Kumpulan aturan dan fakta tentang fashion dan gaya berpakaian
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-primary" />
                    <div className="space-y-1">
                      <p className="font-medium leading-none">Mesin Inferensi</p>
                      <p className="text-sm text-muted-foreground">
                        Algoritma forward chaining untuk menganalisis input dan menghasilkan rekomendasi
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-primary" />
                    <div className="space-y-1">
                      <p className="font-medium leading-none">Antarmuka Pengguna</p>
                      <p className="text-sm text-muted-foreground">
                        Kuesioner interaktif untuk mengumpulkan preferensi pengguna
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-primary" />
                    <div className="space-y-1">
                      <p className="font-medium leading-none">Modul Penjelasan</p>
                      <p className="text-sm text-muted-foreground">
                        Penjelasan tentang bagaimana rekomendasi dihasilkan
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Forward Chaining</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                OutfitExpert menggunakan metode forward chaining, sebuah teknik inferensi dalam sistem pakar yang
                memproses informasi dari fakta-fakta yang diketahui untuk mencapai kesimpulan.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-8">
              <Card className="flex flex-col items-center justify-center p-4">
                <CardHeader className="items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <CardTitle>Pengumpulan Fakta</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>Sistem mengumpulkan fakta awal melalui jawaban pengguna pada kuesioner</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center justify-center p-4">
                <CardHeader className="items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <CardTitle>Penerapan Aturan</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>Sistem menerapkan aturan-aturan fashion pada fakta yang telah dikumpulkan</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center justify-center p-4">
                <CardHeader className="items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <CardTitle>Inferensi</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>Sistem menghasilkan fakta baru berdasarkan kecocokan aturan dengan fakta yang ada</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center justify-center p-4 sm:col-span-2 md:col-span-1">
                <CardHeader className="items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    4
                  </div>
                  <CardTitle>Iterasi</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>Proses berlanjut dengan menerapkan aturan pada fakta baru yang dihasilkan</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center justify-center p-4 sm:col-span-2 md:col-span-1">
                <CardHeader className="items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    5
                  </div>
                  <CardTitle>Kesimpulan</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>Sistem mencapai kesimpulan berupa rekomendasi outfit yang sesuai</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Mulai Konsultasi Sekarang</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Temukan rekomendasi outfit yang sesuai dengan preferensi dan kebutuhan Anda melalui sistem pakar
                OutfitExpert.
              </p>
              <Link href="/quiz">
                <Button size="lg" className="gap-2">
                  Mulai Konsultasi <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
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
