import "./about.css";
import students from "../../assets/students-pana.svg";
import vision from "../../assets/vision-pana.svg";
import mission from "../../assets/mission-rafiki.svg";
import education from "../../assets/education.svg";


const AboutPage = () => {
  return (
    <div>
      <h1 class="text-center mb-4 about-container ">Bizim Hikayemiz</h1>
      <section className="">
        <div className="container ">
          <div className="row p-5 align-items-center border border-top-0 border-danger rounded-bottom-5  ">
            <div className="col-md-4 mx-3 mb-4 ">
              <img
                src={education}
                width={600}
                alt=""
                className="py-5 mt-5 img-fluid rounded-pill"
              />
            </div>

            <div className="col-md-7 mb-5">
              <h1 className="display-6 fw-bold mb-3">
                Yılların Birikimi ve Tecrübesi
              </h1>
              <p className="lead">
                Ediz olarak, farklı yaş gruplarına ve seviyelere özel, etkili ve
                modern dil eğitimi çözümleri sunuyoruz. Amacımız,
                öğrencilerimize sadece bir dil öğretmek değil; aynı zamanda yeni
                bir kültürü, yeni bir bakış açısını ve global dünyada
                kendilerini özgüvenle ifade edebilmeleri için gereken altyapıyı
                kazandırmak.
              </p>
              <p>
                Alanında uzman eğitmen kadromuz, güncel eğitim yöntemlerimiz ve
                interaktif materyallerimizle, dil öğrenme sürecini daha keyifli
                ve kalıcı hale getiriyoruz. İster akademik, ister iş hayatı,
                ister günlük iletişim için olsun; her öğrenciye özel programlar
                geliştiriyor, kişisel hedeflerine ulaşmaları için onları
                destekliyoruz.
              </p>
              <ul className="checklist list-unstyled text-danger">
                <li>İngilizce Eğitimi</li>
                <li>Rusça Eğitimi</li>
                <li>İspanyolca Eğitimi</li>
                <li>Almanca Eğitimi</li>
              </ul>
            </div>
          </div>
          <div className="row my-5 border border-danger rounded-5 p-5">
            <div className="col-md-7 mt-5">
              <h1 className="display-6 fw-bold mb-3">Eğitime Yaklaşımımız</h1>
              <p className="lead">
                Her öğrencinin öğrenme yolculuğunun farklı olduğuna inanıyoruz.
                Bu nedenle dil eğitiminde tek tip çözümler yerine, bireysel
                ihtiyaçlara ve hedeflere göre şekillenen dinamik bir yaklaşım
                benimsiyoruz.
              </p>

              <p>
                Sadece teorik bilgi vermekle kalmıyor, öğrencilerimizin dili
                doğal bir akış içinde kullanabilmeleri için onları gerçek hayat
                senaryolarıyla destekliyoruz. Öğrenmenin sadece sınıfla sınırlı
                kalmadığına, her anın bir öğrenme fırsatı sunduğuna inanıyor ve
                bu anlayışla öğrencilerimize ilham veriyoruz. Hedefimiz;
                öğrencilerimizin dili öğrenmekten öte, o dili yaşayarak
                içselleştirmelerini sağlamak.
              </p>
              <ul className="checklist list-unstyled text-danger">
                <li>İletişim odaklı öğrenme</li>
                <li>Uygulamalı ve interaktif yöntemler</li>
                <li>Kültürel farkındalık geliştirme</li>
              </ul>
            </div>
            <div className="col-md-5 ">
              <img
                src={students}
                width={800}
                alt=""
                className="py-5 mt-5 img-fluid rounded-pill"
              />
            </div>
          </div>

          <div className="row my-5  border border-danger rounded-5 p-5">
            <div class="col-md-5 ">
              <img
                src={vision}
                width={700}
                alt=""
                className="img-fluid rounded-pill"
              />
            </div>
            <div className="col-md-7 mt-5">
              <h1 className="display-6 fw-bold mb-3">Vizyonumuz</h1>
              <p className="lead">
                Dil öğrenmenin, bireylerin dünyayı keşfetmelerine, yeni
                fırsatlara ulaşmalarına ve kültürler arasında köprüler
                kurmalarına olanak sağladığına inanıyoruz. Vizyonumuz; küresel
                ölçekte iletişim becerilerine sahip, özgüvenli bireyler
                yetiştiren, yenilikçi ve ilham veren bir dil eğitim merkezi
                olmaktır.
              </p>

              <p>
                Teknolojiyi, pedagojiyi ve kültürel zenginliği bir araya
                getirerek, öğrencilerimizin yalnızca bir dili öğrenmekle
                kalmayıp, dünya vatandaşları olarak gelişmelerini desteklemeyi
                hedefliyoruz. Geleceği şekillendiren bireylerin, güçlü bir dil
                altyapısıyla kendi hikâyelerini dünyaya anlatabilmelerine
                öncülük etmek istiyoruz.
              </p>
            </div>
          </div>

          <div className="row my-5  border border-danger rounded-top-5 p-5">
            <div className="col-md-6 mt-5">
              <h1 className="display-6 fw-bold mb-3">Misyonumuz</h1>
              <p className="lead">
                Dili, sadece kelimelerden ibaret bir iletişim aracı olarak
                değil; kültürleri, düşünce biçimlerini ve dünyayı anlama yolu
                olarak görüyoruz. Misyonumuz; bireylerin küresel dünyada
                kendilerini özgüvenle ifade edebilmeleri için gerekli dil
                becerilerini kazandırmak, farklılıkları kucaklayan bir öğrenme
                ortamı sunmak ve yaşam boyu öğrenmeye ilham vermektir.
              </p>

              <p>
                Modern eğitim yöntemlerini, deneyimli kadromuzun rehberliğinde
                her öğrencinin ihtiyacına uygun şekilde uyarlıyor; dil öğrenmeyi
                sadece bir hedef değil, aynı zamanda keyifli bir yolculuk haline
                getiriyoruz. Öğrencilerimizin sadece dili öğrenmelerini değil,
                öğrendikleri dili hayatlarının her alanında etkili bir şekilde
                kullanabilmelerini amaçlıyoruz.
              </p>
            </div>

            <div className="col-md-5">
              <img
                src={mission}
                width={700}
                alt=""
                className="img-fluid rounded-pill"
              />
            </div>
          </div>
        </div>
        <section class="red-bg">
          <div class="container">
            <div class="row g-4 justify-content-center">
              <div class="col-6 col-md-3">
                <div class="stat-card">
                  <div class="stat-number">1.5M+</div>
                  <div class="stat-label">Mezun</div>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="stat-card">
                  <div class="stat-number">150K+</div>
                  <div class="stat-label">Aktif Öğrenci</div>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="stat-card">
                  <div class="stat-number">27+</div>
                  <div class="stat-label">Tecrübe</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutPage;
