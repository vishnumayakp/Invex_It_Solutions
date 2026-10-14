// import { useState, useRef } from 'react'
// import { motion, useInView } from 'framer-motion'
// import { Building, MapPin, Navigation } from 'lucide-react'
// import SectionWrapper from '../common/SectionWrapper'
// import Reveal from '../common/Reveal'
// import SpotlightCard from '../common/SpotlightCard'
// import useReducedMotion from '../../hooks/useReducedMotion'

// export default function OfficesMap() {
//   const [activeNode, setActiveNode] = useState(null)
//   const mapRef = useRef(null)
//   const inView = useInView(mapRef, { once: false, amount: 0.2 })
//   const reduced = useReducedMotion()

//   const offices = [
//     {
//       id: 'mumbai',
//       city: 'Mumbai',
//       tag: 'India Headquarters',
//       /* TODO: replace with the real address */
//       address: '[Full Mumbai Address]',
//       icon: Building,
//       coords: { x: 270, y: 140 },
//       from: 'left',
//     },
//     {
//       id: 'edappal',
//       city: 'Edappal, Kerala',
//       tag: 'Kerala Development Center',
//       /* TODO: replace with the real address */
//       address: '[Full Edappal Address]',
//       icon: MapPin,
//       coords: { x: 260, y: 270 },
//       from: 'right',
//     },
//   ]

//   return (
//     <SectionWrapper id="offices-map" className="pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-20 lg:pb-20">
//       <div className="container-wide">
//         {/* Section Heading */}
//         <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
//           <Reveal from="bottom">
//             <span
//               className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border mb-3 inline-block"
//               style={{
//                 backgroundColor: 'var(--glass-bg)',
//                 borderColor: 'var(--glass-border)',
//                 color: 'var(--accent-mint)',
//               }}
//             >
//               Strategic Footprint
//             </span>
//           </Reveal>

//           <Reveal from="bottom" delay={0.1}>
//             <h2
//               className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4"
//               style={{ color: 'var(--text-primary)' }}
//             >
//               Our Offices
//             </h2>
//           </Reveal>

//           <Reveal from="bottom" delay={0.2}>
//             <p
//               className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto"
//               style={{ color: 'var(--text-secondary)' }}
//             >
//               Engineering hubs anchored in India, with continuous delivery networks servicing enterprises across the Middle East.
//             </p>
//           </Reveal>
//         </div>

//         {/* ── Main Map & Office Cards Layout ── */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
//           {/* ── Left Card: Mumbai India Headquarters (Enters from Left) ── */}
//           <div className="lg:col-span-3 order-2 lg:order-1">
//             <Reveal from="left">
//               <SpotlightCard
//                 cursorLabel="MUMBAI"
//                 onMouseEnter={() => setActiveNode('mumbai')}
//                 onMouseLeave={() => setActiveNode(null)}
//                 onFocus={() => setActiveNode('mumbai')}
//                 onBlur={() => setActiveNode(null)}
//                 tabIndex={0}
//                 className={`p-6 border transition-all duration-300 relative group rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-mint)] ${activeNode === 'mumbai'
//                   ? 'border-[var(--accent-blue)] shadow-lg shadow-[var(--glow-blue)]/20 scale-[1.02]'
//                   : 'hover:border-[var(--accent-blue)]/60'
//                   }`}
//                 style={{
//                   backgroundColor: 'var(--glass-bg)',
//                   borderColor: activeNode === 'mumbai' ? 'var(--accent-blue)' : 'var(--glass-border)',
//                   backdropFilter: 'blur(16px)',
//                 }}
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <div
//                     className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
//                     style={{
//                       background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-mint))',
//                       color: 'var(--base)',
//                     }}
//                   >
//                     <Building size={18} strokeWidth={2.2} />
//                   </div>
//                   <div>
//                     <span
//                       className="text-[10px] font-mono uppercase tracking-wider block font-semibold"
//                       style={{ color: 'var(--accent-blue)' }}
//                     >
//                       India Headquarters
//                     </span>
//                     <h3
//                       className="font-display font-bold text-lg sm:text-xl"
//                       style={{ color: 'var(--text-primary)' }}
//                     >
//                       Mumbai
//                     </h3>
//                   </div>
//                 </div>

