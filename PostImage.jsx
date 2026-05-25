export default function PostImage({ src, alt, gallery, style }) {
  if (gallery) {
    return (
      <div style={{
        display: 'flex', gap: 8, overflowX: 'auto', overflowY: 'hidden',
        scrollbarWidth: 'none', maxHeight: 300, ...style,
      }}>
        {gallery.map((img, i) => (
          <img key={i} src={img} alt={alt || ''} style={{
            flexShrink: 0, height: 300, width: 'auto', objectFit: 'cover',
            borderRadius: 12, userSelect: 'none',
          }} />
        ))}
      </div>
    )
  }

  return (
    <div style={{ display: 'block', maxWidth: '100%', maxHeight: 300, borderRadius: 12, overflow: 'hidden', ...style }}>
      <img src={src} alt={alt} style={{ display: 'block', width: '100%', height: '100%', maxHeight: 300, objectFit: 'cover', userSelect: 'none' }} />
    </div>
  )
}
