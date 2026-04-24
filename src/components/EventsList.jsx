import styles from './EventsList.module.css'

/* Calendar icon with color accent */
function CalendarIcon({ color }) {
  return (
    <div className={styles.iconWrapper} style={{ backgroundColor: `${color}18` }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke={color}>
        <rect x="3" y="4" width="18" height="18" rx="3" ry="3" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="14" x2="10" y2="14" />
        <line x1="12" y1="14" x2="16" y2="14" />
        <line x1="8" y1="18" x2="10" y2="18" />
      </svg>
    </div>
  )
}

const events = [
  {
    id: 1,
    name: 'Matemáticas',
    time: '10:00 - 11:30',
    location: 'Aula 2A',
    color: '#7C6FF7',
  },
  {
    id: 2,
    name: 'Economía',
    time: '12:00 - 13:30',
    location: 'Aula 1.1',
    color: '#4CAF82',
  },
  {
    id: 3,
    name: 'Estudio en grupo',
    time: '16:00 - 17:00',
    location: 'Biblioteca',
    color: '#F06565',
  },
]

function EventsList() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Próximos eventos</h2>
      <div className={`${styles.card} card`}>
        {events.map((event, index) => (
          <div key={event.id}>
            <div className={styles.eventItem}>
              <CalendarIcon color={event.color} />
              <div className={styles.eventInfo}>
                <p className={styles.eventName}>{event.name}</p>
                <p className={styles.eventTime}>{event.time}</p>
                <p className={styles.eventLocation}>{event.location}</p>
              </div>
            </div>
            {index < events.length - 1 && <div className={styles.divider} />}
          </div>
        ))}
      </div>
    </section>
  )
}

export default EventsList
