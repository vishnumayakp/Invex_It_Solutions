import { motion } from 'framer-motion'
import { ArrowLeft, Construction } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Button from '../components/common/Button'

/**
 * ComingSoon — Shared placeholder page for routes that are not yet built.
 */
export default function ComingSoon({ title = 'This Page' }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6">
        <motion.div
          className="text-center max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mx-auto mb-6">
            <Construction size={28} className="text-[var(--accent-blue)]" />
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)] mb-3">
            {title}
          </h1>
          <p className="text-[var(--text-muted)] text-base mb-8 leading-relaxed">
            This page is coming soon. We&rsquo;re building something great.
          </p>
          <Button href="/" variant="secondary" icon={ArrowLeft}>
            Back to Home
          </Button>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
