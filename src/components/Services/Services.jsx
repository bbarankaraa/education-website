import './Services.css'
import { FaBook } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";

const Services = () => {
  return (
    <div className='services container'>
        <div className="row py-5 d-flex align-items-center flex-lg-row flex-column gap-lg-0 gap-5">
            <div className="content col-sm-4 d-flex align-items-start flex-column gap-1 px-5">
                <FaBook size={36} className='mb-2' />
                <h3>Özel Metod</h3>
                <p>Özel metodumuz sayesinde istediğiniz dili çok kısa bir sürede öğreneceksiniz!</p>
                <a href="">İletişime Geç</a>
            </div>
            <div className="content col-sm-4 d-flex align-items-start flex-column gap-1 px-5">
                <MdEmojiEmotions size={36} className='mb-2' />
                <h3>100% Olumlu Dönüş</h3>
                <p>Şuana kadarki tüm öğrencilerimizden aldığımız dönütler pozitif</p>
                <a href="">İletişime Geç</a>
            </div>
            <div className="content col-sm-4 d-flex align-items-start flex-column gap-1 px-5">
                <FaBook size={36} className='mb-2' />
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, odio?</p>
                <a href="">İletişime Geç</a>
            </div>
          
        </div>
    </div>
  )
}

export default Services