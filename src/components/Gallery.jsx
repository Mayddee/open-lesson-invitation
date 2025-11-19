import { useEffect, useState } from "react"
import abayMain from "../assets/abai.png"
import abay1 from "../assets/abai1.jpg"
import abay2 from "../assets/abai2.jpg"
import abay3 from "../assets/abai3.jpg"
import abay4 from "../assets/abai4.jpg"
import abay5 from "../assets/abai5.jpg"


const slides = [
  { src: abayMain, alt: "Абай Кунанбаев" },
  { src: abay1, alt: "Абай" },
  { src: abay2, alt: "Абай" },
  { src: abay3, alt: "Абай" },
  { src: abay4, alt: "Абай Кунанбаев в Семипалатинской библиотеке" },
  { src: abay5, alt: "Мать Абай - Улжан" },
]

export default function Gallery() {
  const [index, setIndex] = useState(0)

  // авто-переключение каждые 4 секунды
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const goTo = (i) => setIndex(i)

  return (
    <section className="gallery fade-in">
      <h2>Визуальная галерея</h2>
      <p className="gallery-sub">
        Несколько тёплых кадров, связанных с образом Абая и его
        наследием.
      </p>

      <div className="slider">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className="slide" key={i}>
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>

        <div className="slider-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "dot-active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
