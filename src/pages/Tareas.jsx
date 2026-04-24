import { useState } from 'react'
import BottomNav from '../components/BottomNav'
import styles from './Tareas.module.css'

/* ---- Icons ---- */
const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <line x1="3" y1="7" x2="21" y2="7" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="17" x2="21" y2="17" />
  </svg>
)

const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

/* ---- Data ---- */
const todayTasks = [
  { id: 1, text: 'Leer capítulo 4 de Marketing', priority: 'Alta' },
  { id: 2, text: 'Resumen tema 2 – Economía',    priority: 'Media' },
  { id: 3, text: 'Ejercicios Matemáticas',        priority: 'Baja' },
]

const upcomingTasks = [
  { id: 4, text: 'Estudiar para el parcial',  date: '25 abr' },
  { id: 5, text: 'Trabajo en grupo',          date: '26 abr' },
  { id: 6, text: 'Entrega proyecto final',    date: '30 abr' },
]

const priorityClass = {
  Alta:  styles.badgeHigh,
  Media: styles.badgeMed,
  Baja:  styles.badgeLow,
}

const FILTERS = ['Todas', 'Pendientes', 'Completadas']

/* ---- Checkbox component ---- */
function Checkbox({ checked, onToggle }) {
  return (
    <div
      className={`${styles.checkbox} ${checked ? styles.checked : ''}`}
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={e => e.key === ' ' && onToggle()}
    />
  )
}

/* ---- Page ---- */
function Tareas() {
  const [activeFilter, setActiveFilter] = useState('Todas')
  const [checked, setChecked] = useState({})

  const toggle = id => setChecked(prev => ({ ...prev, [id]: !prev[id] }))

  const isVisible = id => {
    const done = !!checked[id]
    if (activeFilter === 'Pendientes')  return !done
    if (activeFilter === 'Completadas') return done
    return true
  }

  const visibleToday    = todayTasks.filter(t => isVisible(t.id))
  const visibleUpcoming = upcomingTasks.filter(t => isVisible(t.id))

  return (
    <div className="page-container">
      {/* ---- Header ---- */}
      <header className={styles.header}>
        <button className={styles.headerBtn} aria-label="Abrir menú" id="tareas-menu-btn">
          <MenuIcon />
        </button>
        <h1 className={styles.headerTitle}>Mis tareas</h1>
        <button className={`${styles.headerBtn} ${styles.addBtn}`} aria-label="Nueva tarea" id="tareas-add-btn">
          <PlusIcon />
        </button>
      </header>

      {/* ---- Filters ---- */}
      <div className={styles.filters} role="tablist" aria-label="Filtrar tareas">
        {FILTERS.map(f => (
          <button
            key={f}
            id={`tareas-filter-${f.toLowerCase()}`}
            role="tab"
            aria-selected={activeFilter === f}
            className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ---- Scrollable content ---- */}
      <div className={`page-scroll ${styles.content}`}>

        {/* --- Hoy --- */}
        {visibleToday.length > 0 && (
          <section className={styles.section} aria-label="Tareas de hoy">
            <p className={styles.sectionTitle}>Hoy</p>
            {visibleToday.map(task => (
              <div
                key={task.id}
                className={styles.taskItem}
                onClick={() => toggle(task.id)}
                role="listitem"
              >
                <Checkbox checked={!!checked[task.id]} onToggle={() => toggle(task.id)} />
                <span className={`${styles.taskText} ${checked[task.id] ? styles.done : ''}`}>
                  {task.text}
                </span>
                <span className={`${styles.badge} ${priorityClass[task.priority]}`}>
                  {task.priority}
                </span>
              </div>
            ))}
          </section>
        )}

        {/* --- Próximas --- */}
        {visibleUpcoming.length > 0 && (
          <section className={styles.section} aria-label="Próximas tareas">
            <p className={styles.sectionTitle}>Próximas</p>
            {visibleUpcoming.map(task => (
              <div
                key={task.id}
                className={styles.taskItem}
                onClick={() => toggle(task.id)}
                role="listitem"
              >
                <Checkbox checked={!!checked[task.id]} onToggle={() => toggle(task.id)} />
                <span className={`${styles.taskText} ${checked[task.id] ? styles.done : ''}`}>
                  {task.text}
                </span>
                <span className={styles.dateLabel}>{task.date}</span>
              </div>
            ))}
          </section>
        )}

        {/* Empty state */}
        {visibleToday.length === 0 && visibleUpcoming.length === 0 && (
          <div style={{ padding: '48px 24px', textAlign: 'center' }}>
            <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-base)' }}>
              {activeFilter === 'Completadas'
                ? '¡Aún no has completado ninguna tarea!'
                : 'No hay tareas pendientes. ¡Añade una!'}
            </p>
          </div>
        )}

        {/* Bottom padding above nav */}
        <div style={{ height: '16px' }} />
      </div>

      <BottomNav />
    </div>
  )
}

export default Tareas
