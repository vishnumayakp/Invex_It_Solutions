/**
 * CircuitDivider — A horizontal divider styled as a circuit trace with ring-terminal nodes.
 */
export default function CircuitDivider({ className = '', variant = 'horizontal' }) {
  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <svg width="3" height="100%" viewBox="0 0 3 100" preserveAspectRatio="none" className="h-full">
          <line x1="1.5" y1="0" x2="1.5" y2="100" stroke="var(--border-subtle)" strokeWidth="1" />
        </svg>
      </div>
    )
  }

  return (
    <div className={`w-full flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 400 10" className="w-full h-[10px]" preserveAspectRatio="none">
        {/* Left terminal node */}
        <circle cx="5" cy="5" r="3" fill="none" stroke="var(--accent-blue)" strokeWidth="1" />
        {/* Main trace */}
        <line x1="8" y1="5" x2="190" y2="5" stroke="var(--border-subtle)" strokeWidth="1" />
        {/* Center node */}
        <circle cx="200" cy="5" r="2.5" fill="none" stroke="var(--accent-mint)" strokeWidth="1" />
        {/* Right trace */}
        <line x1="210" y1="5" x2="392" y2="5" stroke="var(--border-subtle)" strokeWidth="1" />
        {/* Right terminal node */}
        <circle cx="395" cy="5" r="3" fill="none" stroke="var(--accent-mint)" strokeWidth="1" />
      </svg>
    </div>
  )
}
