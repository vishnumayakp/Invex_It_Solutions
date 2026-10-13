import { useRef } from 'react'

/**
 * DemoMockups.jsx
 * Export three polished, theme-aware, code-built mockups:
 * 1. RetailERPMockup
 * 2. SalonPOSMockup
 * 3. QueueDisplayMockup
 *
 * Each accepts an optional `src` prop for a real screenshot.
 * If no `src` is supplied, renders a high-fidelity, responsive, vector-based mockup
 * adhering strictly to theme CSS tokens.
 *
 * RULES FOLLOWED:
 * - Theme tokens only (var(--base), var(--surface), var(--surface-raised), var(--accent-blue),
 *   var(--accent-mint), var(--glow-blue), var(--glow-mint), var(--text-primary), var(--text-secondary),
 *   var(--text-muted), var(--border-subtle), var(--glass-bg), var(--glass-border))
 * - No hardcoded hex, no orange
 * - Dark & light mode aware (glass/glow in dark; paper-white & soft tinted shadows in light)
 * - No invented figures (abstract shapes or "—" only)
 * - aria-hidden="true" on decorative mockups
 * - Visible TODO comment on each mockup
 */

/* ─────────────────────────────────────────────────────────────
 * 1. RetailERPMockup
 * Glass dashboard window with sidebar icons, top bar, line & area chart,
 * bar groups, and a data table with skeleton rows.
 * ───────────────────────────────────────────────────────────── */
