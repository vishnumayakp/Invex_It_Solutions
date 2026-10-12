import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import OurAimSection from '../components/sections/OurAimSection'
import BrandStorySection from '../components/sections/BrandStorySection'
import TeamAndCredibilitySection from '../components/sections/TeamAndCredibilitySection'

export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-[var(--base)]">
            <Navbar />
            <main className="flex-1">
                {/* Section 1: Hero / Our Aim ("The Innovation Vertex") */}
                <OurAimSection />

                {/* Section 2: Brand Story Timeline ("Built to handle immense scale") */}
                <BrandStorySection />

                {/* Section 3: Team, Credibility & Closing CTA */}
                <TeamAndCredibilitySection />
            </main>
            <Footer />
        </div>
    )
}

