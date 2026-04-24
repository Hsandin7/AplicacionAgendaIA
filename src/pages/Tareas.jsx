import BottomNav from '../components/BottomNav'
import styles from './Placeholder.module.css'

function Tareas() {
  return (
    <div className="page-container">
      <div className="page-scroll">
        <div className={styles.wrapper}>
          <div className={styles.iconWrap}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7C6FF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </div>
          <h1 className={styles.title}>Tareas</h1>
          <p className={styles.subtitle}>Próximamente disponible</p>
        </div>
      </div>
      <BottomNav />
    </div>
  )
}

export default Tareas
