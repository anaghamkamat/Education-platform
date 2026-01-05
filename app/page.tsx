import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Star, Users, TrendingUp, ArrowRight } from "lucide-react"

export default function Home() {
  const highlights = [
    {
      icon: Users,
      stat: "5000+",
      label: "Students Trained",
    },
    {
      icon: TrendingUp,
      stat: "15+",
      label: "Years Experience",
    },
    {
      icon: Star,
      stat: "4.9/5",
      label: "Average Rating",
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Investment Professional",
      content:
        "Shobha's teaching approach made complex trading concepts incredibly easy to understand. Best investment in my learning!",
      initials: "RK",
    },
    {
      name: "Priya Sharma",
      role: "Beginner Trader",
      content:
        "From zero knowledge to confident trader. The step-by-step guidance and practical examples were game-changing.",
      initials: "PS",
    },
    {
      name: "Amit Patel",
      role: "Business Owner",
      content:
        "Clear, structured, and focused on real-world applications. Shobha genuinely cares about her students' success.",
      initials: "AP",
    },
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 inline-block px-4 py-2 bg-accent/10 rounded-full">
                <p className="text-accent text-sm font-semibold">Welcome to Trading Academy</p>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Master Trading Basics
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
                Learn from a Chartered Accountant who makes trading simple. Perfect for complete beginners across India.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/courses"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold flex items-center gap-2"
                >
                  View Courses <ArrowRight size={18} />
                </Link>
                <Link
                  href="/webinars"
                  className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
                >
                  Upcoming Webinars
                </Link>
              </div>
            </div>
            <div className="relative h-96 bg-accent/20 rounded-2xl overflow-hidden">
              <img src="/professional-woman-chartered-accountant-trading-ed.jpg" alt="Shobha Pujari" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Empowering beginners across India with practical trading knowledge, turning fear and confusion into
              confidence and success.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="text-center p-8 rounded-xl bg-card border border-border">
                  <div className="flex justify-center mb-4">
                    <Icon className="text-accent" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                  <div className="text-muted-foreground font-medium">{item.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Student Success Stories</h2>
            <p className="text-lg text-muted-foreground">Join thousands of successful traders</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background p-8 rounded-xl border border-border">
                <div className="flex gap-3 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Start Your Trading Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Enroll in our comprehensive courses and join our thriving community of traders.
          </p>
          <Link
            href="/courses"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg"
          >
            Explore Courses
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
