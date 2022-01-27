import './App.css';
import MyHeader from './header.js'
import MyFooter from './footer.js'

const aboutMe = { name : "Matt", linkedIn : "https://linkedin.com/in/mattkbrat"}

function App() {
  return (
    <div className="App">
      <MyHeader about={aboutMe}/>
      <MyFooter myName={aboutMe.name} />
    </div>
  );
}

export default App;
