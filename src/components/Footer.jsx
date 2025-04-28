import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer className="bg-danger text-white pt-5 pb-3">
              <div className="container ">
                <div className="row ">
                  <div className="col-md-3 mb-4 w-25 ">
                    <h5>Ediz | Akademi</h5>
                      <p className="">Ediz Akademi, dil eğitiminde  uzman kadrosu ve modern öğretim yöntemleriyle, her yaştan öğrenciye başarı odaklı eğitim sunar. Hedefimiz, dünya dillerini sevdirerek öğretmek.</p>
                  </div>
                  <div className="col-md-3 mb-4 ">
                    <h5 className="margin-left" >Bağlantılar</h5>
                    <ul className="list-unstyled  ">
                      <li><a href="#" className="margin-left">Ana Sayfa</a></li>
                      <li><a href="#" className="margin-left">Hakkımızda</a></li>
                      <li><a href="#" className="margin-left">Hizmetler</a></li>
                      <li><a href="#" className="margin-left ">İletişim</a></li>
                    </ul>
                  </div>
                  <div className="col-md-3 mb-4 ">
                  <h5>Eğitimler</h5>
                    <ul className="list-unstyled">
                      <li><a href="#" className="">İngilizce Eğitimi</a></li>
                      <li><a href="#" className="">Rusça Eğitimi</a></li>
                      <li><a href="#" className="">İspanyolca Eğitimi</a></li>
                      <li><a href="#" className="">Almanca Eğitimi</a></li>

                    </ul>
                  </div>
                  <div className="col-md-3 mb-4">
                  <h5>İletişim</h5>
                    <ul className="list-unstyled">
                      <li><i className="bi bi-telephone"></i> +90 555 555 55 55</li>
                      <li><i className="bi bi-envelope"></i> info@sirket.com</li>
                      <li><i className="bi bi-geo-alt"></i> Kocaeli, Türkiye</li>
                    </ul>
                    <h5>Bizi Takip Edin</h5>
                    <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <small>© 2025 Ediz Akademi. Tüm Hakları Saklıdır.</small>
                </div>
              </div>
        </footer>
    </div>
  )
}

export default Footer