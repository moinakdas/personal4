import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img id="background-grid"></img>
      <div id="graphics-container">
        <img id="headshot-1" class="headshot-images"></img>
        <img id="headshot-2" class="headshot-images"></img>
        <div class="header-box" id="header-box-1"></div>
        <div class="header-box" id="header-box-2"></div>
        <div class="header-box" id="header-box-3"></div>
        <div class="note-container" id="note-1">
          <div class="icon-container">
            <img class="plus-icon"></img>
          </div>
          <div class="note-description">Field Engineer @ TCE</div>
        </div>
        <div class="note-container" id="note-2">
          <div class="icon-container">
            <img class="plus-icon"></img>
          </div>
          <div class="note-description">
            Seven years of professional experience
          </div>
        </div>
        <div class="note-container" id="note-3">
          <div class="icon-container">
            <img class="plus-icon"></img>
          </div>
          <div class="note-description">
            Undergraduate Researcher @<br></br> Interacting Robotics Systems <br></br> Laboratory
          </div>
        </div>
        <div class="note-container" id="note-4">
          <div class="icon-container">
            <img class="plus-icon"></img>
          </div>
          <div class="note-description">
          Undergraduate Researcher @<br></br> Stony Brook Dept. of Computer <br></br> Science
          </div>
        </div>
      </div>
      <div id = "title-container">
        
      </div>
    </div>
  );
}

export default App;
