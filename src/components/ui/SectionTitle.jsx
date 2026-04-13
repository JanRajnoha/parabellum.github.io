export default function SectionTitle({ label, title, center = false }) {
  return (
    <div className={`section-title ${center ? 'section-title-center' : ''}`}>
      {label && <span className="section-label">{label}</span>}
      <h2>{title}</h2>
      <div className={`divider ${center ? 'divider-center' : ''}`} />
    </div>
  )
}
