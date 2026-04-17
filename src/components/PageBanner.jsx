export default function PageBanner({ title, subtitle }) {
  return (
    <div
      className="relative overflow-hidden text-white py-16 px-6 text-center"
      style={{ background: 'linear-gradient(135deg, #1A3A6B 0%, #0d2240 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}
      />
      <h1 className="font-display font-black text-3xl md:text-5xl mb-3 relative">{title}</h1>
      {subtitle && <p className="text-white/80 text-lg max-w-xl mx-auto relative">{subtitle}</p>}
    </div>
  )
}
