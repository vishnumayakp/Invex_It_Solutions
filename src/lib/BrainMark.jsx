import { useId } from 'react'

/**
 * BrainMark — Redesigned SVG recreation of the Invex IT brain-tree logo.
 * Left hemisphere: Steel Blue (var(--accent-blue)) — logic/engineering
 * Right hemisphere: Mint (var(--accent-mint)) — growth/innovation
 * Includes staggered 4s node pulse loop, hover trace redraw, and soft glow shadow.
 */
export default function BrainMark({ size = 52, className = '', animated = false }) {
  const filterId = useId()

  // Node coordinate definitions for staggered pulse loop
  const leftNodes = [
    { cx: 35, cy: 48, r: 2, delay: '0.0s' },
    { cx: 25, cy: 38, r: 2, delay: '0.3s' },
    { cx: 30, cy: 35, r: 1.8, delay: '0.6s' },
    { cx: 18, cy: 30, r: 1.8, delay: '0.9s' },
    { cx: 20, cy: 42, r: 1.5, delay: '1.2s' },
    { cx: 22, cy: 25, r: 1.8, delay: '1.5s' },
    { cx: 35, cy: 28, r: 2, delay: '1.8s' },
    { cx: 15, cy: 20, r: 1.5, delay: '2.1s' },
    { cx: 18, cy: 15, r: 1.5, delay: '2.4s' },
    { cx: 30, cy: 18, r: 1.8, delay: '2.7s' },
    { cx: 42, cy: 22, r: 1.8, delay: '3.0s' },
    { cx: 25, cy: 10, r: 1.5, delay: '3.3s' },
    { cx: 38, cy: 12, r: 1.5, delay: '3.6s' },
  ]

  const rightNodes = [
    { cx: 65, cy: 48, r: 2, delay: '0.15s' },
    { cx: 75, cy: 38, r: 2, delay: '0.45s' },
    { cx: 70, cy: 35, r: 1.8, delay: '0.75s' },
    { cx: 82, cy: 30, r: 1.8, delay: '1.05s' },
    { cx: 80, cy: 42, r: 1.5, delay: '1.35s' },
    { cx: 78, cy: 25, r: 1.8, delay: '1.65s' },
    { cx: 65, cy: 28, r: 2, delay: '1.95s' },
    { cx: 85, cy: 20, r: 1.5, delay: '2.25s' },
    { cx: 82, cy: 15, r: 1.5, delay: '2.55s' },
    { cx: 70, cy: 18, r: 1.8, delay: '2.85s' },
    { cx: 58, cy: 22, r: 1.8, delay: '3.15s' },
    { cx: 75, cy: 10, r: 1.5, delay: '3.45s' },
    { cx: 62, cy: 12, r: 1.5, delay: '3.75s' },
  ]

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`brain-mark-svg shrink-0 transition-transform duration-300 group-hover:scale-[1.08] ${className}`}
      aria-label="Invex IT Brain Tree Logo"
      role="img"
      style={{
        filter: 'drop-shadow(0 2px 8px var(--glow-blue))',
      }}
    >
      <defs>
        <linearGradient id={`${filterId}-grad`} x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="var(--accent-blue)" />
          <stop offset="100%" stopColor="var(--accent-mint)" />
        </linearGradient>
      </defs>

      {/* ── Trunk (center trace) ── */}
      <path
        d="M50 92 L50 60"
        stroke={`url(#${filterId}-grad)`}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        className="brain-trace"
      />
      {/* Trunk node (root) */}
      <circle cx="50" cy="92" r="2.5" fill="var(--base)" stroke="var(--accent-blue)" strokeWidth="1.5" />

      {/* ── Branch splits ── */}
      <path
        d="M50 60 L35 48"
        stroke="var(--accent-blue)"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        className="brain-trace"
      />
      <path
        d="M50 60 L65 48"
        stroke="var(--accent-mint)"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        className="brain-trace"
      />

      {/* ═══ LEFT HEMISPHERE (Steel Blue) ═══ */}
      <g stroke="var(--accent-blue)" strokeWidth="1.2" fill="none">
        <path d="M35 48 L25 38" strokeLinecap="round" className="brain-trace" />
        <path d="M35 48 L30 35" strokeLinecap="round" className="brain-trace" />
        <path d="M25 38 L18 30" strokeLinecap="round" className="brain-trace" />
        <path d="M25 38 L20 42" strokeLinecap="round" className="brain-trace" />
        <path d="M30 35 L22 25" strokeLinecap="round" className="brain-trace" />
        <path d="M30 35 L35 28" strokeLinecap="round" className="brain-trace" />
        <path d="M18 30 L15 20" strokeLinecap="round" className="brain-trace" />
        <path d="M22 25 L18 15" strokeLinecap="round" className="brain-trace" />
        <path d="M35 28 L30 18" strokeLinecap="round" className="brain-trace" />
        <path d="M35 28 L42 22" strokeLinecap="round" className="brain-trace" />
        <path d="M30 18 L25 10" strokeLinecap="round" className="brain-trace" />
        <path d="M42 22 L38 12" strokeLinecap="round" className="brain-trace" />
      </g>

      {/* Left hemisphere ring nodes */}
      <g stroke="var(--accent-blue)" strokeWidth="1.2">
        {leftNodes.map((n, idx) => (
          <circle
            key={idx}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="var(--base)"
            className="brain-node brain-node-blue"
            style={{ animationDelay: n.delay }}
          />
        ))}
      </g>

      {/* ═══ RIGHT HEMISPHERE (Mint Green) ═══ */}
      <g stroke="var(--accent-mint)" strokeWidth="1.2" fill="none">
        <path d="M65 48 L75 38" strokeLinecap="round" className="brain-trace" />
        <path d="M65 48 L70 35" strokeLinecap="round" className="brain-trace" />
        <path d="M75 38 L82 30" strokeLinecap="round" className="brain-trace" />
        <path d="M75 38 L80 42" strokeLinecap="round" className="brain-trace" />
        <path d="M70 35 L78 25" strokeLinecap="round" className="brain-trace" />
        <path d="M70 35 L65 28" strokeLinecap="round" className="brain-trace" />
        <path d="M82 30 L85 20" strokeLinecap="round" className="brain-trace" />
        <path d="M78 25 L82 15" strokeLinecap="round" className="brain-trace" />
        <path d="M65 28 L70 18" strokeLinecap="round" className="brain-trace" />
        <path d="M65 28 L58 22" strokeLinecap="round" className="brain-trace" />
        <path d="M70 18 L75 10" strokeLinecap="round" className="brain-trace" />
        <path d="M58 22 L62 12" strokeLinecap="round" className="brain-trace" />
      </g>

      {/* Right hemisphere ring nodes */}
      <g stroke="var(--accent-mint)" strokeWidth="1.2">
        {rightNodes.map((n, idx) => (
          <circle
            key={idx}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="var(--base)"
            className="brain-node brain-node-mint"
            style={{ animationDelay: n.delay }}
          />
        ))}
      </g>

      {/* Center apex node */}
      <circle cx="50" cy="60" r="2.8" fill="var(--base)" stroke={`url(#${filterId}-grad)`} strokeWidth="1.8" />

      <style>{`
        @keyframes nodePulseKeyframes {
          0%, 100% {
            stroke-width: 1.2;
            opacity: 0.6;
          }
          50% {
            stroke-width: 2.2;
            opacity: 1;
          }
        }
        .brain-node {
          animation: nodePulseKeyframes 4s infinite ease-in-out;
          transition: fill 0.3s ease, stroke 0.3s ease, stroke-width 0.3s ease;
        }
        .group:hover .brain-node-blue {
          fill: var(--accent-blue);
        }
        .group:hover .brain-node-mint {
          fill: var(--accent-mint);
        }
        .brain-trace {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
          transition: stroke-dashoffset 0.6s ease;
        }
        .group:hover .brain-trace {
          animation: traceRedraw 0.7s ease forwards;
        }
        @keyframes traceRedraw {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .brain-node, .group:hover .brain-trace {
            animation: none !important;
          }
        }
      `}</style>
    </svg>
  )
}

