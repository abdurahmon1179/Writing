import AIShowcase from "@/components/AiShowCase"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWork"
import Problem from "@/components/Problem"

function page() {
  return (
    <div>
      <Header/>
      <Hero/>
      <HowItWorks/>
      <Problem/>
      <AIShowcase/>
    </div>
  )
}

export default page
