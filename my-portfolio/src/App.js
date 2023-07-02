
import './App.css';
import { Carousel } from 'react-responsive-carousel'

function App() {
  return (
    <div className="App">
        <header class="header">
            <h1>Welcome to my portfolio</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
            </nav>
        </header>

        <div id='home' class="container">
            <div className='home'>
                <h2>hello</h2>
            </div>
            <div id='about' className='aboutme'>

            </div>
            <div id='projects' className='projects'>
              <Carousel>
              <div className='project1'>
              <h3>Project 1</h3>
            </div>
            <div className='project2'>
              <h3>Project 2</h3>
            </div>
            <div className='project3'>
              <h3>Project 3</h3>
            </div>
              </Carousel>

            </div>
            <div id='contacts' className='contacts'>

            </div>

        </div>
    </div>
  );
}

export default App;
