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
import { Shirt, ArrowLeft, ArrowRight, Sparkles, ThumbsUp } from "lucide-react"
import { ModeToggle } from "../../components/ui/mode-toggle"

// Definisi pertanyaan untuk sistem pakar dengan ilustrasi
const questions = [
  {
    id: 1,
    question: "Apa jenis acara yang akan Anda hadiri?",
    illustration: "/placeholder.svg?height=200&width=200",
    options: [
      { id: "casual_event", label: "Hangout dengan teman", icon: <ThumbsUp className="h-6 w-6" /> },
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
  { bg: "from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50", accent: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { bg: "from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50", accent: "bg-gradient-to-r from-blue-500 to-cyan-500" },
  { bg: "from-amber-100 to-yellow-100 dark:from-amber-900/50 dark:to-yellow-900/50", accent: "bg-gradient-to-r from-amber-500 to-yellow-500" },
  { bg: "from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50", accent: "bg-gradient-to-r from-emerald-500 to-teal-500" },
  { bg: "from-rose-100 to-orange-100 dark:from-rose-900/50 dark:to-orange-900/50", accent: "bg-gradient-to-r from-rose-500 to-orange-500" },
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
      setAnswers({ ...answers, [questions[currentQuestion].id]: selectedOption })
      if (currentQuestion < questions.length - 1) {
        setDirection(1)
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
      } else {
        const newAnswers = { ...answers, [questions[currentQuestion].id]: selectedOption }
        const result = forwardChaining(newAnswers)
        const encodedAnswers = encodeURIComponent(JSON.stringify(newAnswers))
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

  const forwardChaining = (userAnswers: Record<number, string>) => {
    const scores = {
      casual: 0,
      formal: 0,
      vintage: 0,
      streetwear: 0,
      sporty: 0,
    }

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

    if (userAnswers[2] === "hot_weather") {
      scores.casual += 1
      scores.sporty += 1
    } else if (userAnswers[2] === "cold_weather") {
      scores.streetwear += 1
      scores.formal += 1
    } else if (userAnswers[2] === "rainy_weather") {
      scores.streetwear += 1
    }

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

    let highestScore = 0
    let recommendedStyle = "casual"
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
    <div className={`flex flex-col min-h-screen bg-gradient-to-br ${currentTheme.bg} bg-[url('/subtle-pattern.png')] bg-fixed transition-colors duration-500`}>
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm sticky top-0 z-10">
        <Link className="flex items-center gap-2 font-bold text-lg" href="/">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
            <Shirt className="h-6 w-6 text-indigo-600" />
          </motion.div>
          <span className="text-indigo-600">OutfitExpert</span>
        </Link>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-4xl"
        >
          {/* Desktop Card - Hidden on mobile */}
          <Card className="hidden md:block border-0 shadow-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl overflow-hidden">
            <CardHeader className="relative pb-0 pt-6 px-6">
              <div className="absolute top-0 left-0 right-0">
                <Progress
                  value={progress}
                  className="h-3 rounded-none rounded-t-2xl bg-gray-200/50"
                  indicatorClassName={`${currentTheme.accent} shadow-md`}
                />
              </div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <div className="flex items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${currentTheme.accent}`}>
                    {currentQuestion + 1}
                  </div>
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    Pertanyaan {currentQuestion + 1} / {questions.length}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-indigo-600">
                  <Sparkles className="h-4 w-4 animate-pulse" />
                  <span>{Math.round(progress)}% Selesai</span>
                </div>
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="text-center mb-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                      {questions[currentQuestion].question}
                    </h2>
                    <div className="flex justify-center mb-6">
                      <Image
                        src={questions[currentQuestion].illustration || "/placeholder.svg"}
                        alt={questions[currentQuestion].question}
                        width={180}
                        height={180}
                        className="rounded-xl shadow-md sm:w-[200px] sm:h-[200px]"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardHeader>
            <CardContent className="px-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption} className="space-y-3">
                    {questions[currentQuestion].options.map((option) => (
                      <motion.div
                        key={option.id}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="select-none"
                      >
                        <div
                          className={`flex items-center p-4 sm:p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                            selectedOption === option.id
                              ? `${currentTheme.accent} text-white shadow-lg`
                              : "border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md"
                          }`}
                          onClick={() => setSelectedOption(option.id)}
                        >
                          <div className="flex items-center justify-center mr-3 sm:mr-4">
                            {selectedOption === option.id ? (
                              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                              </div>
                            ) : (
                              <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600"></div>
                            )}
                          </div>
                          <div className="mr-3 sm:mr-4 text-2xl sm:text-3xl">{option.icon}</div>
                          <Label
                            htmlFor={option.id}
                            className={`flex-1 cursor-pointer font-semibold text-base sm:text-lg ${
                              selectedOption === option.id ? "text-white" : "text-gray-800 dark:text-gray-200"
                            }`}
                          >
                            {option.label}
                          </Label>
                        </div>
                      </motion.div>
                    ))}
                  </RadioGroup>
                </motion.div>
              </AnimatePresence>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-between pt-6 pb-8 px-6 gap-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="w-full sm:w-auto px-6 py-3 text-base font-semibold border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 rounded-xl"
              >
                <ArrowLeft className="h-5 w-5 mr-2" /> Sebelumnya
              </Button>
              <Button
                onClick={handleNext}
                disabled={!selectedOption}
                className={`w-full sm:w-auto px-6 py-3 text-base font-semibold text-white ${currentTheme.accent} hover:brightness-110 transition-all duration-200 rounded-xl shadow-md disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {currentQuestion < questions.length - 1 ? (
                  <>
                    Selanjutnya <ArrowRight className="h-5 w-5 ml-2" />
                  </>
                ) : (
                  <>
                    Lihat Hasil <Sparkles className="h-5 w-5 ml-2 animate-pulse" />
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          {/* Mobile Card - Hidden on desktop */}
          <Card className="md:hidden border-0 shadow-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl overflow-hidden">
            <CardHeader className="relative pb-0 pt-6 px-4">
              <div className="absolute top-0 left-0 right-0">
                <Progress
                  value={progress}
                  className="h-3 rounded-none rounded-t-2xl bg-gray-200/50"
                  indicatorClassName={`${currentTheme.accent} shadow-md`}
                />
              </div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${currentTheme.accent}`}>
                    {currentQuestion + 1}
                  </div>
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                    Pertanyaan {currentQuestion + 1} / {questions.length}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-indigo-600">
                  <Sparkles className="h-4 w-4 animate-pulse" />
                  <span>{Math.round(progress)}%</span>
                </div>
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                      {questions[currentQuestion].question}
                    </h2>
                    <div className="flex justify-center mb-6">
                      <Image
                        src={questions[currentQuestion].illustration || "/placeholder.svg"}
                        alt={questions[currentQuestion].question}
                        width={150}
                        height={150}
                        className="rounded-xl shadow-md"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardHeader>
            <CardContent className="px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption} className="space-y-3">
                    {questions[currentQuestion].options.map((option) => (
                      <motion.div
                        key={option.id}
                        whileTap={{ scale: 0.95 }}
                        className="select-none"
                      >
                        <div
                          className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                            selectedOption === option.id
                              ? `${currentTheme.accent} text-white shadow-lg`
                              : "border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md"
                          }`}
                          onClick={() => setSelectedOption(option.id)}
                        >
                          <div className="flex items-center justify-center mr-3">
                            {selectedOption === option.id ? (
                              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
                              </div>
                            ) : (
                              <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600"></div>
                            )}
                          </div>
                          <div className="mr-3 text-xl">{option.icon}</div>
                          <Label
                            htmlFor={option.id}
                            className={`flex-1 cursor-pointer font-semibold text-sm ${
                              selectedOption === option.id ? "text-white" : "text-gray-800 dark:text-gray-200"
                            }`}
                          >
                            {option.label}
                          </Label>
                        </div>
                      </motion.div>
                    ))}
                  </RadioGroup>
                </motion.div>
              </AnimatePresence>
            </CardContent>
            <CardFooter className="flex flex-col pt-6 pb-8 px-4 gap-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="w-full px-6 py-3 text-sm font-semibold border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 rounded-xl"
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> Sebelumnya
              </Button>
              <Button
                onClick={handleNext}
                disabled={!selectedOption}
                className={`w-full px-6 py-3 text-sm font-semibold text-white ${currentTheme.accent} hover:brightness-110 transition-all duration-200 rounded-xl shadow-md disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {currentQuestion < questions.length - 1 ? (
                  <>
                    Selanjutnya <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                ) : (
                  <>
                    Lihat Hasil <Sparkles className="h-4 w-4 ml-2 animate-pulse" />
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </main>

      <footer className="py-4 w-full shrink-0 items-center px-4 md:px-6 text-center backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-t border-gray-200/50 dark:border-gray-800/50">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} OutfitExpert. Hak Cipta Dilindungi.
        </p>
      </footer>
    </div>
  )
}