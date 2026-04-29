import BottomNav from '../components/BottomNav'
import styles from './Perfil.module.css'

/* ---- Icons ---- */
const FireIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" />
  </svg>
)

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" fill="currentColor" />
  </svg>
)

/* ---- Data ---- */
const donutData = [
  { label: 'Clases',   value: 40, color: '#7C6FF7' },
  { label: 'Estudio',  value: 35, color: '#5B52D4' },
  { label: 'Tareas',   value: 15, color: '#F59E0B' },
  { label: 'Descanso', value: 10, color: '#C4BFFE' },
]

// Circumference of the circle r=37.5 is ~235.619
const CIRCUMFERENCE = 2 * Math.PI * 37.5;

function DonutChart() {
  let currentOffset = 0;

  return (
    <svg className={styles.donutSvg} viewBox="0 0 100 100">
      {donutData.map((item, i) => {
        const strokeDasharray = `${(item.value / 100) * CIRCUMFERENCE} ${CIRCUMFERENCE}`;
        const strokeDashoffset = -currentOffset;
        currentOffset += (item.value / 100) * CIRCUMFERENCE;

        return (
          <circle
            key={i}
            cx="50"
            cy="50"
            r="37.5"
            className={styles.donutSegment}
            stroke={item.color}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
          />
        )
      })}
    </svg>
  )
}

function LineChart() {
  // SVG points for 7 days
  const points = [
    { x: 0,   y: 70 },
    { x: 50,  y: 50 },
    { x: 100, y: 40 },
    { x: 150, y: 60 },
    { x: 200, y: 20 },
    { x: 250, y: 40 },
    { x: 300, y: 50 },
  ];
  
  const pointsString = points.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <div className={styles.chartContainer}>
      <svg width="100%" height="80" viewBox="0 0 300 80" preserveAspectRatio="none">
        <polyline
          fill="none"
          stroke="#7C6FF7"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={pointsString}
        />
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="4" fill="#7C6FF7" />
        ))}
      </svg>
      <div className={styles.chartLabels}>
        <span>L</span>
        <span>M</span>
        <span>X</span>
        <span>J</span>
        <span>V</span>
        <span>S</span>
        <span>D</span>
      </div>
    </div>
  )
}

/* ---- Component ---- */
function Perfil() {
  return (
    <div className="page-container">
      {/* ---- Header ---- */}
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Estadísticas</h1>
      </header>

      {/* ---- Scrollable content ---- */}
      <div className={`page-scroll ${styles.content}`}>
        
        {/* Progress Cards */}
        <section>
          <p className={styles.sectionTitle}>Tu progreso esta semana</p>
          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>12h 30m</span>
              <span className={styles.statLabel}>Tiempo de estudio</span>
            </div>
            <div className={styles.statCard}>
              <span className={`${styles.statValue} ${styles.success}`}>8</span>
              <span className={styles.statLabel}>Tareas completadas</span>
            </div>
            <div className={styles.statCard}>
              <span className={`${styles.statValue} ${styles.highlight}`}>85%</span>
              <span className={styles.statLabel}>Objetivo semanal</span>
            </div>
          </div>
        </section>

        {/* Time Distribution */}
        <section>
          <p className={styles.sectionTitle}>Distribución de tiempo</p>
          <div className={styles.distCard}>
            <DonutChart />
            <div className={styles.legend}>
              {donutData.map((item, i) => (
                <div key={i} className={styles.legendItem}>
                  <span className={styles.legendDot} style={{ backgroundColor: item.color }} />
                  <span>{item.label}</span>
                  <span className={styles.legendValue}>{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Study Streak */}
        <section>
          <p className={styles.sectionTitle}>Racha de estudio</p>
          <div className={styles.streakCard}>
            <div className={styles.streakHeader}>
              <div className={styles.fireIconWrap}>
                <FireIcon />
              </div>
              <div className={styles.streakInfo}>
                <span className={styles.streakDays}>7 días</span>
                <span className={styles.streakSub}>¡Sigue así!</span>
              </div>
            </div>
            <LineChart />
          </div>
        </section>

        {/* Optional Chat Input at bottom */}
        <div className={styles.inputBar}>
          <input type="text" className={styles.inputField} placeholder="Pregunta cualquier cosa..." />
          <button className={styles.sendBtn} aria-label="Enviar">
            <SendIcon />
          </button>
        </div>

      </div>

      <BottomNav />
    </div>
  )
}

export default Perfil
