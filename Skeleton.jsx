export default function Skeleton({ width = '100%', height = 16, delay = 0, style }) {
  return (
    <div style={{
      position: 'relative', overflow: 'hidden',
      background: 'var(--bg-hover, rgba(0,0,0,.05))', borderRadius: 6,
      width, height, ...style,
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        transform: 'translate(-100%)',
        background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent)',
        animation: `fCeY 1.3s ease-in-out ${delay}s infinite`,
      }} />
    </div>
  )
}
