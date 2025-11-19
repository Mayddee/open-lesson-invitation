import { useEffect, useRef } from "react"

export default function BackgroundMusic() {
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Пробуем сразу проиграть
    const tryPlay = () => {
      audio.play().catch(() => {})
    }

    // 1. Попытка моментального запуска
    tryPlay()

    // 2. Разрешение после клика (iPhone, Android, Chrome, Safari)
    const unlock = () => {
      tryPlay()
      window.removeEventListener("pointerdown", unlock)
      window.removeEventListener("touchstart", unlock)
      window.removeEventListener("click", unlock)
    }

    window.addEventListener("pointerdown", unlock)
    window.addEventListener("touchstart", unlock)
    window.addEventListener("click", unlock)

    return () => {
      window.removeEventListener("pointerdown", unlock)
      window.removeEventListener("touchstart", unlock)
      window.removeEventListener("click", unlock)
    }
  }, [])

  return (
    <audio
      ref={audioRef}
      src="/kui.mp3"
      loop
      preload="auto"
      style={{ display: "none" }}
    />
  )
}