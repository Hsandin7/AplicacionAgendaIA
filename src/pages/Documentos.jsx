import { useState } from 'react'
import BottomNav from '../components/BottomNav'
import styles from './Documentos.module.css'

/* ---- Icons ---- */
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

const FilePdfIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M9 15v-4M9 11h2a2 2 0 0 1 0 4H9M15 11v4M15 11h2a2 2 0 0 1 0 4h-2" />
  </svg>
)

const FileDocIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="9" y1="15" x2="15" y2="15" />
    <line x1="9" y1="11" x2="15" y2="11" />
  </svg>
)

const FileVideoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M10 9l5 3-5 3z" />
  </svg>
)

const FileZipIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="10" y1="12" x2="10" y2="12.01" />
    <line x1="10" y1="14" x2="10" y2="14.01" />
    <line x1="10" y1="16" x2="10" y2="16.01" />
  </svg>
)

/* ---- Data ---- */
const DOCUMENTS = [
  { id: 1, name: 'Apuntes Economía.pdf', date: '24/04/24', type: 'PDF', category: 'Apuntes', Icon: FilePdfIcon, iconClass: styles.docIconPdf },
  { id: 2, name: 'Teoría Marketing.docx', date: '22/04/24', type: 'DOCX', category: 'Apuntes', Icon: FileDocIcon, iconClass: styles.docIconDocx },
  { id: 3, name: 'Resumen Matemáticas.pdf', date: '21/04/24', type: 'PDF', category: 'Apuntes', Icon: FilePdfIcon, iconClass: styles.docIconPdf },
  { id: 4, name: 'Clase 12 - Elasticidad.mp4', date: '20/04/24', type: 'MP4', category: 'Clases', Icon: FileVideoIcon, iconClass: styles.docIconMp4 },
  { id: 5, name: 'Examen años anteriores.zip', date: '18/04/24', type: 'ZIP', category: 'Otros', Icon: FileZipIcon, iconClass: styles.docIconZip },
]

const FILTERS = ['Todos', 'Apuntes', 'Clases', 'Libros', 'Otros']

/* ---- Component ---- */
function Documentos() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter documents based on search and category
  const visibleDocs = DOCUMENTS.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = activeFilter === 'Todos' || doc.category === activeFilter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="page-container">
      {/* ---- Header ---- */}
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Documentos</h1>
      </header>

      {/* ---- Scrollable content ---- */}
      <div className="page-scroll">
        
        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <div className={styles.searchInputWrap}>
            <span className={styles.searchIcon}><SearchIcon /></span>
            <input 
              type="text" 
              className={styles.searchInput} 
              placeholder="Buscar documentos..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className={styles.addBtn} aria-label="Añadir documento">
            <PlusIcon />
          </button>
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          {FILTERS.map(f => (
            <button
              key={f}
              className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Document List */}
        <div className={styles.docList}>
          {visibleDocs.length > 0 ? (
            visibleDocs.map(doc => (
              <div key={doc.id} className={styles.docItem}>
                <div className={`${styles.docIconWrap} ${doc.iconClass}`}>
                  <doc.Icon />
                </div>
                <div className={styles.docInfo}>
                  <p className={styles.docTitle}>{doc.name}</p>
                  <p className={styles.docMeta}>{doc.date} · {doc.type}</p>
                </div>
                <span className={styles.docArrow}><ChevronRight /></span>
              </div>
            ))
          ) : (
            <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--color-text-tertiary)' }}>
              No se encontraron documentos.
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

export default Documentos
