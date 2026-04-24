import BottomNav from '../components/BottomNav'
import styles from './Placeholder.module.css'

function Documentos() {
  return (
    <div className="page-container">
      <div className="page-scroll">
        <div className={styles.wrapper}>
          <div className={styles.iconWrap}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7C6FF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="8" y1="13" x2="16" y2="13" />
              <line x1="8" y1="17" x2="16" y2="17" />
            </svg>
          </div>
          <h1 className={styles.title}>Documentos</h1>
          <p className={styles.subtitle}>Próximamente disponible</p>
        </div>
      </div>
      <BottomNav />
    </div>
  )
}

export default Documentos
