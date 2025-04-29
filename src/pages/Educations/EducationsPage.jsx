import German from "../../assets/german.png";
import Russia from "../../assets/Russia.jpg";
import Spanish from "../../assets/spanish.jpg";
import American from "../../assets/american.png";

const EducationsPage = () => {
  return (
    <div>
      <div class="container mt-5 p-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h1 className="text-danger ">Eğitimlerimiz</h1>
        </div>
        <div className="row">
          <div className="col-md-4 my-5">
            <div class="card border-danger">
              <img
                className="card-img-top p-4 rounded-5"
                src={American}
                width={300}
                alt=""
              />

              <div class="card-body">
                <h5 class="card-title mt-4 ">İngilizce Eğitimi</h5>
                <p class="card-text"></p>
                <button class="btn btn-outline-danger w-100">
                  Eğitimi İncele
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-5">
            <div className="card border-danger">
              <img
                className="card-img-top p-4 rounded-5"
                src={Russia}
                width={100}
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Rusça Eğitimi</h5>
                <p className="card-text"></p>
                <button className="btn btn-outline-danger w-100">
                  Eğitimi İncele
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-5">
            <div className="card border-danger">
              <img
                className="img-card-img-top p-4 rounded-5"
                src={Spanish}
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">İspanyolca Eğitimi</h5>
                <p className="card-text"></p>
                <button className="btn btn-outline-danger w-100">
                  Eğitimi İncele
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-5">
            <div className="card border-danger">
              <img
                className="img-card-img-top p-4 rounded-5"
                src={German}
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title ">Almanca Eğitimi</h5>
                <p className="card-text"></p>
                <button className="btn btn-outline-danger w-100">
                  Eğitimi İncele
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationsPage;
