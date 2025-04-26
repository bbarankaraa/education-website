import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer class="bg-danger text-white pt-5 pb-3 fixed-bottom ">
              <div class="container ">
                <div class="row ">
                  <div class="col-md-3 mb-4 w-25 ">
                    <h5>Ediz | Akademi</h5>
                      <p class="">Ediz Akademi, dil eğitiminde  uzman kadrosu ve modern öğretim yöntemleriyle, her yaştan öğrenciye başarı odaklı eğitim sunar. Hedefimiz, dünya dillerini sevdirerek öğretmek.</p>
                  </div>
                  <div class="col-md-3 mb-4 ">
                    <h5 class="margin-left" >Bağlantılar</h5>
                    <ul class="list-unstyled  ">
                      <li><a href="#" class="margin-left">Ana Sayfa</a></li>
                      <li><a href="#" class="margin-left">Hakkımızda</a></li>
                      <li><a href="#" class="margin-left">Hizmetler</a></li>
                      <li><a href="#" class="margin-left ">İletişim</a></li>
                    </ul>
                  </div>
                  <div class="col-md-3 mb-4 ">
                  <h5>Eğitimler</h5>
                    <ul class="list-unstyled">
                      <li><a href="#" class="">İngilizce Eğitimi</a></li>
                      <li><a href="#" class="">Rusça Eğitimi</a></li>
                      <li><a href="#" class="">İspanyolca Eğitimi</a></li>
                      <li><a href="#" class="">Almanca Eğitimi</a></li>

                    </ul>
                  </div>
                  <div class="col-md-3 mb-4">
                  <h5>İletişim</h5>
                    <ul class="list-unstyled">
                      <li><i class="bi bi-telephone"></i> +90 555 555 55 55</li>
                      <li><i class="bi bi-envelope"></i> info@sirket.com</li>
                      <li><i class="bi bi-geo-alt"></i> Kocaeli, Türkiye</li>
                    </ul>
                    <h5>Bizi Takip Edin</h5>
                    <a href="#" class="text-white me-3"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="text-white me-3"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="text-white me-3"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="text-white"><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="text-center mt-4">
                  <small>© 2025 Ediz Akademi. Tüm Hakları Saklıdır.</small>
                </div>
              </div>
        </footer>

    </div>
  )
}

export default Footer