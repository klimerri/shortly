import './App.scss'
import Header from './components/Header/Header'
import main_photo from '../images/illustration-working.svg'
import LinkInput from './components/LinkInput/LinkInput'

function App() {

  return (
    <div className='main__container'>
      <Header />
      <div className='main__info'>
        <div className='main__info-left'>
          <span className='main__info-header'>More than just shorter links</span>
          <span className='main__info-subtitle'>Build you brand's recognition and get
            detailed insights on how your links are perfoming
          </span>
          <a href="#" className='main__info-link'>Get started!</a>
        </div>
        <img src={main_photo} className='main__info-photo'></img>
      </div>
      <div className='main__gray'>
        <LinkInput />
      </div>
    </div>
  )
}

export default App
