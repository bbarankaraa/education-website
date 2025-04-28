import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-sm">
          <div className="container-sm">
            <Link to="/" className="navbar-brand fw-">Ediz | Akademi</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarText">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 " >
                <li className="nav-item ">
                  <Link to="/" className="nav-link mx-3 " aria-current="page">Anasayfa</Link>
                </li>
                <li className="nav-item ">
                  <Link to="/hakkimizda" className="nav-link mx-3">Hakkımızda</Link>
                </li>
                  <li className="nav-item dropdown ">
                  <a className="nav-link dropdown-toggle mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Eğitimlerimiz
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item text-danger" href="#">İngilizce Eiğitimi</a></li>
                    <li><a className="dropdown-item text-danger"  href="#">Almanca Eğitimi </a></li>
                    <li><a className="dropdown-item text-danger"  href="#">Rusça Eğitimi </a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-3" href="#">Blog</a>
                </li>
              </ul>
              <span className="navbar-text">
               <button type="button" className="btn btn-danger mx-3 px-3  border-black">İletişime Geçin</button>
              </span>
            </div>
          </div>
      </nav>
    </div>
  )
}

export default Navbar