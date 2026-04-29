import { NavLink } from 'react-router-dom'
import styles from './BottomNav.module.css'

/* ── Icon components ───────────────────────────────────── */
const HomeIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
    <polyline points="9 21 9 12 15 12 15 21" />
  </svg>
)

const TasksIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="16" rx="2" fill={active ? 'currentColor' : 'none'} fillOpacity="0.1" />
    <polyline points="9 11 12 14 22 4" stroke="currentColor" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
)

/* AI icon — sparkles mark for the FAB */
const AIFabIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4" />
    <circle cx="4" cy="20" r="2" />
  </svg>
)

const DocsIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill={active ? 'currentColor' : 'none'} fillOpacity="0.12"/>
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="16" y2="17" />
    <line x1="8" y1="9"  x2="10" y2="9"  />
  </svg>
)

const ProfileIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" fill={active ? 'currentColor' : 'none'} fillOpacity="0.12"/>
    <circle cx="12" cy="7" r="4" fill={active ? 'currentColor' : 'none'} fillOpacity="0.12"/>
  </svg>
)

/* ── Nav items (4 regular + 1 FAB in centre) ───────────── */
const navItems = [
  { to: '/',           label: 'Inicio',     Icon: HomeIcon,    id: 'nav-home'       },
  { to: '/tareas',     label: 'Tareas',     Icon: TasksIcon,   id: 'nav-tareas'     },
  { to: '/documentos', label: 'Documentos', Icon: DocsIcon,    id: 'nav-documentos' },
  { to: '/perfil',     label: 'Perfil',     Icon: ProfileIcon, id: 'nav-perfil'     },
]

function BottomNav() {
  return (
    <nav className={styles.nav} role="navigation" aria-label="Navegación principal">

      {/* First 2 items */}
      {navItems.slice(0, 2).map(({ to, label, Icon, id }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          id={id}
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ''}`
          }
        >
          {({ isActive }) => (
            <>
              <span className={styles.iconWrap}><Icon active={isActive} /></span>
              <span className={styles.label}>{label}</span>
            </>
          )}
        </NavLink>
      ))}

      {/* Central FAB — links to /ia */}
      <NavLink
        to="/ia"
        id="nav-ia"
        className={({ isActive }) =>
          `${styles.fabWrapper} ${isActive ? styles.fabActive : ''}`
        }
        aria-label="Asistente IA"
      >
        {({ isActive }) => (
          <div className={`${styles.fab} ${isActive ? styles.fabHighlight : ''}`}>
            <AIFabIcon />
          </div>
        )}
      </NavLink>

      {/* Last 2 items */}
      {navItems.slice(2).map(({ to, label, Icon, id }) => (
        <NavLink
          key={to}
          to={to}
          end
          id={id}
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ''}`
          }
        >
          {({ isActive }) => (
            <>
              <span className={styles.iconWrap}><Icon active={isActive} /></span>
              <span className={styles.label}>{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}

export default BottomNav
