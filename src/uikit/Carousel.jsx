import { useRef, useState, useCallback } from 'react'

export default function Carousel({ children, style }) {
  const ref = useRef()
  const [dragging, setDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const onMouseDown = (e) => {
    setDragging(true)
    setStartX(e.pageX - ref.current.offsetLeft)
    setScrollLeft(ref.current.scrollLeft)
  }
  const onMouseUp = () => setDragging(false)
  const onMouseLeave = () => setDragging(false)
  const onMouseMove = (e) => {
    if (!dragging) return
    e.preventDefault()
    const x = e.pageX - ref.current.offsetLeft
    ref.current.scrollLeft = scrollLeft - (x - startX) * 1.5
  }

  return (
    <div ref={ref}
      onMouseDown={onMouseDown} onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave} onMouseMove={onMouseMove}
      style={{
        display: 'flex', gap: 0, overflowX: 'auto', overflowY: 'hidden',
        scrollbarWidth: 'none', cursor: dragging ? 'grabbing' : 'grab',
        maxHeight: 300, ...style,
      }}>
      {children}
    </div>
  )
}

export function CarouselItem({ src, alt, overlap, style }) {
  return (
    <div style={{ position: 'relative', flexShrink: 0, ...(overlap ? { marginLeft: -50 } : {}), ...style }}>
      <img src={src} alt={alt} style={{
        height: 200, width: 'auto', objectFit: 'cover', borderRadius: 12,
        userSelect: 'none', flexShrink: 0,
      }} />
    </div>
  )
}