//                 {/* TODO: Replace with the real address */}
//                 <p
//                   className="font-mono text-xs sm:text-sm leading-relaxed mb-6"
//                   style={{ color: 'var(--accent-blue-light, var(--accent-blue))' }}
//                 >
//                   [Full Mumbai Address]
//                 </p>

//                 {/* Get Directions Button (Disabled with TODO) */}
//                 {/* TODO: Enable directions link once final address is confirmed */}
//                 <button
//                   type="button"
//                   disabled
//                   className="w-full py-2.5 px-4 rounded-xl text-xs font-mono font-medium border flex items-center justify-center gap-2 opacity-60 cursor-not-allowed"
//                   style={{
//                     backgroundColor: 'var(--surface-raised)',
//                     borderColor: 'var(--border-subtle)',
//                     color: 'var(--text-muted)',
//                   }}
//                   title="Directions link will be activated upon final address confirmation"
//                 >
//                   <Navigation size={13} />
//                   <span>Get Directions</span>
//                 </button>
//               </SpotlightCard>
//             </Reveal>
//           </div>

//           {/* ── Central Glass Panel: Stylized Dotted Map (Scales in Centre) ── */}
//           <div ref={mapRef} className="lg:col-span-6 order-1 lg:order-2">
//             <Reveal from="bottom">
//               <div
//                 className="relative w-full rounded-3xl p-4 sm:p-6 border overflow-hidden select-none transition-colors duration-300"
//                 style={{
//                   backgroundColor: 'var(--glass-bg)',
//                   borderColor: 'var(--glass-border)',
//                   backdropFilter: 'blur(20px)',
//                   boxShadow: '0 20px 50px -10px var(--glass-shadow, rgba(0,0,0,0.3))',
//                 }}
//               >
//                 {/* Top Subtle Label */}
//                 <div className="flex items-center justify-between mb-2 px-2 text-[11px] font-mono text-muted">
//                   <span className="flex items-center gap-1.5">
//                     <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-mint)' }} />
//                     Active Hubs
//                   </span>
//                   <span>Direct Delivery Traces</span>
//                 </div>

//                 {/* Stylized SVG Map of Indian West Coast & Peninsula */}
//                 <svg
//                   viewBox="0 0 540 360"
//                   className="w-full h-auto overflow-visible"
//                   fill="none"
//                   aria-hidden="true"
//                 >
//                   <defs>
//                     <linearGradient id="map-hub-arc" x1="0%" y1="0%" x2="0%" y2="100%">
//                       <stop offset="0%" stopColor="var(--accent-blue)" />
//                       <stop offset="100%" stopColor="var(--accent-mint)" />
//                     </linearGradient>
//                     <linearGradient id="gulf-trace" x1="0%" y1="0%" x2="100%" y2="50%">
//                       <stop offset="0%" stopColor="var(--accent-mint)" stopOpacity="0.4" />
//                       <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0.8" />
//                     </linearGradient>
//                   </defs>

