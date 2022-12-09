import "./App.css";
// import Home from './components/home/home';
// import About from './components/about/about';
// import Gallery from './components/gallery/gallery';
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="bg-image">
              <img
                src="https://celebrer.org/wp-content/uploads/2022/06/startup-whiteboard-room-3267505.jpg"
                className="image-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="first-image-word">
          <div className="col wrap">
            <div className="paragraph">
              <h5>CELEBRER</h5>
            </div>
          </div>
          <div className="col">
            <div className="heading">
              <h1>Helping You Build resilient Business</h1>
            </div>
          </div>
          <div className="col">
            <div className="contant">
              <p>
                Pellentesque odio aliquam vitae amet, elementum at urna
                facilisis purus, integer nam libero pharetra viverra et dolor
                tellus, eget commodo tellus tempus vitae.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="bg-image-two">
              <img
                src="https://celebrer.org/wp-content/uploads/2021/02/business-consulting-main-services-img-bg.jpg"
                className="image-fluid"
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
