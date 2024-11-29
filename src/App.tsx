import About from "./components/About"
import ContactUs from "./components/ContactUs"
import DonateSection from "./components/DonateSection"
import Footer from "./components/Footer"
import GetInvolved from "./components/GetInvolved"
import Header from "./components/Header"
import Hero from "./components/Hero"
import OurEfforts from "./components/OurEfforts"
import OurGallery from "./components/OurGallary"
import OurPartners from "./components/OurPartners"

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <main className="w-full h-full flex flex-col gap-10 relative">
        <About />
        <OurEfforts />
        <OurGallery />
        <OurPartners />
        <GetInvolved />
        <ContactUs />
        <DonateSection />

      </main>
      <Footer />
    </>

  )
}

export default App