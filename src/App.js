import React from 'react';
import './App.css';
import Comment from './components/Comment'
import CommentForm from './components/CommentForm'

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
