"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card"
import { RadioGroup } from "../../components/ui/radio-group"
import { Label } from "../../components/ui/label"
import { Progress } from "../../components/ui/progress"
import { Shirt, ArrowLeft, ArrowRight, Sparkles } from "lucide-react"
import { ModeToggle } from "../../components/ui/mode-toggle"

// Definisi pertanyaan untuk sistem pakar dengan ilustrasi
const questions = [
  {
    id: 1,
    question: "Apa jenis acara yang akan Anda hadiri?",
    illustration: "/placeholder.svg?height=200&width=200",
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
    illustration: "/placeholder.svg?height=200&width=200",
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
    illustration: "/placeholder.svg?height=200&width=200",
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
    illustration: "/placeholder.svg?height=200&width=200",
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
    illustration: "/placeholder.svg?height=200&width=200",
    options: [
      { id: "comfort_priority", label: "Kenyamanan", icon: "🛋️" },
      { id: "style_priority", label: "Gaya dan penampilan", icon: "💅" },
      { id: "function_priority", label: "Fungsionalitas", icon: "🔧" },
      { id: "unique_priority", label: "Keunikan", icon: "🦄" },
      { id: "formal_priority", label: "Kesopanan dan formalitas", icon: "🎩" },
    ],
  },
]

// Definisi tema warna untuk setiap pertanyaan
const questionThemes = [
  { bg: "from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30", accent: "bg-purple-500" },
  { bg: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30", accent: "bg-blue-500" },
  { bg: "from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30", accent: "bg-amber-500" },
  { bg: "from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30", accent: "bg-emerald-500" },
  { bg: "from-rose-50 to-orange-50 dark:from-rose-950/30 dark:to-orange-950/30", accent: "bg-rose-500" },
]

export default function QuizPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [progress, setProgress] = useState(20)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    setProgress(((currentQuestion + 1) / questions.length) * 100)
  }, [currentQuestion])

  const handleNext = () => {
    if (selectedOption) {
      // Simpan jawaban
      setAnswers({ ...answers, [questions[currentQuestion].id]: selectedOption })

      if (currentQuestion < questions.length - 1) {
        // Pindah ke pertanyaan berikutnya
        setDirection(1)
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
      } else {
        // Semua pertanyaan sudah dijawab, lakukan forward chaining
        const newAnswers = { ...answers, [questions[currentQuestion].id]: selectedOption }
        const result = forwardChaining(newAnswers)

        // Encode answers untuk URL
        const encodedAnswers = encodeURIComponent(JSON.stringify(newAnswers))

        // Navigasi ke halaman hasil dengan membawa data hasil dan jawaban
        router.push(`/result?style=${result}&answers=${encodedAnswers}`)
      }
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setDirection(-1)
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

  const currentTheme = questionThemes[currentQuestion % questionThemes.length]

  return (
    <div className={`flex flex-col min-h-screen bg-gradient-to-br ${currentTheme.bg} transition-colors duration-700`}>
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-md bg-white/50 dark:bg-black/20 border-b border-gray-200 dark:border-gray-800">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <Shirt className="h-6 w-6" />
          <span>OutfitExpert</span>
        </Link>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-3xl"
        >
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
            <CardHeader className="relative pb-0 pt-6">
              <div className="absolute top-0 left-0 right-0">
                <Progress
                  value={progress}
                  className="h-2 rounded-none rounded-t-lg"
                  indicatorClassName={`${currentTheme.accent}`}
                />
              </div>

              <div className="flex items-center justify-between mb-4 mt-2">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${currentTheme.accent}`}
                  >
                    {currentQuestion + 1}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Pertanyaan {currentQuestion + 1} dari {questions.length}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium">
                  <Sparkles className="h-4 w-4 text-yellow-500" />
                  <span>{Math.round(progress)}% Selesai</span>
                </div>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{questions[currentQuestion].question}</h2>
                    <div className="flex justify-center mb-6">
                      <Image
                        src={questions[currentQuestion].illustration || "/placeholder.svg"}
                        alt={questions[currentQuestion].question}
                        width={200}
                        height={200}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardHeader>

            <CardContent>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption} className="space-y-3">
                    {questions[currentQuestion].options.map((option) => (
                      <motion.div key={option.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <div
                          className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            selectedOption === option.id
                              ? "border-primary bg-primary/10 ring-2 ring-primary/20"
                              : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                          }`}
                          onClick={() => setSelectedOption(option.id)}
                        >
                          <div className="flex items-center justify-center mr-3">
                            {selectedOption === option.id ? (
                              <div className={`w-5 h-5 rounded-full bg-primary flex items-center justify-center`}>
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                              </div>
                            ) : (
                              <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600"></div>
                            )}
                          </div>
                          <div className="mr-3 text-2xl">{option.icon}</div>
                          <Label htmlFor={option.id} className="flex-1 cursor-pointer font-medium">
                            {option.label}
                          </Label>
                        </div>
                      </motion.div>
                    ))}
                  </RadioGroup>
                </motion.div>
              </AnimatePresence>
            </CardContent>

            <CardFooter className="flex justify-between pt-6 pb-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="gap-2 px-5 py-2 h-auto"
              >
                <ArrowLeft className="h-4 w-4" /> Sebelumnya
              </Button>

              <Button
                onClick={handleNext}
                disabled={!selectedOption}
                className="gap-2 px-5 py-2 h-auto bg-primary hover:bg-primary/90 text-white"
              >
                {currentQuestion < questions.length - 1 ? (
                  <>
                    Selanjutnya <ArrowRight className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Lihat Hasil <Sparkles className="h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </main>

      <footer className="py-4 w-full shrink-0 items-center px-4 md:px-6 text-center backdrop-blur-md bg-white/50 dark:bg-black/20 border-t border-gray-200 dark:border-gray-800">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} OutfitExpert. Hak Cipta Dilindungi.
        </p>
      </footer>
    </div>
  )
}
