import './style.css'

const CommentForm = (props) => {
    
    const { onAddComment, onFieldChanged, form } = props

    return (
        <form className="comment-form" onSubmit={onAddComment}>
          <h2>Add a comment</h2>
          <div>
            <input
              onChange={onFieldChanged}
              value={form.name}
              type="text"
              name="name"
              placeholder="Digite o seu nome"
              required="required"
            />
          </div>
          <div>
            <input
              onChange={onFieldChanged}
              value={form.email}
              type="email"
              name="email"
              placeholder="Digite o seu email"
              required="required"
            />
          </div>
          <div>
            <textarea
              onChange={onFieldChanged}
              name="message"
              rows="4"
              placeholder="Digite o seu comentário..."
              value={form.message}
              required="required"
            />
          </div>
          <button type="submit">Adicionar Comentário</button>
        </form>
    )
}

export default CommentForm