//                   {/* ── Regional Dotted Grid (Peninsula and Coastline representation) ── */}
//                   {[
//                     // North / Northwest
//                     { x: 230, y: 70 }, { x: 255, y: 70 }, { x: 280, y: 70 }, { x: 305, y: 70 },
//                     { x: 215, y: 95 }, { x: 240, y: 95 }, { x: 265, y: 95 }, { x: 290, y: 95 }, { x: 315, y: 95 },
//                     // Gujarat / Maharashtra Coast
//                     { x: 220, y: 120 }, { x: 245, y: 120 }, { x: 270, y: 120 }, { x: 295, y: 120 }, { x: 320, y: 120 }, { x: 345, y: 120 },
//                     // Mumbai Latitude
//                     { x: 245, y: 145 }, { x: 270, y: 145 }, { x: 295, y: 145 }, { x: 320, y: 145 }, { x: 345, y: 145 },
//                     // Central West Coast / Goa / Karnataka
//                     { x: 250, y: 170 }, { x: 275, y: 170 }, { x: 300, y: 170 }, { x: 325, y: 170 },
//                     { x: 250, y: 195 }, { x: 275, y: 195 }, { x: 300, y: 195 }, { x: 325, y: 195 },
//                     { x: 255, y: 220 }, { x: 280, y: 220 }, { x: 305, y: 220 },
//                     // Malabar Coast / Kerala Latitude
//                     { x: 240, y: 245 }, { x: 265, y: 245 }, { x: 290, y: 245 },
//                     { x: 235, y: 270 }, { x: 260, y: 270 }, { x: 285, y: 270 },
//                     // Southern Tip / Cape
//                     { x: 250, y: 295 }, { x: 275, y: 295 },
//                     { x: 265, y: 320 },
//                   ].map((dot, i) => (
//                     <circle
//                       key={i}
//                       cx={dot.x}
//                       cy={dot.y}
//                       r="1.8"
//                       fill="var(--border-strong)"
//                       opacity="0.35"
//                     />
//                   ))}

//                   {/* ── Secondary Subtle Connection: Middle East Partner Nodes ── */}
//                   {/* Qatar & UAE Nodes (West of Arabian Sea) */}
//                   <g opacity="0.75">
//                     {/* Qatar Node */}
//                     <circle cx="85" cy="115" r="3.5" fill="var(--surface-raised)" stroke="var(--border-strong)" strokeWidth="1" />
//                     <circle cx="85" cy="115" r="1.5" fill="var(--accent-blue)" />
//                     <text x="85" y="104" textAnchor="middle" fill="var(--text-muted)" fontSize="8.5" fontFamily="monospace">
//                       QATAR
//                     </text>

//                     {/* UAE Node */}
//                     <circle cx="125" cy="130" r="3.5" fill="var(--surface-raised)" stroke="var(--border-strong)" strokeWidth="1" />
//                     <circle cx="125" cy="130" r="1.5" fill="var(--accent-mint)" />
//                     <text x="125" y="146" textAnchor="middle" fill="var(--text-muted)" fontSize="8.5" fontFamily="monospace">
//                       UAE
//                     </text>

//                     {/* Partner Label */}
//                     <text x="105" y="160" textAnchor="middle" fill="var(--accent-mint)" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
//                       Simple Logic IT
//                     </text>

//                     {/* Dashed Cross-Sea Gulf Arc to Mumbai */}
//                     <path
//                       d="M 125 130 Q 195 125 270 140"
//                       stroke="url(#gulf-trace)"
//                       strokeWidth="1.2"
//                       strokeDasharray="4 4"
//                       fill="none"
//                     />
//                   </g>

//                   {/* ── Main Connecting Arc: Mumbai (270, 140) to Edappal (260, 270) ── */}
//                   <path
//                     d="M 270 140 Q 225 205 260 270"
//                     stroke="url(#map-hub-arc)"
//                     strokeWidth="2.5"
//                     strokeLinecap="round"
//                     fill="none"
//                   />

//                   {/* Traveling Light Pulse along India Arc */}
//                   {!reduced && inView && (
//                     <motion.circle
//                       r="3.5"
//                       fill="var(--accent-mint)"
//                       filter="drop-shadow(0 0 6px var(--glow-mint))"
//                       animate={{
//                         cx: [270, 240, 260],
//                         cy: [140, 205, 270],
//                         opacity: [0, 1, 0],
//                       }}
//                       transition={{
//                         duration: 2.8,
//                         repeat: Infinity,
//                         ease: 'easeInOut',
//                       }}
//                     />
//                   )}

