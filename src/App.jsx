import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastProvider } from './context/ToastContext'

import HomePage    from './pages/HomePage'
import AboutPage   from './pages/AboutPage'
import ProgramsPage from './pages/ProgramsPage'
import NewsPage    from './pages/NewsPage'
import ImpactPage  from './pages/ImpactPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import DonatePage  from './pages/DonatePage'

const PAGES = {
  home:     HomePage,
  about:    AboutPage,
  programs: ProgramsPage,
  news:     NewsPage,
  impact:   ImpactPage,
  gallery:  GalleryPage,
  contact:  ContactPage,
  donate:   DonatePage,
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigate = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const PageComponent = PAGES[currentPage] || HomePage

  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col">
        <Header currentPage={currentPage} navigate={navigate} />
        <main className="flex-1">
          <PageComponent navigate={navigate} />
        </main>
        <Footer navigate={navigate} />
      </div>
    </ToastProvider>
  )
}
