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
    ]
  }

  addComment = () => {
    const newComment = {
      name: "Felipe Melo",
      email: "felipe@gmail.com",
      date: new Date(),
      message: "Estou gostando do conteúdo!"
    }

    this.setState({
      comments: [...this.state.comments, newComment]
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
            />
          )
        })}
        <button onClick={this.addComment}>Adicionar Comentário</button>
      </div>
    );
  }
}

export default App;
