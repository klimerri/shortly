import './App.scss'
import Header from './components/Header/Header'
import main_photo from '../images/illustration-working.svg'
import LinkInput from './components/LinkInput/LinkInput'
import ThreeCards from './components/ThreeCards/ThreeCards'
import Footer from './components/Footer/Footer'


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
      <div className='main__gray main__container'>
        <div className='main__gray__link-input'><LinkInput /></div>
        <div className='main__gray-info'>
          <span className='main__gray-info__header'>Advanced Statistics</span>
          <p className='main__gray-info__text'>Track how your links are perfoming 
            across the web with out advanced statistics dashboard.
          </p>
        </div>
        <ThreeCards />
      </div>
      <div className='main__boost main__container'>
        <span className='main__boost-header'>Boost your links today</span>
        <a className='main__boost-link'>Get Started</a>
      </div>
      <Footer />
    </div>
  )
}

export default App
