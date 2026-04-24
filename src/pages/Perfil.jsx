import BottomNav from '../components/BottomNav'
import styles from './Placeholder.module.css'

function Perfil() {
  return (
    <div className="page-container">
      <div className="page-scroll">
        <div className={styles.wrapper}>
          <div className={styles.iconWrap}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7C6FF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <h1 className={styles.title}>Perfil</h1>
          <p className={styles.subtitle}>Próximamente disponible</p>
        </div>
      </div>
      <BottomNav />
    </div>
  )
}

export default Perfil