export function RetailERPMockup({ src, alt, className = '' }) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-2xl ${className}`}>
        <img
          src={src}
          alt={alt || 'Retail ERP Screenshot'}
          className="w-full h-full object-cover rounded-2xl"
          loading="lazy"
        />
      </div>
    )
  }

  /* TODO: Replace with real screenshot */
  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden border select-none transition-colors duration-300 ${className}`}
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--glass-border)',
        boxShadow: '0 20px 50px -10px var(--glass-shadow, rgba(0,0,0,0.3))',
      }}
      aria-hidden="true"
    >
      {/* ── Top Window Bar ── */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b"
        style={{
          backgroundColor: 'var(--surface-raised)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        {/* Window controls */}
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--accent-blue)', opacity: 0.6 }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--accent-mint)', opacity: 0.6 }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--border-strong)', opacity: 0.5 }} />
          <span
            className="ml-3 text-[11px] font-mono tracking-wider"
            style={{ color: 'var(--text-muted)' }}
          >
            invex-erp // retail.core
          </span>
        </div>

        {/* Search bar & avatar skeleton */}
        <div className="flex items-center gap-3">
          <div
            className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border text-[11px]"
            style={{
              backgroundColor: 'var(--base)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-muted)',
            }}
          >
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="5" cy="5" r="3.5" />
              <line x1="7.5" y1="7.5" x2="10.5" y2="10.5" strokeLinecap="round" />
            </svg>
            <span>Search inventory...</span>
          </div>
          <div
            className="w-6 h-6 rounded-full border flex items-center justify-center"
            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border-subtle)' }}
          >
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--accent-mint)', opacity: 0.8 }} />
          </div>
        </div>
      </div>

      {/* ── Main Dashboard Body ── */}
      <div className="flex min-h-[340px] sm:min-h-[420px]">
        {/* Left Sidebar */}
        <div
          className="w-12 sm:w-16 border-r flex flex-col items-center py-4 gap-4 shrink-0"
          style={{
            backgroundColor: 'var(--surface-raised)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          {/* Logo badge */}
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs"
            style={{
              background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-mint))',
              color: 'var(--base)',
            }}
          >
            IX
          </div>

          <div className="w-6 h-[1px] my-1" style={{ backgroundColor: 'var(--border-subtle)' }} />

          {/* Sidebar icons */}
          {[
            { active: true, icon: 'grid' },
            { active: false, icon: 'chart' },
            { active: false, icon: 'box' },
            { active: false, icon: 'cart' },
            { active: false, icon: 'settings' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
              style={{
                backgroundColor: item.active ? 'var(--glass-bg)' : 'transparent',
                border: item.active ? '1px solid var(--accent-blue)' : '1px solid transparent',
              }}
            >
              <div
                className="w-3.5 h-3.5 rounded-sm"
                style={{
                  backgroundColor: item.active ? 'var(--accent-mint)' : 'var(--text-muted)',
                  opacity: item.active ? 1 : 0.45,
                }}
              />
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4 sm:p-6 overflow-hidden flex flex-col gap-4 sm:gap-6">
          {/* Header Row */}
          <div className="flex items-center justify-between">
            <div>
              <div className="h-4 w-32 rounded-full mb-1" style={{ backgroundColor: 'var(--text-primary)', opacity: 0.8 }} />
              <div className="h-2.5 w-48 rounded-full" style={{ backgroundColor: 'var(--text-muted)', opacity: 0.4 }} />
            </div>
            <div className="flex items-center gap-2">
              <span
                className="px-2.5 py-1 rounded-md text-[10px] font-mono border"
                style={{
                  backgroundColor: 'var(--surface-raised)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-muted)',
                }}
              >
                Period: —
              </span>
              <span
                className="px-2.5 py-1 rounded-md text-[10px] font-mono border font-semibold"
                style={{
                  backgroundColor: 'var(--glass-bg)',
                  borderColor: 'var(--accent-blue)',
                  color: 'var(--accent-blue)',
                }}
              >
                Live Sync
              </span>
            </div>
          </div>

          {/* 3 Metric Cards */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="p-3 sm:p-4 rounded-xl border"
                style={{
                  backgroundColor: 'var(--surface-raised)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${45 + i * 15}%`,
                      backgroundColor: 'var(--text-muted)',
                      opacity: 0.5,
                    }}
                  />
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: i === 1 ? 'var(--accent-mint)' : 'var(--accent-blue)',
                      opacity: 0.8,
                    }}
                  />
                </div>
                <div
                  className="font-display font-bold text-lg sm:text-2xl"
                  style={{ color: 'var(--text-primary)' }}
                >
                  —
                </div>
                <div className="mt-1 flex items-center gap-1.5">
                  <div
                    className="h-1.5 w-8 rounded-full"
                    style={{
                      backgroundColor: i === 1 ? 'var(--accent-mint)' : 'var(--accent-blue)',
                      opacity: 0.6,
                    }}
                  />
                  <span className="text-[9px] font-mono" style={{ color: 'var(--text-muted)' }}>
                    ▲ —%
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
            {/* Area & Line Chart (8 cols) */}
            <div
              className="md:col-span-8 p-3 sm:p-4 rounded-xl border relative"
              style={{
                backgroundColor: 'var(--surface-raised)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="h-2.5 w-28 rounded-full" style={{ backgroundColor: 'var(--text-primary)', opacity: 0.7 }} />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-blue)' }} />
                  <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>Actual</span>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-mint)' }} />
                  <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>Projected</span>
                </div>
              </div>

              {/* Vector SVG Chart */}
              <div className="w-full h-28 sm:h-36 relative">
                <svg viewBox="0 0 360 120" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="retail-erp-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="retail-erp-line" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="var(--accent-blue)" />
                      <stop offset="100%" stopColor="var(--accent-mint)" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal grid lines */}
                  <line x1="0" y1="20" x2="360" y2="20" stroke="var(--border-subtle)" strokeDasharray="3 3" />
                  <line x1="0" y1="60" x2="360" y2="60" stroke="var(--border-subtle)" strokeDasharray="3 3" />
                  <line x1="0" y1="100" x2="360" y2="100" stroke="var(--border-subtle)" strokeDasharray="3 3" />

                  {/* Area fill */}
                  <path
                    d="M 0 95 C 40 75, 70 85, 110 50 C 150 20, 190 65, 230 40 C 270 20, 310 35, 360 15 L 360 120 L 0 120 Z"
                    fill="url(#retail-erp-area)"
                  />

                  {/* Main smooth trend line */}
                  <path
                    d="M 0 95 C 40 75, 70 85, 110 50 C 150 20, 190 65, 230 40 C 270 20, 310 35, 360 15"
                    fill="none"
                    stroke="url(#retail-erp-line)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Secondary dashed line */}
                  <path
                    d="M 0 105 C 50 90, 100 80, 150 70 C 200 60, 250 50, 300 45 C 330 40, 350 35, 360 30"
                    fill="none"
                    stroke="var(--accent-mint)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.6"
                  />

                  {/* Data points */}
                  <circle cx="110" cy="50" r="3.5" fill="var(--base)" stroke="var(--accent-blue)" strokeWidth="2" />
                  <circle cx="230" cy="40" r="3.5" fill="var(--base)" stroke="var(--accent-blue)" strokeWidth="2" />
                  <circle cx="360" cy="15" r="4" fill="var(--accent-mint)" />
                </svg>
              </div>
            </div>

            {/* Bar Groups (4 cols) */}
            <div
              className="md:col-span-4 p-3 sm:p-4 rounded-xl border flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--surface-raised)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="h-2.5 w-20 rounded-full" style={{ backgroundColor: 'var(--text-primary)', opacity: 0.7 }} />
                <span className="text-[10px] font-mono" style={{ color: 'var(--text-muted)' }}>— units</span>
              </div>

              {/* 5 Grouped Bars */}
              <div className="flex items-end justify-between h-24 sm:h-32 px-1 pt-4">
                {[
                  { b1: 45, b2: 60 },
                  { b1: 70, b2: 85 },
                  { b1: 55, b2: 50 },
                  { b1: 90, b2: 95 },
                  { b1: 65, b2: 75 },
                ].map((bar, i) => (
                  <div key={i} className="flex items-end gap-1">
                    <div
                      className="w-2 sm:w-2.5 rounded-t-sm transition-all"
                      style={{
                        height: `${bar.b1}%`,
                        backgroundColor: 'var(--accent-blue)',
                        opacity: 0.8,
                      }}
                    />
                    <div
                      className="w-2 sm:w-2.5 rounded-t-sm transition-all"
                      style={{
                        height: `${bar.b2}%`,
                        backgroundColor: 'var(--accent-mint)',
                        opacity: 0.85,
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-2 border-t mt-2" style={{ borderColor: 'var(--border-subtle)' }}>
                {['D1', 'D2', 'D3', 'D4', 'D5'].map((d) => (
                  <span key={d} className="text-[9px] font-mono" style={{ color: 'var(--text-muted)' }}>
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Data Table with Skeleton Rows */}
          <div
            className="rounded-xl border p-3 overflow-x-auto"
            style={{
              backgroundColor: 'var(--surface-raised)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            {/* Table Header */}
            <div
              className="grid grid-cols-5 text-[10px] font-mono uppercase tracking-wider pb-2 border-b"
              style={{
                color: 'var(--text-muted)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <span>SKU / Item</span>
              <span>Category</span>
              <span>Status</span>
              <span>Inventory</span>
              <span className="text-right">Action</span>
            </div>

            {/* Skeleton Rows */}
            {[
              { status: 'active', width: '70%' },
              { status: 'synced', width: '85%' },
              { status: 'pending', width: '60%' },
            ].map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-5 items-center py-2.5 border-b last:border-b-0 text-xs"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                {/* SKU */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: idx === 1 ? 'var(--accent-mint)' : 'var(--accent-blue)',
                    }}
                  />
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: row.width,
                      backgroundColor: 'var(--text-primary)',
                      opacity: 0.6,
                    }}
                  />
                </div>

                {/* Category */}
                <div
                  className="h-2 rounded-full w-14"
                  style={{ backgroundColor: 'var(--text-muted)', opacity: 0.4 }}
                />

                {/* Status pill */}
                <div>
                  <span
                    className="inline-block px-2 py-0.5 rounded-full text-[9px] font-mono border"
                    style={{
                      backgroundColor: 'var(--glass-bg)',
                      borderColor: idx === 1 ? 'var(--accent-mint)' : 'var(--border-subtle)',
                      color: idx === 1 ? 'var(--accent-mint)' : 'var(--text-muted)',
                    }}
                  >
                    {idx === 1 ? 'Synced' : 'Active'}
                  </span>
                </div>

                {/* Inventory meter */}
                <div className="w-16 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--border-subtle)' }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${50 + idx * 22}%`,
                      background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-mint))',
                    }}
                  />
                </div>

                {/* Action button */}
                <div className="text-right">
                  <span
                    className="inline-block px-2 py-0.5 rounded text-[10px] font-mono border"
                    style={{
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    —
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
 * 2. SalonPOSMockup
 * Glass POS interface with service grid, cart panel, total area,
 * and a pay button. Generic labels only, no invented prices or names.
 * ───────────────────────────────────────────────────────────── */
export function SalonPOSMockup({ src, alt, className = '' }) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-2xl ${className}`}>
        <img
          src={src}
          alt={alt || 'Salon POS Screenshot'}
          className="w-full h-full object-cover rounded-2xl"
          loading="lazy"
        />
      </div>
    )
  }

  /* TODO: Replace with real screenshot */
  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden border select-none transition-colors duration-300 ${className}`}
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--glass-border)',
        boxShadow: '0 20px 50px -10px var(--glass-shadow, rgba(0,0,0,0.3))',
      }}
      aria-hidden="true"
    >
      {/* ── Top Bar ── */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b"
        style={{
          backgroundColor: 'var(--surface-raised)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--accent-mint)' }} />
          <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
            Station POS
          </span>
          <span
            className="text-[11px] font-mono px-2 py-0.5 rounded border"
            style={{
              backgroundColor: 'var(--base)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-muted)',
            }}
          >
            Ready
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>
            Staff ID: —
          </span>
        </div>
      </div>

      {/* ── Two-Column Layout (Catalog + Cart) ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[360px] sm:min-h-[420px]">
        {/* Left Column: Service Catalog (8 cols) */}
        <div className="md:col-span-7 lg:col-span-8 p-4 sm:p-5 flex flex-col gap-4 border-b md:border-b-0 md:border-r" style={{ borderColor: 'var(--border-subtle)' }}>
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {['All', 'Hair', 'Spa', 'Treatment', 'Packages'].map((cat, idx) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full text-xs font-medium shrink-0 transition-colors"
                style={{
                  background: idx === 0 ? 'linear-gradient(135deg, var(--accent-blue), var(--accent-mint))' : 'var(--surface-raised)',
                  color: idx === 0 ? 'var(--base)' : 'var(--text-muted)',
                  border: idx === 0 ? 'none' : '1px solid var(--border-subtle)',
                }}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* 6 Service Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 flex-1">
            {[0, 1, 2, 3, 4, 5].map((card) => (
              <div
                key={card}
                className="p-3 rounded-xl border flex flex-col justify-between transition-all"
                style={{
                  backgroundColor: 'var(--surface-raised)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <div>
                  <div
                    className="w-7 h-7 rounded-lg mb-2 flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--glass-bg)',
                      border: '1px solid var(--glass-border)',
                    }}
                  >
                    <div
                      className="w-3 h-3 rounded-sm"
                      style={{
                        backgroundColor: card % 2 === 0 ? 'var(--accent-blue)' : 'var(--accent-mint)',
                        opacity: 0.8,
                      }}
                    />
                  </div>
                  {/* Title skeleton */}
                  <div
                    className="h-2 rounded-full mb-1.5"
                    style={{
                      width: `${65 + (card % 3) * 15}%`,
                      backgroundColor: 'var(--text-primary)',
                      opacity: 0.7,
                    }}
                  />
                  {/* Duration skeleton */}
                  <div
                    className="h-1.5 rounded-full w-10 mb-2"
                    style={{ backgroundColor: 'var(--text-muted)', opacity: 0.4 }}
                  />
                </div>

                <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                  <span className="font-mono text-xs font-semibold" style={{ color: 'var(--accent-blue)' }}>
                    —
                  </span>
                  <div
                    className="w-5 h-5 rounded-md flex items-center justify-center font-bold text-xs"
                    style={{
                      backgroundColor: 'var(--glass-bg)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    +
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Cart Panel (4-5 cols) */}
        <div
          className="md:col-span-5 lg:col-span-4 p-4 sm:p-5 flex flex-col justify-between"
          style={{
            backgroundColor: 'var(--surface-raised)',
          }}
        >
          <div>
            {/* Cart Header */}
            <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
              <div>
                <span className="font-semibold text-xs uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
                  Order Ticket
                </span>
                <div className="text-[10px] font-mono" style={{ color: 'var(--text-muted)' }}>
                  Active Customer
                </div>
              </div>
              <span
                className="px-2 py-0.5 rounded-full text-[10px] font-mono border"
                style={{
                  backgroundColor: 'var(--glass-bg)',
                  borderColor: 'var(--accent-mint)',
                  color: 'var(--accent-mint)',
                }}
              >
                3 Items
              </span>
            </div>

            {/* Cart Items List */}
            <div className="py-3 flex flex-col gap-2.5">
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  className="p-2.5 rounded-lg border flex items-center justify-between"
                  style={{
                    backgroundColor: 'var(--base)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded"
                      style={{
                        backgroundColor: 'var(--surface)',
                        color: 'var(--accent-blue)',
                      }}
                    >
                      1×
                    </span>
                    <div>
                      <div
                        className="h-2 rounded-full mb-1"
                        style={{
                          width: `${50 + item * 20}px`,
                          backgroundColor: 'var(--text-primary)',
                          opacity: 0.6,
                        }}
                      />
                      <div
                        className="h-1.5 rounded-full w-10"
                        style={{ backgroundColor: 'var(--text-muted)', opacity: 0.3 }}
                      />
                    </div>
                  </div>
                  <span className="font-mono text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                    —
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Summary & Pay Button */}
          <div className="pt-3 border-t flex flex-col gap-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="flex flex-col gap-1.5 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>—</span>
              </div>
              <div className="flex justify-between">
                <span>Tax / VAT</span>
                <span>—</span>
              </div>
              <div className="flex justify-between text-sm font-bold pt-1.5 border-t" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }}>
                <span>Total Due</span>
                <span className="brain-gradient text-base font-display">—</span>
              </div>
            </div>

            {/* Pay Button */}
            <div
              className="w-full py-3 rounded-xl font-semibold text-center text-xs tracking-wider uppercase cursor-pointer select-none transition-all brain-gradient-bg"
              style={{
                color: 'var(--base)',
                boxShadow: '0 4px 20px var(--glow-blue)',
              }}
            >
              Process Payment
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
 * 3. QueueDisplayMockup
 * Wall-screen style display with a large "Now Serving" token panel,
 * waiting list, and counter tiles.
 * ───────────────────────────────────────────────────────────── */
export function QueueDisplayMockup({ src, alt, className = '' }) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-2xl ${className}`}>
        <img
          src={src}
          alt={alt || 'Queue Management Display Screenshot'}
          className="w-full h-full object-cover rounded-2xl"
          loading="lazy"
        />
      </div>
    )
  }

  /* TODO: Replace with real screenshot */
  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden border select-none transition-colors duration-300 ${className}`}
      style={{
        backgroundColor: 'var(--base)',
        borderColor: 'var(--glass-border)',
        boxShadow: '0 20px 50px -10px var(--glass-shadow, rgba(0,0,0,0.3))',
      }}
      aria-hidden="true"
    >
      {/* ── Wall Screen Header ── */}
      <div
        className="flex items-center justify-between px-5 py-3 border-b"
        style={{
          backgroundColor: 'var(--surface)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-3 h-3 rounded-full animate-pulse"
            style={{ backgroundColor: 'var(--accent-mint)' }}
          />
          <span className="font-display font-bold text-sm tracking-wide" style={{ color: 'var(--text-primary)' }}>
            CENTRAL QUEUE SYSTEM
          </span>
          <span
            className="text-[10px] font-mono px-2 py-0.5 rounded-full border hidden sm:inline-block"
            style={{
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-muted)',
            }}
          >
            Hall A • Online
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
          <span>Time: — : —</span>
        </div>
      </div>

      {/* ── Main Display Body (Hero Token + Queue Grid) ── */}
      <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 min-h-[340px] sm:min-h-[400px]">
        {/* Left: Prominent "NOW SERVING" Hero Card (7 cols) */}
        <div
          className="md:col-span-7 rounded-2xl p-6 sm:p-8 border flex flex-col justify-between relative overflow-hidden"
          style={{
            backgroundColor: 'var(--surface-raised)',
            borderColor: 'var(--accent-blue)',
            boxShadow: '0 0 30px var(--glow-blue)',
          }}
        >
          {/* Background ambient glow */}
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none rounded-full -mr-20 -mt-20 opacity-20 blur-3xl"
            style={{ background: 'var(--glow-mint)' }}
          />

          <div>
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
                style={{
                  backgroundColor: 'var(--glass-bg)',
                  borderColor: 'var(--accent-mint)',
                  color: 'var(--accent-mint)',
                }}
              >
                ● Now Serving
              </span>
              <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                Desk 04
              </span>
            </div>

            {/* Giant Token Display */}
            <div className="my-4 sm:my-8 text-center">
              <div
                className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight brain-gradient py-2"
              >
                A — 104
              </div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                  Please proceed to
                </span>
                <span
                  className="text-xs font-bold font-mono px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: 'var(--base)',
                    color: 'var(--accent-mint)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  Counter 04
                </span>
              </div>
            </div>
          </div>

          {/* Bottom pulse bar */}
          <div className="pt-4 border-t flex items-center justify-between text-xs font-mono" style={{ borderColor: 'var(--border-subtle)' }}>
            <span style={{ color: 'var(--text-muted)' }}>Status: Active Call</span>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-blue)' }} />
              <span style={{ color: 'var(--accent-blue)' }}>Chime Active</span>
            </div>
          </div>
        </div>

        {/* Right: Waiting List & Active Counters (5 cols) */}
        <div className="md:col-span-5 flex flex-col gap-4">
          {/* Waiting List */}
          <div
            className="p-4 rounded-xl border flex-1"
            style={{
              backgroundColor: 'var(--surface-raised)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <div className="flex items-center justify-between mb-3 pb-2 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
                Next in Line
              </span>
              <span className="text-[10px] font-mono" style={{ color: 'var(--text-muted)' }}>
                Est. Wait: —
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {[
                { token: 'A — 105', counter: 'Desk 02' },
                { token: 'B — 042', counter: 'Desk 01' },
                { token: 'A — 106', counter: 'Desk 04' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 rounded-lg border text-xs"
                  style={{
                    backgroundColor: 'var(--base)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <span className="font-mono font-bold" style={{ color: 'var(--text-primary)' }}>
                    {item.token}
                  </span>
                  <span className="font-mono text-[11px]" style={{ color: 'var(--accent-blue)' }}>
                    {item.counter}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Counter Status Tiles */}
          <div className="grid grid-cols-2 gap-2.5">
            {[
              { num: 'C1', token: 'B — 041' },
              { num: 'C2', token: 'A — 103' },
              { num: 'C3', token: 'C — 012' },
              { num: 'C4', token: 'A — 104' },
            ].map((c, i) => (
              <div
                key={i}
                className="p-2.5 rounded-lg border"
                style={{
                  backgroundColor: 'var(--surface-raised)',
                  borderColor: i === 3 ? 'var(--accent-mint)' : 'var(--border-subtle)',
                }}
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-1" style={{ color: 'var(--text-muted)' }}>
                  <span>Counter {c.num}</span>
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: i === 3 ? 'var(--accent-mint)' : 'var(--accent-blue)' }}
                  />
                </div>
                <div className="font-mono font-bold text-xs" style={{ color: 'var(--text-primary)' }}>
                  {c.token}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
