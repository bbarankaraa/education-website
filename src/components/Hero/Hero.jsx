import HeroImage from '../../assets/hero-image.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero container-fluid">
      <div className="blur">
      <div className="container d-flex justify-content-center items-center">
        <div className="hero-container row d-flex justify-content-center items-center">
          <div className="col-md-6 hero-content d-flex flex-column justify-content-center gap-sm-5 gap-2 p-5">
            <div className="content d-flex justify-content-center gap-2 flex-column">
            <h1>İSTEDİĞİNİZ DİLDE 20 DAKİKADA</h1>
              <h3>"Ben bugün çalışıyorum ama o çalışmıyor"</h3>
              <h2>DEMEK İSTER MİSİNİZ ?</h2>
            </div>
              <a href="" className="hero-btn">ÜCRETSİZ DEMO DERS</a>
          </div>
          <div className='hero-image col-md-6 d-md-flex d-none justify-content-center items-center py-5'>
            <img src={HeroImage} alt="Hero Image" />
          </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Hero