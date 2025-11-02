import CTA from "@/components/home/CTA"
import FAQ from "@/components/home/FAQ"
import Hero from "@/components/home/HeroText"
import OurService from "@/components/home/OurService"
import Services from "@/components/home/Services"
import Stats from "@/components/home/Stats"

const Home = () => {
    return (
        <>
            <Hero />
            <Stats />
            <OurService />
            <Services />
            <FAQ />
            <CTA />
        </>
    )
}

export default Home