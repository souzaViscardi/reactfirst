import reactImage from '../../assets/react-core-concepts.png'
import './Header.css'
let reactDescriptions = ['Core', 'Crucial', 'Fundamental']
let max = 2

function Header() {
    let getRandomInt = ()=>{
        return Math.floor(Math.random() * (max+1))
      }
    let description = reactDescriptions[getRandomInt()]
    return (
      
      <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} Fundamental React concepts you will need for almost any app you are going to build!
        </p>
      </header>
    );
  }
  export default Header