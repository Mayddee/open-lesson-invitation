import abay from "../assets/abai.png"

export default function HeroSection() {
  const scrollToInfo = () => {
    const el = document.getElementById("info-section")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="hero fade-in">
      <div className="hero-text">

        <p className="hero-title">Приглашение на Открытый урок</p>
        <h1 className="hero-title">Заветы Великого Абая</h1>
        <p className="hero-sub">
          Открытый урок по русскому языку и литературе для 4«Ә» класса
        </p>
        <p className="hero-tagline">
          Мудрость, слово, вдохновение — на одном уроке.
        </p>
        <button className="hero-btn" onClick={scrollToInfo}>
          Узнать подробнее ↓
        </button>
      </div>

      <div className="hero-image-wrapper">
        <img
          className="hero-image"
          src={abay}
          alt="Абай Кунанбаев"
        />
        <div className="hero-glow" />
      </div>
    </section>
  )
}
