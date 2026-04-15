import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { AboutSection } from "@/components/AboutSection"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </main>
  )
}
