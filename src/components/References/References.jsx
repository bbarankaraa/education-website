import React from 'react'
import './References.css'
import video1 from '../../assets/video1.jpeg'
const References = () => {
    return (
        <div className='references container-fluid py-5'>
            <div className="container">
                    <h1 className='text-white mb-5 text-center'>ÖĞRENCİLERİMİZİN DENEYİMLERİ</h1>
                <div className="row text-center d-flex flex-column flex-lg-row justify-content-center align-items-center gap-lg-0 gap-5">
                    <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
                        <div className='position-relative'>
                        <img src={video1} alt="Video 1" />
                        <div className='play-btn'>
                            <img src="https://cdn-icons-png.flaticon.com/512/10693/10693129.png" alt="play-btn" />
                        </div>
                        </div>
                        <div className="content d-flex flex-column gap-1 mt-3">
                        <h3>Sedef Çepni | Hemşire</h3>
                        <span>"Demo dersinden sonra kararımı kesin olarak değiştirdim ve özel derslere hemen başladık."</span>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
                    <div className='position-relative'>
                        <img src={video1} alt="Video 1" />
                        <div className='play-btn'>
                            <img src="https://cdn-icons-png.flaticon.com/512/10693/10693129.png" alt="play-btn" />
                        </div>
                        </div>
                        <div className="content d-flex flex-column gap-1 mt-3">
                        <h3>Mahmut Keder</h3>
                        <span>"Yoğun bir tempoyla çalışıyorsanız ve İngilizceye vakit ayıramıyorsanız size tavsiye ederim."</span>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex flex-column align-items-center ">
                    <div className='position-relative'>
                        <img src={video1} alt="Video 1" />
                        <div className='play-btn'>
                            <img src="https://cdn-icons-png.flaticon.com/512/10693/10693129.png" alt="play-btn" />
                        </div>
                        </div>
                        <div className="content d-flex flex-column gap-1 mt-3">
                        <h3>Elif Yılmaz</h3>
                        <span>"Özel metod sayesinde normalden çok daha hızlı bir şekilde dil öğrenmeye başladım."</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default References