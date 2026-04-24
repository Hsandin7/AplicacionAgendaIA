import styles from './Header.module.css'

/* SVG Icons */
const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="16" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const BellIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    <circle cx="18" cy="5" r="3" fill="#F06565" stroke="none" />
  </svg>
)

function Header() {
  const today = new Date()
  const options = { weekday: 'long', day: 'numeric', month: 'long' }
  const dateStr = today.toLocaleDateString('es-ES', options)
  const formatted = dateStr.charAt(0).toUpperCase() + dateStr.slice(1)

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <button className={styles.iconBtn} aria-label="Menú">
          <MenuIcon />
        </button>
        <button className={styles.iconBtn} aria-label="Notificaciones">
          <BellIcon />
        </button>
      </div>
      <div className={styles.greeting}>
        <h1 className={styles.greetingText}>¡Hola, Alex! <span className={styles.wave}>👋</span></h1>
        <p className={styles.date}>{formatted}</p>
      </div>
    </header>
  )
}

export default Header
