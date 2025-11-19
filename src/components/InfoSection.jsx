export default function InfoSection() {
  return (
    <section id="info-section" className="info slide-up">
      <h2>Информация о мероприятии</h2>

      <div className="info-grid">
        <div className="info-card">
          <span className="info-label">Дата</span>
          <span className="info-value">Среда, 20 ноября 2025 года</span>
        </div>

        <div className="info-card">
          <span className="info-label">Время</span>
          <span className="info-value">17:00</span>
        </div>

        <div className="info-card">
          <span className="info-label">Место</span>
          <span className="info-value">
            Школа-гимназия №53, 11 кабинет
          </span>
        </div>

        <div className="info-card">
          <span className="info-label">Класс</span>
          <span className="info-value">4 «Ә»</span>
        </div>

        <div className="info-card">
          <span className="info-label">Учитель</span>
          <span className="info-value">
            Алтаева Канат Аскаровна
          </span>
        </div>

        <div className="info-card">
          <span className="info-label">Тема</span>
          <span className="info-value">
            "Заветы великого Абая"
          </span>
        </div>
      </div>
    </section>
  )
}