//                   {/* ── Node 1: Mumbai HQ (270, 140) ── */}
//                   <g
//                     transform="translate(270, 140)"
//                     className="cursor-pointer"
//                     onMouseEnter={() => setActiveNode('mumbai')}
//                     onMouseLeave={() => setActiveNode(null)}
//                   >
//                     {/* Pulsing rings */}
//                     {!reduced && inView && (
//                       <motion.circle
//                         r="18"
//                         stroke="var(--accent-blue)"
//                         strokeWidth="1.2"
//                         fill="none"
//                         animate={{ r: [10, 24], opacity: [0.8, 0] }}
//                         transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
//                       />
//                     )}
//                     <circle
//                       r={activeNode === 'mumbai' ? 9 : 7}
//                       fill="var(--surface-raised)"
//                       stroke="var(--accent-blue)"
//                       strokeWidth={activeNode === 'mumbai' ? 3 : 2}
//                       className="transition-all duration-200"
//                     />
//                     <circle r="3" fill="var(--accent-blue)" />

//                     {/* Node Tag */}
//                     <g transform="translate(14, -2)">
//                       <rect
//                         x="0"
//                         y="-12"
//                         width="118"
//                         height="24"
//                         rx="6"
//                         fill="var(--surface-raised)"
//                         stroke={activeNode === 'mumbai' ? 'var(--accent-blue)' : 'var(--border-subtle)'}
//                         strokeWidth="1"
//                       />
//                       <text x="8" y="0" fill="var(--text-primary)" fontSize="9" fontFamily="sans-serif" fontWeight="bold">
//                         Mumbai
//                       </text>
//                       <text x="8" y="9" fill="var(--text-muted)" fontSize="7" fontFamily="monospace">
//                         India Headquarters
//                       </text>
//                     </g>
//                   </g>

//                   {/* ── Node 2: Edappal, Kerala (260, 270) ── */}
//                   <g
//                     transform="translate(260, 270)"
//                     className="cursor-pointer"
//                     onMouseEnter={() => setActiveNode('edappal')}
//                     onMouseLeave={() => setActiveNode(null)}
//                   >
//                     {/* Pulsing rings */}
//                     {!reduced && inView && (
//                       <motion.circle
//                         r="18"
//                         stroke="var(--accent-mint)"
//                         strokeWidth="1.2"
//                         fill="none"
//                         animate={{ r: [10, 24], opacity: [0.8, 0] }}
//                         transition={{ duration: 2.2, repeat: Infinity, delay: 0.6, ease: 'easeOut' }}
//                       />
//                     )}
//                     <circle
//                       r={activeNode === 'edappal' ? 9 : 7}
//                       fill="var(--surface-raised)"
//                       stroke="var(--accent-mint)"
//                       strokeWidth={activeNode === 'edappal' ? 3 : 2}
//                       className="transition-all duration-200"
//                     />
//                     <circle r="3" fill="var(--accent-mint)" />

//                     {/* Node Tag */}
//                     <g transform="translate(14, -2)">
//                       <rect
//                         x="0"
//                         y="-12"
//                         width="132"
//                         height="24"
//                         rx="6"
//                         fill="var(--surface-raised)"
//                         stroke={activeNode === 'edappal' ? 'var(--accent-mint)' : 'var(--border-subtle)'}
//                         strokeWidth="1"
//                       />
//                       <text x="8" y="0" fill="var(--text-primary)" fontSize="9" fontFamily="sans-serif" fontWeight="bold">
//                         Edappal, Kerala
//                       </text>
//                       <text x="8" y="9" fill="var(--accent-mint)" fontSize="7" fontFamily="monospace">
//                         Kerala Dev Center
//                       </text>
//                     </g>
//                   </g>
//                 </svg>
//               </div>
//             </Reveal>
//           </div>

