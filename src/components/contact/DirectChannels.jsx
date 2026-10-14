import { useState } from 'react'
import { Building2, MapPin, Globe2, Mail, PhoneCall, Copy, Check } from 'lucide-react'
import Reveal from '../common/Reveal'
import SpotlightCard from '../common/SpotlightCard'

export default function DirectChannels() {
  const [copiedId, setCopiedId] = useState(null)

  const handleCopy = (id, text) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2200)
    }
  }

  const channels = [
    {
      id: 'mumbai-hq',
      label: 'India Headquarters',
      value: 'H.O Building No.429 BC Takur Site, Chirner, Mumbai - 410206',
      isPlaceholder: false,
      icon: Building2,
      copyable: true,
      cursorLabel: 'COPY',
    },
    {
      id: 'edappal-kerala',
      label: 'Kerala Development Center',
      value: 'Al Madeena Complex, Edappal, Kerala 679576',
      isPlaceholder: false,
      icon: MapPin,
      copyable: true,
      cursorLabel: 'COPY',
    },
    {
      id: 'me-partners',
      label: 'Middle East Partners',
      value: 'Powered by Simple Logic IT (Qatar & UAE)',
      isPlaceholder: false,
      icon: Globe2,
      copyable: false,
      cursorLabel: 'PARTNER',
    },
    {
      id: 'email',
      label: 'Email',
      value: 'hello@invex.it',
      isPlaceholder: false,
      icon: Mail,
      href: 'mailto:hello@invex.it',
      copyable: true,
      cursorLabel: 'EMAIL',
    },
    {
      id: 'phone-wa',
      label: 'Phone/WhatsApp',
      value: '+91 80860 99981, +91 74776 11234', // used for the copy button
      phones: [
        { display: '+91 80860 99981', digits: '918086099981' },
        { display: '+91 74776 11234', digits: '917477611234' },
      ],
      isPlaceholder: false,
      icon: PhoneCall,
      copyable: true,
      cursorLabel: 'CALL',
    },
  ]

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Accessible Section Heading */}
      <Reveal from="right">
        <div className="mb-2">
          <span
            className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border mb-2 inline-block"
            style={{
              backgroundColor: 'var(--surface-raised)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--accent-blue)',
            }}
          >
            Direct Channels
          </span>
          <h2
            className="font-display font-bold text-2xl sm:text-3xl tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Connect With Our Team
          </h2>
        </div>
      </Reveal>

      {/* Screen reader notification for copy status */}
      <div aria-live="polite" className="sr-only">
        {copiedId ? 'Copied to clipboard' : ''}
      </div>

      {/* Stack of Glass Spotlight Cards */}
      {channels.map((ch, idx) => {
        const Icon = ch.icon
        const isCopied = copiedId === ch.id

        return (
          <Reveal key={ch.id} from="right" delay={0.08 * (idx + 1)}>
            <SpotlightCard
              cursorLabel={ch.cursorLabel}
              className="p-4 sm:p-5 border transition-all duration-300 relative group hover:border-[var(--accent-blue)]"
              style={{
                backgroundColor: 'var(--glass-bg)',
                borderColor: 'var(--glass-border)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 8px 24px -4px var(--glass-shadow, rgba(0,0,0,0.2))',
              }}
            >
              <div className="flex items-start justify-between gap-3">
                {/* Left: Icon Tile + Information */}
                <div className="flex items-start gap-3.5 min-w-0 flex-1">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-mint))',
                      color: 'var(--base)',
                    }}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span
                      className="text-[11px] font-mono tracking-wider uppercase font-semibold block mb-0.5"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {ch.label}
                    </span>

                    {/* Value or Link */}
                    {ch.href ? (
                      <a
                        href={ch.href}
                        className="text-sm sm:text-base font-medium tracking-tight hover:underline transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-mint)] rounded outline-none block truncate"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {ch.value}
                      </a>
                    ) : (
                      <div
                        className={`text-sm sm:text-base font-medium tracking-tight break-words ${ch.isPlaceholder ? 'font-mono' : ''
                          }`}
                        style={{
                          color: ch.isPlaceholder ? 'var(--accent-blue-light, var(--accent-blue))' : 'var(--text-primary)',
                        }}
                      >
                        {ch.value}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Action: Copy / Direct Trigger */}
                {ch.copyable && (
                  <button
                    type="button"
                    onClick={() => handleCopy(ch.id, ch.value)}
                    className="p-2 rounded-lg border shrink-0 transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-mint)]"
                    style={{
                      backgroundColor: isCopied ? 'var(--surface-raised)' : 'var(--surface)',
                      borderColor: isCopied ? 'var(--accent-mint)' : 'var(--border-subtle)',
                      color: isCopied ? 'var(--accent-mint)' : 'var(--text-muted)',
                    }}
                    aria-label={`Copy ${ch.label} to clipboard`}
                  >
                    {isCopied ? <Check size={14} strokeWidth={2.5} /> : <Copy size={14} />}
                  </button>
                )}
              </div>
            </SpotlightCard>
          </Reveal>
        )
      })}
    </div>
  )
}
