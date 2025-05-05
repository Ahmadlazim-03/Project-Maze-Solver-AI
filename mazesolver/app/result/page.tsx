"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Shirt, Home, Share2, CheckCircle2, ClipboardList } from "lucide-react"
import { ModeToggle } from "../../components/ui/mode-toggle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Badge } from "../../components/ui/badge"

// Definisi pertanyaan untuk referensi jawaban
const questions = [
  {
    id: 1,
    question: "Apa jenis acara yang akan Anda hadiri?",
    options: [
      { id: "casual_event", label: "Hangout dengan teman", icon: "🍕" },
      { id: "formal_event", label: "Acara kantor atau formal", icon: "💼" },
      { id: "outdoor_event", label: "Aktivitas luar ruangan", icon: "🏞️" },
      { id: "party_event", label: "Pesta atau perayaan", icon: "🎉" },
      { id: "daily_event", label: "Aktivitas sehari-hari", icon: "📆" },
    ],
  },
  {
    id: 2,
    question: "Bagaimana cuaca saat ini?",
    options: [
      { id: "hot_weather", label: "Panas", icon: "☀️" },
      { id: "cold_weather", label: "Dingin", icon: "❄️" },
      { id: "rainy_weather", label: "Hujan", icon: "🌧️" },
      { id: "normal_weather", label: "Normal/Sedang", icon: "🌤️" },
    ],
  },
  {
    id: 3,
    question: "Apa warna yang Anda sukai?",
    options: [
      { id: "neutral_color", label: "Warna netral (hitam, putih, abu-abu)", icon: "⚫" },
      { id: "bright_color", label: "Warna cerah (merah, kuning, biru)", icon: "🌈" },
      { id: "pastel_color", label: "Warna pastel", icon: "🧁" },
      { id: "dark_color", label: "Warna gelap", icon: "🌑" },
      { id: "earth_color", label: "Warna earth tone (coklat, hijau army)", icon: "🌿" },
    ],
  },
  {
    id: 4,
    question: "Apa gaya yang Anda sukai?",
    options: [
      { id: "simple_style", label: "Simpel dan minimalis", icon: "✨" },
      { id: "elegant_style", label: "Elegan dan rapi", icon: "👔" },
      { id: "retro_style", label: "Retro dan klasik", icon: "🕰️" },
      { id: "trendy_style", label: "Trendy dan kekinian", icon: "🤳" },
      { id: "active_style", label: "Aktif dan dinamis", icon: "🏃" },
    ],
  },
  {
    id: 5,
    question: "Apa prioritas Anda dalam berpakaian?",
    options: [
      { id: "comfort_priority", label: "Kenyamanan", icon: "🛋️" },
      { id: "style_priority", label: "Gaya dan penampilan", icon: "💅" },
      { id: "function_priority", label: "Fungsionalitas", icon: "🔧" },
      { id: "unique_priority", label: "Keunikan", icon: "🦄" },
      { id: "formal_priority", label: "Kesopanan dan formalitas", icon: "🎩" },
    ],
  },
]

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
    color: "bg-blue-500",
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
    color: "bg-purple-500",
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
    color: "bg-amber-500",
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
    color: "bg-emerald-500",
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
    color: "bg-rose-500",
  },
}

type StyleKey = keyof typeof outfitRecommendations