//           {/* ── Right Card: Edappal Kerala Hub (Enters from Right) ── */}
//           <div className="lg:col-span-3 order-3">
//             <Reveal from="right">
//               <SpotlightCard
//                 cursorLabel="EDAPPAL"
//                 onMouseEnter={() => setActiveNode('edappal')}
//                 onMouseLeave={() => setActiveNode(null)}
//                 onFocus={() => setActiveNode('edappal')}
//                 onBlur={() => setActiveNode(null)}
//                 tabIndex={0}
//                 className={`p-6 border transition-all duration-300 relative group rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-mint)] ${activeNode === 'edappal'
//                   ? 'border-[var(--accent-mint)] shadow-lg shadow-[var(--glow-mint)]/20 scale-[1.02]'
//                   : 'hover:border-[var(--accent-mint)]/60'
//                   }`}
//                 style={{
//                   backgroundColor: 'var(--glass-bg)',
//                   borderColor: activeNode === 'edappal' ? 'var(--accent-mint)' : 'var(--glass-border)',
//                   backdropFilter: 'blur(16px)',
//                 }}
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <div
//                     className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
//                     style={{
//                       background: 'linear-gradient(135deg, var(--accent-mint), var(--accent-blue))',
//                       color: 'var(--base)',
//                     }}
//                   >
//                     <MapPin size={18} strokeWidth={2.2} />
//                   </div>
//                   <div>
//                     <span
//                       className="text-[10px] font-mono uppercase tracking-wider block font-semibold"
//                       style={{ color: 'var(--accent-mint)' }}
//                     >
//                       Kerala Dev Center
//                     </span>
//                     <h3
//                       className="font-display font-bold text-lg sm:text-xl"
//                       style={{ color: 'var(--text-primary)' }}
//                     >
//                       Edappal
//                     </h3>
//                   </div>
//                 </div>

//                 {/* TODO: Replace with the real address */}
//                 <p
//                   className="font-mono text-xs sm:text-sm leading-relaxed mb-6"
//                   style={{ color: 'var(--accent-blue-light, var(--accent-blue))' }}
//                 >
//                   [Full Edappal Address]
//                 </p>

//                 {/* Get Directions Button (Disabled with TODO) */}
//                 {/* TODO: Enable directions link once final address is confirmed */}
//                 <button
//                   type="button"
//                   disabled
//                   className="w-full py-2.5 px-4 rounded-xl text-xs font-mono font-medium border flex items-center justify-center gap-2 opacity-60 cursor-not-allowed"
//                   style={{
//                     backgroundColor: 'var(--surface-raised)',
//                     borderColor: 'var(--border-subtle)',
//                     color: 'var(--text-muted)',
//                   }}
//                   title="Directions link will be activated upon final address confirmation"
//                 >
//                   <Navigation size={13} />
//                   <span>Get Directions</span>
//                 </button>
//               </SpotlightCard>
//             </Reveal>
//           </div>
//         </div>
//       </div>
//     </SectionWrapper>
//   )
// }


import { useState, useEffect, useMemo, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Polyline, Tooltip, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Building, MapPin, Navigation } from 'lucide-react'
import SectionWrapper from '../common/SectionWrapper'
import Reveal from '../common/Reveal'
import SpotlightCard from '../common/SpotlightCard'
import useReducedMotion from '../../hooks/useReducedMotion'

/* ── Office data ──
   position = [latitude, longitude]. These are town-centre coordinates;
   replace them with the exact office pin (right-click the spot in Google Maps → click the numbers to copy). */
const OFFICES = [
  {
    id: 'mumbai',
    city: 'Mumbai',
    tag: 'India Headquarters',
    address: 'H.O Building No.429 BC Takur Site, Chirner, Mumbai - 410206',
    /* Approximate area (Chirner, Uran side). Replace with the exact pin: right-click the spot in Google Maps and copy the numbers. */
    position: [18.89, 73.04],
    accent: 'var(--accent-blue)',
  },
  {
    id: 'edappal',
    city: 'Edappal, Kerala',
    tag: 'Kerala Dev Center',
    address: 'Al Madeena Complex, Edappal, Kerala 679576',
    position: [10.7867, 76.0],
    accent: 'var(--accent-mint)',
  },
]

