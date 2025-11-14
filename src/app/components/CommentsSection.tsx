const commentsSectionStyles: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '1.5rem',
  height: '100%',
  overflowY: 'auto',
  borderLeft: '1px solid #eaeaea'
};

const commentStyles = {
  backgroundColor: '#f8f9fa',
  padding: '0.75rem 1rem',
  marginBottom: '0.75rem',
  borderRadius: '6px',
  borderLeft: '3px solid #007bff'
};

const comments = [
  { id: 1, text: 'Revisar el patrón de costura en el dobladillo', author: 'Diseñador', time: 'Hace 2 horas' },
  { id: 2, text: 'Confirmar tono exacto del azul', author: 'Producción', time: 'Ayer' },
  { id: 3, text: 'Aprobado para muestra', author: 'Control de Calidad', time: '15/11/2023' }
];

export default function CommentsSection() {
  return (
    <div style={commentsSectionStyles}>
      <h3 style={{ 
        margin: '0 0 1.5rem 0', 
        color: '#333',
        fontSize: '1.1rem',
        fontWeight: 600,
        paddingBottom: '0.75rem',
        borderBottom: '1px solid #eee'
      }}>
        Especificaciones y Notas
      </h3>
      
      <div>
        {comments.map(comment => (
          <div key={comment.id} style={commentStyles}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginBottom: '0.5rem',
              fontSize: '0.85rem'
            }}>
              <span style={{ fontWeight: 600, color: '#007bff' }}>{comment.author}</span>
              <span style={{ color: '#6c757d', fontSize: '0.8rem' }}>{comment.time}</span>
            </div>
            <div style={{ color: '#495057' }}>{comment.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