export default function ResultPage() {
  const searchParams = useSearchParams()
  const [style, setStyle] = useState<StyleKey>("casual")
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({})
  const [formattedAnswers, setFormattedAnswers] = useState<Array<{ question: string; answer: string; icon: string }>>(
    [],
  )

  useEffect(() => {
    const styleParam = searchParams.get("style")
    if (styleParam && Object.keys(outfitRecommendations).includes(styleParam)) {
      setStyle(styleParam as StyleKey)
    }

    // Decode answers from URL
    const answersParam = searchParams.get("answers")
    if (answersParam) {
      try {
        const decodedAnswers = JSON.parse(decodeURIComponent(answersParam)) as Record<number, string>
        setUserAnswers(decodedAnswers)

        // Format answers for display
        const formatted = Object.entries(decodedAnswers).map(([questionId, answerId]) => {
          const questionObj = questions.find((q) => q.id === Number.parseInt(questionId))
          const optionObj = questionObj?.options.find((o) => o.id === answerId)

          return {
            question: questionObj?.question || "",
            answer: optionObj?.label || "",
            icon: optionObj?.icon || "",
          }
        })

        setFormattedAnswers(formatted)
      } catch (error) {
        console.error("Error parsing answers:", error)
      }
    }
  }, [searchParams])

  const recommendation = outfitRecommendations[style]

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `OutfitExpert - Rekomendasi ${recommendation.title}`,
          text: `Saya mendapatkan rekomendasi gaya ${recommendation.title} dari OutfitExpert. Coba konsultasi outfit kamu juga!`,
          url: window.location.href,
        })
        .catch((err) => {
          console.log("Error sharing:", err)
          alert("Salin link ini untuk membagikan hasil: " + window.location.href)
        })
    } else {
      alert("Salin link ini untuk membagikan hasil: " + window.location.href)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 to-gray-100 dark:from-gray-900/80 dark:to-gray-800 bg-[url('/subtle-pattern.png')] bg-fixed">
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm sticky top-0 z-10">
        <Link className="flex items-center gap-2 font-bold text-lg" href="/">
          <Shirt className="h-6 w-6 text-indigo-600" />
          <span className="text-indigo-600">OutfitExpert</span>
        </Link>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </header>
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white/80 to-gray-50 dark:from-gray-900/80 dark:to-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden">
              <div className={`h-2 w-full ${recommendation.color}`}></div>
              <CardHeader className="text-center pt-6 pb-4">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Badge className={`${recommendation.color} text-white px-3 py-1 text-sm mb-4`}>
                    Rekomendasi untuk Anda
                  </Badge>
                </motion.div>
                <CardTitle className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                  Hasil Rekomendasi Outfit
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 mt-2">
                  Berdasarkan jawaban Anda, kami merekomendasikan gaya:
                </CardDescription>
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold mt-3 text-primary"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {recommendation.title}
                </motion.h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{recommendation.description}</p>
              </CardHeader>

              <Tabs defaultValue="recommendation" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="recommendation" className="text-sm sm:text-base data-[state=active]:bg-white data-[state=active]:text-black dark:data-[state=active]:bg-gray-800 dark:data-[state=active]:text-white">
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Rekomendasi
                  </TabsTrigger>
                  <TabsTrigger value="answers" className="text-sm sm:text-base data-[state=active]:bg-white data-[state=active]:text-black dark:data-[state=active]:bg-gray-800 dark:data-[state=active]:text-white">
                    <ClipboardList className="h-4 w-4 mr-2" />
                    Jawaban Anda
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="recommendation">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-lg sm:text-xl mb-3 text-gray-900 dark:text-white">Atasan</h3>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                            {recommendation.tops.map((item, index) => (
                              <li key={index} className="text-sm sm:text-base">{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg sm:text-xl mb-3 text-gray-900 dark:text-white">Bawahan</h3>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                            {recommendation.bottoms.map((item, index) => (
                              <li key={index} className="text-sm sm:text-base">{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg sm:text-xl mb-3 text-gray-900 dark:text-white">Sepatu</h3>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                            {recommendation.shoes.map((item, index) => (
                              <li key={index} className="text-sm sm:text-base">{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg sm:text-xl mb-3 text-gray-900 dark:text-white">Aksesori</h3>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                            {recommendation.accessories.map((item, index) => (
                              <li key={index} className="text-sm sm:text-base">{item}</li>
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
                            className="rounded-lg shadow-md w-full md:w-auto h-auto"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg sm:text-xl mb-3 text-gray-900 dark:text-white">
                            Tips Gaya {recommendation.title}
                          </h3>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                            {recommendation.tips.map((tip, index) => (
                              <li key={index} className="text-sm sm:text-base">{tip}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </TabsContent>

                <TabsContent value="answers">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-white">Jawaban Anda</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                        Berikut adalah jawaban yang Anda berikan pada konsultasi:
                      </p>
                      <div className="space-y-4 mt-4">
                        {formattedAnswers.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.3 }}
                            className="flex items-start p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50"
                          >
                            <div className="mr-3 text-2xl sm:text-3xl">{item.icon}</div>
                            <div>
                              <h4 className="font-medium text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                {item.question}
                              </h4>
                              <p className="font-semibold text-gray-900 dark:text-white">{item.answer}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </TabsContent>
              </Tabs>

              <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center p-6">
                <Link href="/">
                  <Button variant="outline" className="w-full sm:w-auto gap-2 px-4 py-2 text-sm sm:text-base">
                    <Home className="h-4 w-4" />
                    Kembali ke Beranda
                  </Button>
                </Link>
                <Link href="/quiz">
                  <Button className="w-full sm:w-auto gap-2 px-4 py-2 text-sm sm:text-base">
                    <Shirt className="h-4 w-4" />
                    Konsultasi Lagi
                  </Button>
                </Link>
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto gap-2 px-4 py-2 text-sm sm:text-base"
                  onClick={handleShare}
                >
                  <Share2 className="h-4 w-4" />
                  Bagikan Hasil
                </Button>
              </CardFooter>
            </Card>

            <div className="space-y-6 mt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Penjelasan Sistem Pakar</h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Rekomendasi outfit ini dihasilkan menggunakan metode{" "}
                <strong>forward chaining</strong>, yaitu teknik inferensi dalam sistem pakar yang memproses informasi
                dari fakta-fakta yang diketahui (jawaban Anda) untuk mencapai kesimpulan (rekomendasi outfit).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">Bagaimana Forward Chaining Bekerja</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                      <li>Sistem mengumpulkan fakta awal (jawaban Anda dari kuesioner)</li>
                      <li>Menerapkan aturan-aturan (rules) pada fakta tersebut</li>
                      <li>Menghasilkan fakta baru berdasarkan kecocokan aturan</li>
                      <li>Proses berlanjut hingga mencapai kesimpulan akhir (rekomendasi outfit)</li>
                    </ol>
                  </CardContent>
                </Card>
                <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">Aturan yang Digunakan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
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
          </motion.div>
        </div>
      </main>
      <footer className="py-4 w-full shrink-0 items-center px-4 md:px-6 text-center backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-t border-gray-200/50 dark:border-gray-800/50">
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} OutfitExpert. Hak Cipta Dilindungi.
        </p>
      </footer>
    </div>
  )
}