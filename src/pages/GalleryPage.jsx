import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import { galleryImages } from '../data/siteData'

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <PageBanner title="Gallery" subtitle="Moments captured from our programs, events, and community life." />

      <section className="py-20 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-eyebrow">Photos</span>
            <h2 className="section-title">Our Moments</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, i) => (
              <div key={i}
                onClick={() => setLightbox(src)}
                className="rounded-xl overflow-hidden aspect-square cursor-pointer group shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all"
              >
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.flickr.com/photos/101217036@N07/albums"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-orange text-white rounded-full px-7 py-3.5 font-bold hover:bg-orange-dark transition-colors"
            >
              View Full Gallery on Flickr
              <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-[2.5]">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 text-white text-xl grid place-items-center hover:bg-white/40 transition-colors border-0 cursor-pointer"
            onClick={() => setLightbox(null)}
          >✕</button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-full max-h-[90vh] rounded-xl object-contain"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
