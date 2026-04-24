import Header from '../components/Header'
import ProgressCard from '../components/ProgressCard'
import EventsList from '../components/EventsList'
import TasksList from '../components/TasksList'
import BottomNav from '../components/BottomNav'
import styles from './Home.module.css'

function Home() {
  return (
    <div className="page-container">
      <div className="page-scroll">
        <Header />
        <main className={styles.main}>
          <ProgressCard />
          <EventsList />
          <TasksList />
          <div style={{ height: '16px' }} />
        </main>
      </div>
      <BottomNav />
    </div>
  )
}

export default Home
