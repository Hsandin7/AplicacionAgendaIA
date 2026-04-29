import { useState, useRef, useEffect } from 'react'
import BottomNav from '../components/BottomNav'
import styles from './IA.module.css'

/* ─── Static demo conversation ─────────────────────────── */
const DEMO_USER_MSG = 'Explícame este concepto: elasticidad precio de la demanda.'

const DEMO_AI_RESPONSE = [
  {
    id: 'p1',
    text: (
      <>
        <strong>La elasticidad precio de la demanda</strong> mide cómo cambia la cantidad
        demandada de un bien cuando varía su precio. Es un indicador clave en microeconomía
        para entender el comportamiento del consumidor.
      </>
    ),
  },
  {
    id: 'p2',
    text: (
      <>
        Si la elasticidad es <strong>mayor que 1</strong>, la demanda es <em>elástica</em>:
        los consumidores son muy sensibles al precio y cambian significativamente su cantidad
        demandada ante pequeñas variaciones.
      </>
    ),
  },
  {
    id: 'p3',
    text: (
      <>
        Si es <strong>menor que 1</strong>, es <em>inelástica</em>: los consumidores no
        cambian mucho su cantidad demandada aunque el precio varíe bastante.
      </>
    ),
  },
]

const SOURCES = [
  { id: 's1', type: 'pdf',  name: 'Apuntes Economía.pdf',       page: 'Pág. 34'  },
  { id: 's2', type: 'book', name: 'Libro Microeconomía',         page: 'Pág. 112' },
  { id: 's3', type: 'slide',name: 'Clase 15 – Demanda y oferta', page: null       },
]

/* ─── SVG icons ─────────────────────────────────────────── */
const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <line x1="3" y1="7"  x2="21" y2="7"  />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="17" x2="21" y2="17" />
  </svg>
)

const InfoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8"  x2="12.01" y2="8" />
  </svg>
)

const AiLogoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4" />
    <circle cx="4" cy="20" r="2" />
  </svg>
)

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" fill="white" />
  </svg>
)

const PdfIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D94F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="16" y2="17" />
  </svg>
)

const BookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3A9D6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
)

const SlideIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3A6FC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
)

const thumbUpPath  = 'M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z'
const thumbDownPath = 'M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z'

function ThumbIcon({ up }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={up ? thumbUpPath : thumbDownPath} />
    </svg>
  )
}

const sourceIconMap = { pdf: PdfIcon, book: BookIcon, slide: SlideIcon }
const sourceTypeClass = { pdf: styles.pdf, book: styles.book, slide: styles.slide }

