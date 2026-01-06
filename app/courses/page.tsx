import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Clock, Users, ArrowRight, Book } from "lucide-react"

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Trading Fundamentals",
      description:
        "Learn the basics of stock market trading, different order types, and fundamental analysis techniques.",
      duration: "4 weeks",
      students: "2,500+",
      price: "₹4,999",
      level: "Beginner",
      modules: 12,
    },
    {
      id: 2,
      title: "Technical Analysis Mastery",
      description:
        "Deep dive into candlestick patterns, support & resistance levels, and chart analysis strategies.",
      duration: "6 weeks",
      students: "1,800+",
      price: "₹7,999",
      level: "Beginner",
      modules: 18,
    },
    {
      id: 3,
      title: "Risk Management & Position Sizing",
      description:
        "Master the art of protecting your capital with proper position sizing and stop-loss strategies.",
      duration: "3 weeks",
      students: "1,200+",
      price: "₹3,999",
      level: "Beginner",
      modules: 8,
    },
    {
      id: 4,
      title: "Market Psychology",
      description:
        "Understand the psychological aspects of trading and overcome fear, greed, and other emotional pitfalls.",
      duration: "4 weeks",
      students: "950+",
      price: "₹5,999",
      level: "Beginner",
      modules: 10,
    },
    {
      id: 5,
      title: "Day Trading Strategies",
      description:
        "Learn proven day trading techniques, intraday patterns, and real-time decision-making frameworks.",
      duration: "5 weeks",
      students: "1,400+",
      price: "₹6,999",
      level: "Beginner",
      modules: 15,
    },
    {
      id: 6,
      title: "Option Trading Basics",
      description:
        "Introduction to options trading, understanding calls and puts, and basic option strategies.",
      duration: "6 weeks",
      students: "850+",
      price: "₹8,999",
      level: "Beginner",
      modules: 16,
    },
  ]

  return (
    <>
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Trading Courses
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Comprehensive, beginner-friendly courses designed to make you a confident trader
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-4">
                    {course.level}
                  </span>

                  <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {course.description}
                  </p>

                  <div className="space-y-3 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock size={16} /> {course.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Book size={16} /> {course.modules} modules
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} /> {course.students} enrolled
                    </div>
                  </div>

                  <div className="border-t border-border pt-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Price</p>
                      <p className="text-2xl font-bold text-primary">{course.price}</p>
                    </div>

                    {/* ✅ OG ENROLL BEHAVIOR */}
                    <Link
                      href={`/signup?course=${course.id}`}
                      className="px-6 py-2 bg-primary text-primary-foreground rounded-lg
                                 hover:opacity-90 transition-opacity font-semibold inline-flex items-center gap-2"
                    >
                      Enroll <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
