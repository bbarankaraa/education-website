import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav class="mt-5 navbar navbar-expand-sm  ">
          <div class="container-sm">
            <a class="navbar-brand fw-" href="#">Ediz | Akademi</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarText">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0 " >
                <li class="nav-item ">
                  <a class="nav-link mx-3 " aria-current="page" href="#">Anasayfa</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link mx-3" href="#">Hakkımızda</a>
                </li>
                  <li class="nav-item dropdown ">
                  <a class="nav-link dropdown-toggle mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Eğitimlerimiz
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item text-danger" href="#">İngilizce Eiğitimi</a></li>
                    <li><a class="dropdown-item text-danger"  href="#">Almanca Eğitimi </a></li>
                    <li><a class="dropdown-item text-danger"  href="#">Rusça Eğitimi </a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-3" href="#">Blog</a>
                </li>
              </ul>
              <span class="navbar-text">

               <button type="button" class="btn btn-danger mx-3 px-3  border-black">İletişime Geçin</button>
             
              </span>
            </div>
          </div>
      </nav>
    </div>
  )
}

export default Navbar