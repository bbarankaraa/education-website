import HeroImage from '../../assets/hero-image.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero container-fluid">
      <div className="blur">
      <div className="container d-flex justify-content-center items-center">
        <div className="hero-container row d-flex justify-content-center items-center">
          <div className="col-lg-6 hero-content d-flex flex-column justify-content-center gap-sm-5 gap-2 p-5">
            <div className="content d-flex justify-content-center gap-2 flex-column">
            <h1>İSTEDİĞİNİZ DİLDE 20 DAKİKADA</h1>
              <p>"Ben bugün çalışıyorum ama o çalışmıyor"</p>
              <h5>DEMEK İSTER MİSİNİZ ?</h5>
            </div>
              <a href="" className="hero-btn">ÜCRETSİZ DEMO DERS</a>
          </div>
          <div className='hero-image col-lg-6 d-lg-flex d-none justify-content-center items-center'>
            <img src={HeroImage} alt="Hero Image" />
          </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Hero