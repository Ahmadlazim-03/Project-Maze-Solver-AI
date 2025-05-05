"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Shirt, Home, Share2 } from "lucide-react"

// Definisi rekomendasi outfit berdasarkan gaya
const outfitRecommendations = {
  casual: {
    title: "Casual",
    description: "Gaya santai dan nyaman untuk kegiatan sehari-hari",
    tops: ["T-shirt polos", "Kemeja casual", "Sweater ringan", "Polo shirt"],
    bottoms: ["Jeans", "Chino pants", "Celana pendek", "Rok casual"],
    shoes: ["Sneakers", "Slip-on", "Loafers", "Sandal"],
    accessories: ["Jam tangan casual", "Topi", "Kacamata hitam", "Tas selempang"],
    tips: [
      "Pilih pakaian dengan bahan yang nyaman",
      "Kombinasikan warna netral dengan satu warna aksen",
      "Gunakan aksesori minimalis untuk melengkapi tampilan",
      "Prioritaskan kenyamanan tanpa mengorbankan gaya",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  formal: {
    title: "Formal",
    description: "Gaya elegan dan profesional untuk acara resmi",
    tops: ["Kemeja formal", "Blouse", "Blazer", "Jas"],
    bottoms: ["Celana kain", "Rok pensil", "Celana formal", "Dress pants"],
    shoes: ["Sepatu pantofel", "Heels", "Oxford shoes", "Loafers formal"],
    accessories: ["Dasi", "Jam tangan formal", "Ikat pinggang kulit", "Tas kerja"],
    tips: [
      "Pilih pakaian dengan potongan yang rapi dan pas badan",
      "Gunakan warna netral seperti hitam, navy, atau abu-abu",
      "Pastikan pakaian bebas dari kerutan dan noda",
      "Pilih aksesori yang elegan dan tidak berlebihan",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  vintage: {
    title: "Vintage",
    description: "Gaya klasik terinspirasi era lampau",
    tops: ["Kemeja motif retro", "Blouse vintage", "Sweater oversized", "Cardigan klasik"],
    bottoms: ["Mom jeans", "Rok A-line", "Celana kulot", "Celana corduroy"],
    shoes: ["Mary janes", "Loafers vintage", "Oxford shoes", "Boots klasik"],
    accessories: ["Kacamata bulat", "Bandana", "Jam tangan klasik", "Tas vintage"],
    tips: [
      "Cari pakaian dengan siluet dan pola yang khas dari era tertentu",
      "Kombinasikan item vintage dengan item modern untuk tampilan yang segar",
      "Gunakan warna pastel atau earth tone untuk nuansa retro",
      "Tambahkan aksesori khas era tertentu untuk memperkuat tampilan",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  streetwear: {
    title: "Streetwear",
    description: "Gaya urban yang trendi dan ekspresif",
    tops: ["Hoodie", "T-shirt grafis", "Jaket bomber", "Sweatshirt"],
    bottoms: ["Cargo pants", "Jeans baggy", "Track pants", "Celana pendek oversized"],
    shoes: ["Sneakers high-top", "Chunky sneakers", "Boots", "Skateboard shoes"],
    accessories: ["Topi snapback", "Beanie", "Tas selempang", "Kalung statement"],
    tips: [
      "Bermain dengan proporsi dan layering",
      "Kombinasikan item branded dengan item basic",
      "Gunakan warna-warna kontras atau monokrom",
      "Pilih sneakers yang menjadi statement piece",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  sporty: {
    title: "Sporty",
    description: "Gaya aktif dan dinamis untuk gaya hidup energik",
    tops: ["Jersey olahraga", "Tank top", "Sports bra", "Jaket windbreaker"],
    bottoms: ["Legging", "Track pants", "Celana pendek olahraga", "Jogger pants"],
    shoes: ["Running shoes", "Training shoes", "Slip-on sporty", "Sneakers atletik"],
    accessories: ["Headband", "Smartwatch", "Tas olahraga", "Botol minum"],
    tips: [
      "Pilih bahan yang breathable dan moisture-wicking",
      "Kombinasikan item olahraga dengan item casual",
      "Gunakan warna-warna cerah untuk tampilan energik",
      "Pilih sepatu yang nyaman dan fungsional",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
}

type StyleKey = keyof typeof outfitRecommendations

export default function ResultPage() {
  const searchParams = useSearchParams()
  const [style, setStyle] = useState<StyleKey>("casual")

  useEffect(() => {
    const styleParam = searchParams.get("style")
    if (styleParam && Object.keys(outfitRecommendations).includes(styleParam)) {
      setStyle(styleParam as StyleKey)
    }
  }, [searchParams])

  const recommendation = outfitRecommendations[style]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <Shirt className="h-6 w-6" />
          <span>OutfitExpert</span>
        </Link>
      </header>
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">Hasil Rekomendasi Outfit</CardTitle>
              <CardDescription>Berdasarkan jawaban Anda, kami merekomendasikan gaya:</CardDescription>
              <h2 className="text-3xl font-bold mt-2 text-primary">{recommendation.title}</h2>
              <p className="mt-2">{recommendation.description}</p>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Atasan</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {recommendation.tops.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Bawahan</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {recommendation.bottoms.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Sepatu</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {recommendation.shoes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Aksesori</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {recommendation.accessories.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex justify-center">
                  <Image
                    src={recommendation.image || "/placeholder.svg"}
                    alt={`${recommendation.title} outfit example`}
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tips Gaya {recommendation.title}</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {recommendation.tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="outline" className="gap-2">
                  <Home className="h-4 w-4" />
                  Kembali ke Beranda
                </Button>
              </Link>
              <Link href="/quiz">
                <Button className="gap-2">
                  <Shirt className="h-4 w-4" />
                  Konsultasi Lagi
                </Button>
              </Link>
              <Button variant="secondary" className="gap-2">
                <Share2 className="h-4 w-4" />
                Bagikan Hasil
              </Button>
            </CardFooter>
          </Card>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Penjelasan Sistem Pakar</h2>
            <p>
              Rekomendasi outfit ini dihasilkan menggunakan metode <strong>forward chaining</strong>, yaitu teknik
              inferensi dalam sistem pakar yang memproses informasi dari fakta-fakta yang diketahui (jawaban Anda) untuk
              mencapai kesimpulan (rekomendasi outfit).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Bagaimana Forward Chaining Bekerja</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Sistem mengumpulkan fakta awal (jawaban Anda dari kuesioner)</li>
                    <li>Menerapkan aturan-aturan (rules) pada fakta tersebut</li>
                    <li>Menghasilkan fakta baru berdasarkan kecocokan aturan</li>
                    <li>Proses berlanjut hingga mencapai kesimpulan akhir (rekomendasi outfit)</li>
                  </ol>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Aturan yang Digunakan</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Jenis acara menentukan formalitas outfit</li>
                    <li>Cuaca mempengaruhi jenis pakaian yang sesuai</li>
                    <li>Preferensi warna mengarahkan pada gaya tertentu</li>
                    <li>Gaya yang disukai memperkuat kategori outfit</li>
                    <li>Prioritas dalam berpakaian menyempurnakan rekomendasi</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t text-center">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} OutfitExpert. Hak Cipta Dilindungi.
        </p>
      </footer>
    </div>
  )
}
