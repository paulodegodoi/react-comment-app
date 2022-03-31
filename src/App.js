import React from 'react';
import './App.css';
import Comment from './components/Comment'

class App extends React.Component {

  state = {
    comments: [
      {
        name: "Jonathan Melo",
        email: "desenvolvedor.jonathan@gmail.com",
        date: new Date(),
        message: "Ensinando ReactJS"
      },
      {
        name: "Paulo Godoi",
        email: "paulogodoi.sp@gmail.com",
        date: new Date(),
        message: "Aplicando React na prática"
      }
    ],
    form: {
      name: '',
      email: '',
      message: ''
    }
  }

  addComment = (event) => {

    event.preventDefault()

    const newComment = { ...this.state.form, date: new Date() }

    this.setState({
      comments: [...this.state.comments, newComment],
      form: {
        name: "",
        email: "",
        message: ""
      }
    })
  }

  onFieldChanged = (event) => {

    const newCommentForm = this.state.form
    newCommentForm[event.target.name] = event.target.value

    this.setState({
      form: newCommentForm
    })
  }

  deleteComment = (comment) => {
    const filteredList = this.state.comments.filter((commentFilter)=>{
      return comment !== commentFilter
    })

    this.setState({
      comments: filteredList
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My Comment App</h1>
        {this.state.comments.map((comments, index) => {
          return (
            <Comment
              key={index}
              name={comments.name}
              email={comments.email}
              date={comments.date}
              message={comments.message}
              onDeleteComment={()=>{
                this.deleteComment(comments)
              }}
            />
          )
        })}
        <form onSubmit={this.addComment}>
          <h2>Add a comment</h2>
          <div>
            <input
              onChange={this.onFieldChanged}
              value={this.state.form.name}
              type="text"
              name="name"
              placeholder="Digite o seu nome"
              required="required"
            />
          </div>
          <div>
            <input
              onChange={this.onFieldChanged}
              value={this.state.form.email}
              type="email"
              name="email"
              placeholder="Digite o seu email"
              required="required"
            />
          </div>
          <div>
            <textarea
              onChange={this.onFieldChanged}
              name="message"
              rows="4"
              placeholder="Digite o seu comentário..."
              value={this.state.form.message}
              required="required"
            />
          </div>
          <button type="submit">Adicionar Comentário</button>
        </form>
      </div>
    );
  }
}

export default App;
