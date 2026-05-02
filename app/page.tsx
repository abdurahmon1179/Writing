import AIShowcase from "@/components/AiShowCase"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWork"
import Pricing from "@/components/Price"
import Problem from "@/components/Problem"

function page() {
  return (
    <div>
      <Header/>
      <Hero/>
      <HowItWorks/>
      <Problem/>
      <AIShowcase/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default page
