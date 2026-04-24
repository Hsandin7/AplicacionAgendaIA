import styles from './ProgressCard.module.css'

const PROGRESS = 75

function CircularProgress({ value }) {
  const radius = 26
  const stroke = 4
  const normalizedRadius = radius - stroke / 2
  const circumference = 2 * Math.PI * normalizedRadius
  const offset = circumference - (value / 100) * circumference

  return (
    <div className={styles.progressRing}>
      <svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${radius * 2} ${radius * 2}`}>
        {/* Background track */}
        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          fill="none"
          stroke="rgba(124, 111, 247, 0.2)"
          strokeWidth={stroke}
        />
        {/* Progress arc */}
        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          fill="none"
          stroke="#7C6FF7"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${radius} ${radius})`}
          className={styles.progressArc}
        />
      </svg>
      <span className={styles.progressLabel}>{value}%</span>
    </div>
  )
}

function ProgressCard() {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <p className={styles.title}>Tareas pendientes</p>
        <p className={styles.subtitle}>3 tareas</p>
      </div>
      <CircularProgress value={PROGRESS} />
    </div>
  )
}

export default ProgressCard
