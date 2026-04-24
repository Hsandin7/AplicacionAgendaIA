import { useState } from 'react'
import styles from './TasksList.module.css'

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

const initialTasks = [
  { id: 1, text: 'Leer capítulo 4 de Marketing', done: false },
  { id: 2, text: 'Resumen tema 2 - Economía', done: false },
  { id: 3, text: 'Ejercicios Matemáticos', done: false },
]

function TasksList() {
  const [tasks, setTasks] = useState(initialTasks)

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(t => t.id === id ? { ...t, done: !t.done } : t)
    )
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Tareas</h2>
      <div className={`${styles.card} card`}>
        {tasks.map((task, index) => (
          <div key={task.id}>
            <div className={styles.taskItem}>
              <button
                className={`${styles.checkbox} ${task.done ? styles.checkboxChecked : ''}`}
                onClick={() => toggleTask(task.id)}
                aria-label={`Marcar tarea: ${task.text}`}
                id={`task-checkbox-${task.id}`}
              >
                {task.done && (
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <polyline points="2 6 5 9 10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
              <span className={`${styles.taskText} ${task.done ? styles.taskDone : ''}`}>
                {task.text}
              </span>
              <span className={styles.chevron}>
                <ChevronRight />
              </span>
            </div>
            {index < tasks.length - 1 && <div className={styles.divider} />}
          </div>
        ))}

        <div className={styles.divider} />

        <button className={styles.newTaskBtn} id="new-task-btn">
          <span className={styles.plusIcon}>+</span>
          Nueva tarea
        </button>
      </div>
    </section>
  )
}

export default TasksList
