import './App.css';
import Comment from './components/Comment'

function App() {
  return (
    <div className="App">
      <h1>My Comment App</h1>
      <Comment
        name="Jonathan Melo"
        email="desenvolvedor.jonathan@gmail.com"
        date={new Date()}
        message="Ensinando ReactJS"
      />
      <Comment
        name="Paulo Godoi"
        email="paulogodoi.sp@gmail.com"
        date={new Date()}
        message="Aplicando React na prática"
      />
    </div>
  );
}

export default App;
