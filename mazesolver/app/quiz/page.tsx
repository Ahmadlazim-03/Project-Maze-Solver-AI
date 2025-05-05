"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"
import { Label } from "../../components/ui/label"
import { Progress } from "../../components/ui/progress"
import { Shirt, ArrowLeft, ArrowRight } from "lucide-react"

// Definisi pertanyaan untuk sistem pakar
const questions = [
  {
    id: 1,
    question: "Apa jenis acara yang akan Anda hadiri?",
    options: [
      { id: "casual_event", label: "Hangout dengan teman" },
      { id: "formal_event", label: "Acara kantor atau formal" },
      { id: "outdoor_event", label: "Aktivitas luar ruangan" },
      { id: "party_event", label: "Pesta atau perayaan" },
      { id: "daily_event", label: "Aktivitas sehari-hari" },
    ],
  },
  {
    id: 2,
    question: "Bagaimana cuaca saat ini?",
    options: [
      { id: "hot_weather", label: "Panas" },
      { id: "cold_weather", label: "Dingin" },
      { id: "rainy_weather", label: "Hujan" },
      { id: "normal_weather", label: "Normal/Sedang" },
    ],
  },
  {
    id: 3,
    question: "Apa warna yang Anda sukai?",
    options: [
      { id: "neutral_color", label: "Warna netral (hitam, putih, abu-abu)" },
      { id: "bright_color", label: "Warna cerah (merah, kuning, biru)" },
      { id: "pastel_color", label: "Warna pastel" },
      { id: "dark_color", label: "Warna gelap" },
      { id: "earth_color", label: "Warna earth tone (coklat, hijau army)" },
    ],
  },
  {
    id: 4,
    question: "Apa gaya yang Anda sukai?",
    options: [
      { id: "simple_style", label: "Simpel dan minimalis" },
      { id: "elegant_style", label: "Elegan dan rapi" },
      { id: "retro_style", label: "Retro dan klasik" },
      { id: "trendy_style", label: "Trendy dan kekinian" },
      { id: "active_style", label: "Aktif dan dinamis" },
    ],
  },
  {
    id: 5,
    question: "Apa prioritas Anda dalam berpakaian?",
    options: [
      { id: "comfort_priority", label: "Kenyamanan" },
      { id: "style_priority", label: "Gaya dan penampilan" },
      { id: "function_priority", label: "Fungsionalitas" },
      { id: "unique_priority", label: "Keunikan" },
      { id: "formal_priority", label: "Kesopanan dan formalitas" },
    ],
  },
]

export default function QuizPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleNext = () => {
    if (selectedOption) {
      // Simpan jawaban
      setAnswers({ ...answers, [questions[currentQuestion].id]: selectedOption })

      if (currentQuestion < questions.length - 1) {
        // Pindah ke pertanyaan berikutnya
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
      } else {
        // Semua pertanyaan sudah dijawab, lakukan forward chaining
        const newAnswers = { ...answers, [questions[currentQuestion].id]: selectedOption }
        const result = forwardChaining(newAnswers)

        // Navigasi ke halaman hasil dengan membawa data hasil
        router.push(`/result?style=${result}`)
      }
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedOption(answers[questions[currentQuestion - 1].id] || null)
    }
  }

  // Implementasi algoritma forward chaining sederhana
  const forwardChaining = (userAnswers: Record<number, string>) => {
    // Hitung skor untuk setiap kategori outfit
    const scores = {
      casual: 0,
      formal: 0,
      vintage: 0,
      streetwear: 0,
      sporty: 0,
    }

    // Aturan untuk acara (pertanyaan 1)
    if (userAnswers[1] === "casual_event") {
      scores.casual += 2
      scores.streetwear += 1
    } else if (userAnswers[1] === "formal_event") {
      scores.formal += 3
    } else if (userAnswers[1] === "outdoor_event") {
      scores.sporty += 2
      scores.casual += 1
    } else if (userAnswers[1] === "party_event") {
      scores.streetwear += 2
      scores.formal += 1
    } else if (userAnswers[1] === "daily_event") {
      scores.casual += 2
      scores.sporty += 1
    }

    // Aturan untuk cuaca (pertanyaan 2)
    if (userAnswers[2] === "hot_weather") {
      scores.casual += 1
      scores.sporty += 1
    } else if (userAnswers[2] === "cold_weather") {
      scores.streetwear += 1
      scores.formal += 1
    } else if (userAnswers[2] === "rainy_weather") {
      scores.streetwear += 1
    } else if (userAnswers[2] === "normal_weather") {
      // Tidak ada preferensi khusus
    }

    // Aturan untuk warna (pertanyaan 3)
    if (userAnswers[3] === "neutral_color") {
      scores.formal += 1
      scores.casual += 1
    } else if (userAnswers[3] === "bright_color") {
      scores.sporty += 1
      scores.streetwear += 1
    } else if (userAnswers[3] === "pastel_color") {
      scores.vintage += 2
    } else if (userAnswers[3] === "dark_color") {
      scores.formal += 1
      scores.streetwear += 1
    } else if (userAnswers[3] === "earth_color") {
      scores.vintage += 1
      scores.casual += 1
    }

    // Aturan untuk gaya (pertanyaan 4)
    if (userAnswers[4] === "simple_style") {
      scores.casual += 2
    } else if (userAnswers[4] === "elegant_style") {
      scores.formal += 2
    } else if (userAnswers[4] === "retro_style") {
      scores.vintage += 3
    } else if (userAnswers[4] === "trendy_style") {
      scores.streetwear += 2
    } else if (userAnswers[4] === "active_style") {
      scores.sporty += 2
    }

    // Aturan untuk prioritas (pertanyaan 5)
    if (userAnswers[5] === "comfort_priority") {
      scores.casual += 1
      scores.sporty += 1
    } else if (userAnswers[5] === "style_priority") {
      scores.streetwear += 1
      scores.formal += 1
    } else if (userAnswers[5] === "function_priority") {
      scores.sporty += 2
    } else if (userAnswers[5] === "unique_priority") {
      scores.vintage += 2
      scores.streetwear += 1
    } else if (userAnswers[5] === "formal_priority") {
      scores.formal += 2
    }

    // Tentukan kategori dengan skor tertinggi
    let highestScore = 0
    let recommendedStyle = "casual" // Default

    for (const [style, score] of Object.entries(scores)) {
      if (score > highestScore) {
        highestScore = score
        recommendedStyle = style
      }
    }

    return recommendedStyle
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <Shirt className="h-6 w-6" />
          <span>OutfitExpert</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Konsultasi Outfit</CardTitle>
            <CardDescription>Jawab pertanyaan berikut untuk mendapatkan rekomendasi outfit yang sesuai</CardDescription>
            <Progress value={progress} className="h-2 mt-2" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">
                {currentQuestion + 1}. {questions[currentQuestion].question}
              </h3>
              <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption} className="space-y-3">
                {questions[currentQuestion].options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.id} id={option.id} />
                    <Label htmlFor={option.id}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0} className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Sebelumnya
            </Button>
            <Button onClick={handleNext} disabled={!selectedOption} className="gap-2">
              {currentQuestion < questions.length - 1 ? (
                <>
                  Selanjutnya <ArrowRight className="h-4 w-4" />
                </>
              ) : (
                "Lihat Hasil"
              )}
            </Button>
          </CardFooter>
        </Card>
      </main>
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t text-center">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} OutfitExpert. Hak Cipta Dilindungi.
        </p>
      </footer>
    </div>
  )
}
