import './css/App.css'
import headerImg from './assets/headerImg.png';

function App() {

  return (
    <div className="App">
      <img src={headerImg} alt="naruto image" id="header-img"/>
      <main>
        <h1>Aula Grátis</h1>
        <div className="iframe-wrapper">
          <img className="ratio" src="http://placehold.it/16x9"/>
          <iframe src="https://www.youtube.com/embed/ebShOVYaeHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen" 
          msallowfullscreen="msallowfullscreen" 
          oallowfullscreen="oallowfullscreen" 
          webkitallowfullscreen="webkitallowfullscreen"></iframe>
        </div>
        <a href="https://hotm.art/ZpDwNTK" target="_blank">
          <button>Adquirir acesso completo</button>
        </a>
      </main>
    </div>
  )
}


// width="560" height="315"
// https://mega.nz/file/vgx2ELyC#8-BW69BkK349KoPBvUQ_CMVlEyc5k4CFv7QzU2dPnbo

export default App
