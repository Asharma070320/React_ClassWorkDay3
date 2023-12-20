import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import Main2 from './Component/Main2';
import Cards from './Component/Cards';
// import Footer from './Component/Footer';


function App() {
  return (
    <div class="container">

      <Navbar/>      

      <Main />

      <Main2  mainTxt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis." mainPara="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta." mainBtn="Get in Touch"/>

      <Cards />
      

    </div>
  );
}

export default App;
