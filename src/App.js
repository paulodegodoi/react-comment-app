import React from 'react';
import './App.css';
import Comment from './components/Comment'
import CommentForm from './components/CommentForm'
import Swal from "sweetalert2"

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

    Swal.fire('Comentário adicionado!', '', 'success')

  }

  onFieldChanged = (event) => {

    const newCommentForm = this.state.form
    newCommentForm[event.target.name] = event.target.value

    this.setState({
      form: newCommentForm
    })
  }

  deleteCommentAlert = (comment) => {

    Swal.fire({
      title: 'Você quer mesmo excluir este comentário?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Sim, eu tenho certeza.',
      denyButtonText: `Não, eu mudei de ideia.`,
      icon:'question'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.deleteComment(comment)
        Swal.fire('O comentário foi excluído!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Não se preocupe, nada foi excluído.', '', 'info')
      }
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
                this.deleteCommentAlert(comments)
              }}
            />
          )
        })}
        <CommentForm
          onAddComment = {this.addComment}
          onFieldChanged = {this.onFieldChanged}
          form = {this.state.form}
        />
      </div>
    );
  }
}

export default App;