/* Directions use the exact written address, so Google Maps routes to the real place */
const mapsUrl = (office) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(office.address)}`

/* Basemaps (keep the attribution). "street" is the normal, clearly visible map. */
const TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
/* OpenStreetMap's own tiles need no API key. "Dark" is the same tiles recoloured with a CSS filter. */
const OSM_URL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
const TILE_STYLES = {
  street: { label: 'Map', url: OSM_URL, className: '' },
  dark: { label: 'Dark', url: OSM_URL, className: 'osm-dark-tiles' },
}

/* Marker + tooltip styling lives here so the component is self-contained */
const MAP_CSS = `
.office-map .leaflet-container { background: var(--base, #050806); font-family: inherit; }
.office-map .osm-dark-tiles { filter: invert(1) hue-rotate(180deg) brightness(0.9) contrast(0.95) saturate(0.7); }
.office-pin { position: relative; display: block; width: 20px; height: 20px; border-radius: 9999px;
  background: var(--surface-raised, #0b100d); border: 2px solid var(--pin);
  box-shadow: 0 0 14px color-mix(in srgb, var(--pin) 55%, transparent); transition: transform .2s ease; }
.office-pin::after { content: ''; position: absolute; inset: 4px; border-radius: 9999px; background: var(--pin); }
.office-pin::before { content: ''; position: absolute; inset: -2px; border-radius: 9999px; border: 1.5px solid var(--pin);
  animation: office-pulse 2.2s ease-out infinite; }
.office-pin.is-active { transform: scale(1.35); }
@keyframes office-pulse { 0% { transform: scale(1); opacity: .8; } 100% { transform: scale(2.6); opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .office-pin::before { animation: none; } }
.office-tip.leaflet-tooltip { background: var(--surface-raised, #0b100d); color: var(--text-primary, #e8f0e6);
  border: 1px solid var(--glass-border, rgba(191,224,184,.25)); border-radius: 8px; padding: 6px 10px;
  box-shadow: 0 6px 20px rgba(0,0,0,.45); line-height: 1.25; }
.office-tip.leaflet-tooltip::before { display: none; }
.office-tip .tip-city { font-weight: 700; font-size: 12px; display: block; }
.office-tip .tip-tag { font-family: ui-monospace, monospace; font-size: 10px; color: var(--text-muted, #8fa39a); }
.office-map .leaflet-control-zoom a { background: var(--surface-raised, #0b100d); color: var(--text-primary, #e8f0e6);
  border-color: var(--glass-border, rgba(191,224,184,.25)); }
.office-map .leaflet-control-zoom a:hover { color: var(--accent-mint, #bfe0b8); }
.office-map .leaflet-control-attribution { background: color-mix(in srgb, var(--base, #050806) 75%, transparent);
  color: var(--text-muted, #8fa39a); font-size: 10px; }
.office-map .leaflet-control-attribution a { color: var(--accent-mint, #bfe0b8); }
`

function makePin(accent, active) {
  return L.divIcon({
    className: '',
    html: `<span class="office-pin ${active ? 'is-active' : ''}" style="--pin:${accent}"></span>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  })
}

/* Moves the camera when the "focus" chip changes: one office, or both */
function MapController({ focus, reduced }) {
  const map = useMap()
  const first = useRef(true)

  /* Re-measure the map whenever its box changes (e.g. after the Reveal animation),
     otherwise Leaflet can render a blank/grey area. */
  useEffect(() => {
    const el = map.getContainer()
    const refresh = () => map.invalidateSize()
    const t = setTimeout(refresh, 300)
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(refresh) : null
    ro?.observe(el)
    window.addEventListener('load', refresh)
    return () => {
      clearTimeout(t)
      ro?.disconnect()
      window.removeEventListener('load', refresh)
    }
  }, [map])

  useEffect(() => {
    const animate = !reduced && !first.current
    first.current = false
    if (focus) {
      const office = OFFICES.find((o) => o.id === focus)
      if (animate) map.flyTo(office.position, 12, { duration: 1.2 })
      else map.setView(office.position, 12, { animate: false })
    } else {
      const bounds = L.latLngBounds(OFFICES.map((o) => o.position))
      if (animate) map.flyToBounds(bounds, { padding: [70, 70], duration: 1.2 })
      else map.fitBounds(bounds, { padding: [70, 70], animate: false })
    }
  }, [focus, reduced, map])

  return null
}

function OfficeCard({ office, icon: Icon, activeNode, setActiveNode, setFocus, gradient, labelColor }) {
  const isActive = activeNode === office.id
  return (
    <SpotlightCard
      cursorLabel={office.id.toUpperCase()}
      onClick={() => setFocus(office.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') setFocus(office.id)
      }}
      onMouseEnter={() => setActiveNode(office.id)}
      onMouseLeave={() => setActiveNode(null)}
      onFocus={() => setActiveNode(office.id)}
      onBlur={() => setActiveNode(null)}
      tabIndex={0}
      className={`p-6 border transition-all duration-300 relative group rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-mint)] ${isActive ? 'scale-[1.02] shadow-lg' : ''
        }`}
      style={{
        backgroundColor: 'var(--glass-bg)',
        borderColor: isActive ? office.accent : 'var(--glass-border)',
        backdropFilter: 'blur(16px)',
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: gradient, color: 'var(--base)' }}
        >
          <Icon size={18} strokeWidth={2.2} />
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider block font-semibold" style={{ color: labelColor }}>
            {office.tag}
          </span>
          <h3 className="font-display font-bold text-lg sm:text-xl" style={{ color: 'var(--text-primary)' }}>
            {office.city}
          </h3>
        </div>
      </div>

      <p className="font-mono text-xs sm:text-sm leading-relaxed mb-6" style={{ color: 'var(--accent-blue-light, var(--accent-blue))' }}>
        {office.address}
      </p>

      <a
        href={mapsUrl(office)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2.5 px-4 rounded-xl text-xs font-mono font-medium border flex items-center justify-center gap-2 transition-colors duration-300 hover:text-[var(--accent-mint)] hover:border-[var(--accent-mint)]"
        style={{
          backgroundColor: 'var(--surface-raised)',
          borderColor: 'var(--border-subtle)',
          color: 'var(--text-primary)',
        }}
      >
        <Navigation size={13} />
        <span>Get Directions</span>
      </a>
    </SpotlightCard>
  )
}

export default function OfficesMap() {
  const [activeNode, setActiveNode] = useState(null)
  const [focus, setFocus] = useState(null) // null = show both offices
  const [tileStyle, setTileStyle] = useState('street')
  const reduced = useReducedMotion()
  const bounds = useMemo(() => L.latLngBounds(OFFICES.map((o) => o.position)), [])

  const icons = useMemo(
    () =>
      Object.fromEntries(
        OFFICES.map((o) => [o.id, { idle: makePin(o.accent, false), active: makePin(o.accent, true) }])
      ),
    []
  )

  const chips = [
    { id: null, label: 'Both offices' },
    ...OFFICES.map((o) => ({ id: o.id, label: o.city.split(',')[0] })),
  ]

  const [mumbai, edappal] = OFFICES

  return (
    <SectionWrapper id="offices-map" className="pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-20 lg:pb-20">
      <style>{MAP_CSS}</style>
      <div className="container-wide">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Reveal from="bottom" delay={0.1}>
            <h2
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Our Offices
            </h2>
          </Reveal>

          <Reveal from="bottom" delay={0.2}>
            <p
              className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Engineering hubs anchored in India, with continuous delivery networks servicing enterprises across the Middle East.
            </p>
          </Reveal>
        </div>

        {/* ── Main Map & Office Cards Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Card: Mumbai */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <Reveal from="left">
              <OfficeCard
                office={mumbai}
                icon={Building}
                activeNode={activeNode}
                setActiveNode={setActiveNode}
                setFocus={setFocus}
                gradient="linear-gradient(135deg, var(--accent-blue), var(--accent-mint))"
                labelColor="var(--accent-blue)"
              />
            </Reveal>
          </div>

          {/* Centre: real interactive map */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <Reveal from="bottom">
              <div
                className="office-map relative w-full rounded-3xl p-4 sm:p-6 border overflow-hidden transition-colors duration-300"
                style={{
                  backgroundColor: 'var(--glass-bg)',
                  borderColor: 'var(--glass-border)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 20px 50px -10px var(--glass-shadow, rgba(0,0,0,0.3))',
                  isolation: 'isolate', // keeps Leaflet's z-indexes below your sticky header/nav
                }}
              >
                {/* Focus chips */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
                  <span className="flex items-center gap-1.5 text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-mint)' }} />
                    Active Hubs
                  </span>
                  <div className="flex flex-wrap gap-1.5" role="group" aria-label="Map focus">
                    {chips.map((chip) => {
                      const on = focus === chip.id
                      return (
                        <button
                          key={String(chip.id)}
                          type="button"
                          onClick={() => setFocus(chip.id)}
                          aria-pressed={on}
                          className="px-3 py-1 rounded-full text-[11px] font-mono border transition-colors duration-300"
                          style={{
                            color: on ? 'var(--base)' : 'var(--text-muted)',
                            background: on ? 'linear-gradient(to right, var(--accent-mint), var(--accent-blue))' : 'transparent',
                            borderColor: on ? 'transparent' : 'var(--glass-border)',
                          }}
                        >
                          {chip.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--glass-border)' }}>
                  {/* Map style switch */}
                  <div className="absolute top-3 right-3 z-[500] flex rounded-full overflow-hidden border text-[11px] font-mono" style={{ borderColor: 'var(--glass-border)', backgroundColor: 'var(--surface-raised, #0b100d)' }}>
                    {Object.entries(TILE_STYLES).map(([key, s]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setTileStyle(key)}
                        aria-pressed={tileStyle === key}
                        className="px-3 py-1 transition-colors duration-300"
                        style={{
                          color: tileStyle === key ? 'var(--base)' : 'var(--text-muted)',
                          background: tileStyle === key ? 'var(--accent-mint)' : 'transparent',
                        }}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                  <MapContainer
                    bounds={bounds}
                    boundsOptions={{ padding: [70, 70] }}
                    scrollWheelZoom={false}
                    className="w-full"
                    style={{ height: 440, minHeight: 320 }}
                    aria-label="Map showing our Mumbai and Edappal offices"
                  >
                    <TileLayer
                      key={tileStyle}
                      url={TILE_STYLES[tileStyle].url}
                      className={TILE_STYLES[tileStyle].className}
                      attribution={TILE_ATTRIBUTION}
                      maxZoom={19}
                    />
                    <MapController focus={focus} reduced={reduced} />

                    {/* Connection line between the two offices */}
                    <Polyline
                      positions={OFFICES.map((o) => o.position)}
                      pathOptions={{ color: '#BFE0B8', weight: 2, opacity: 0.7, dashArray: '6 8' }}
                    />

                    {OFFICES.map((o) => (
                      <Marker
                        key={o.id}
                        position={o.position}
                        icon={activeNode === o.id ? icons[o.id].active : icons[o.id].idle}
                        eventHandlers={{
                          mouseover: () => setActiveNode(o.id),
                          mouseout: () => setActiveNode(null),
                          click: () => setFocus(o.id),
                        }}
                        keyboard
                        title={`${o.city} — ${o.tag}`}
                      >
                        <Tooltip permanent direction="right" offset={[14, 0]} className="office-tip">
                          <span className="tip-city">{o.city}</span>
                          <span className="tip-tag">{o.tag}</span>
                        </Tooltip>
                      </Marker>
                    ))}
                  </MapContainer>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Card: Edappal */}
          <div className="lg:col-span-3 order-3">
            <Reveal from="right">
              <OfficeCard
                office={edappal}
                icon={MapPin}
                activeNode={activeNode}
                setActiveNode={setActiveNode}
                setFocus={setFocus}
                gradient="linear-gradient(135deg, var(--accent-mint), var(--accent-blue))"
                labelColor="var(--accent-mint)"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}