/* ─── Component ─────────────────────────────────────────── */
function IA() {
  const [inputVal, setInputVal]     = useState('')
  const [messages, setMessages]     = useState([])
  const [thinking, setThinking]     = useState(false)
  const [feedback, setFeedback]     = useState(null)   // 'like' | 'dislike' | null
  const [demoShown, setDemoShown]   = useState(false)
  const chatEndRef = useRef(null)

  /* Scroll to bottom whenever messages change */
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, thinking])

  /* Show demo on first render after a short delay */
  useEffect(() => {
    const t1 = setTimeout(() => {
      setMessages([{ role: 'user', id: 'demo-user', text: DEMO_USER_MSG }])
      setThinking(true)
    }, 400)

    const t2 = setTimeout(() => {
      setThinking(false)
      setMessages(prev => [
        ...prev,
        { role: 'ai', id: 'demo-ai', paragraphs: DEMO_AI_RESPONSE, showSources: true },
      ])
      setDemoShown(true)
    }, 1800)

    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  /* Send a new message */
  const handleSend = () => {
    const text = inputVal.trim()
    if (!text) return

    setInputVal('')
    const userId = `u-${Date.now()}`
    const aiId   = `a-${Date.now()}`

    setMessages(prev => [...prev, { role: 'user', id: userId, text }])
    setThinking(true)

    setTimeout(() => {
      setThinking(false)
      setMessages(prev => [
        ...prev,
        {
          role: 'ai',
          id: aiId,
          paragraphs: [{ id: 'r1', text: <>Gracias por tu pregunta. Estoy procesando la información de tus apuntes para darte la mejor respuesta posible. <strong>¡Sigue estudiando!</strong></> }],
          showSources: false,
        },
      ])
    }, 1600)
  }

  const handleKey = e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() } }

  return (
    <div className="page-container">

      {/* ── Header ── */}
      <header className={styles.header}>
        <button className={styles.headerBtn} aria-label="Abrir menú" id="ia-menu-btn">
          <MenuIcon />
        </button>
        <div className={styles.headerTitleWrap}>
          <h1 className={styles.headerTitle}>IA – Asistente</h1>
          <span className={styles.headerSubtitle}>Powered by Agenda IA</span>
        </div>
        <button className={styles.headerBtn} aria-label="Información" id="ia-info-btn">
          <InfoIcon />
        </button>
      </header>

      {/* ── Chat scroll area ── */}
      <div className={styles.chatArea}>
        {messages.map(msg => {
          if (msg.role === 'user') {
            return (
              <div key={msg.id} className={styles.userBubble}>
                {msg.text}
              </div>
            )
          }

          /* AI message */
          return (
            <div key={msg.id} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div className={styles.aiCard}>
                <div className={styles.aiCardHeader}>
                  <div className={styles.aiAvatar}>
                    <AiLogoIcon />
                  </div>
                  <span className={styles.aiName}>Asistente IA</span>
                </div>

                <div className={styles.aiText}>
                  {msg.paragraphs.map(p => (
                    <p key={p.id}>{p.text}</p>
                  ))}
                </div>

                {/* Feedback */}
                <div className={styles.feedbackRow}>
                  <span className={styles.feedbackLabel}>¿Fue útil?</span>
                  <button
                    id="ia-feedback-like"
                    className={`${styles.feedbackBtn} ${feedback === 'like' ? styles.liked : ''}`}
                    aria-label="Me gusta"
                    onClick={() => setFeedback(f => f === 'like' ? null : 'like')}
                  >
                    <ThumbIcon up />
                  </button>
                  <button
                    id="ia-feedback-dislike"
                    className={`${styles.feedbackBtn} ${feedback === 'dislike' ? styles.disliked : ''}`}
                    aria-label="No me gusta"
                    onClick={() => setFeedback(f => f === 'dislike' ? null : 'dislike')}
                  >
                    <ThumbIcon up={false} />
                  </button>
                </div>
              </div>

              {/* Sources */}
              {msg.showSources && (
                <div className={styles.sourcesCard}>
                  <p className={styles.sourcesTitle}>Fuentes utilizadas:</p>
                  {SOURCES.map(src => {
                    const Icon = sourceIconMap[src.type]
                    return (
                      <div key={src.id} className={styles.sourceItem} role="listitem">
                        <div className={`${styles.sourceIconWrap} ${sourceTypeClass[src.type]}`}>
                          <Icon />
                        </div>
                        <span className={styles.sourceName}>{src.name}</span>
                        {src.page && <span className={styles.sourcePage}>{src.page}</span>}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}

        {/* Thinking indicator */}
        {thinking && (
          <div className={styles.aiCard} style={{ width: 'fit-content', padding: '14px 18px' }}>
            <div className={styles.thinkingDots}>
              <span /><span /><span />
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* ── Input bar ── */}
      <div className={styles.inputBar}>
        <input
          id="ia-input"
          type="text"
          className={styles.inputField}
          placeholder="Pregunta cualquier cosa…"
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          onKeyDown={handleKey}
          aria-label="Escribe tu pregunta"
        />
        <button
          id="ia-send-btn"
          className={styles.sendBtn}
          aria-label="Enviar mensaje"
          onClick={handleSend}
          disabled={!inputVal.trim() || thinking}
        >
          <SendIcon />
        </button>
      </div>

      <BottomNav />
    </div>
  )
}

export default IA
