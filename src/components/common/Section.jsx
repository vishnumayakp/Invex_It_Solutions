export default function Section({ id, className = '', children, noPadding = false }) {
  return (
    <section
      id={id}
      className={`
        relative overflow-hidden
        ${noPadding ? '' : 'py-24 md:py-32 lg:py-40'}
        ${className}
      `}
    >
      {children}
    </section>
  )
}
