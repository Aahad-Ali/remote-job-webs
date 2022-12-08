import "./App.css";
// import Home from './components/home/home';
// import About from './components/about/about';
// import Gallery from './components/gallery/gallery';
import Navbar from "./components/navbar/navbar";

function App(e) {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="bg-image">
              <img
                src="https://celebrer.org/wp-content/uploads/2022/06/startup-whiteboard-room-3267505.jpg"
                className="img-fluid w-100"
                alt=""
              />
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            <div className="bg-image-two">
              <img
                src="https://celebrer.org/wp-content/uploads/2021/02/business-consulting-main-services-img-bg.jpg"
                className="img-fluid w-100"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
