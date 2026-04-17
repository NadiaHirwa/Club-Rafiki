import PageBanner from '../components/PageBanner'
import NewsCard from '../components/NewsCard'
import { news } from '../data/siteData'

export default function NewsPage() {
  return (
    <>
      <PageBanner title="News & Events" subtitle="Stay up to date with what's happening at Club Rafiki." />
      <section className="py-20 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-eyebrow">Latest</span>
            <h2 className="section-title">Recent Stories</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <NewsCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
