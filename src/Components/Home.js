import React, { useState, useEffect } from "react";
import "./ImageRow.css";
import "./logo.css";

function PhotoSlider() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const photos = [
    "https://images.freeimages.com/images/large-previews/2f3/the-stacks-of-books-1630957.jpg",
    "https://wallpaperaccess.com/full/934067.jpg",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000); // Change photo every 3 seconds (3000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container">
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            marginTop: "57px",
            border: "3px solid black",
          }}
        >
          <img
            src={photos[currentPhotoIndex]}
            alt={`Photo ${currentPhotoIndex + 1}`}
            style={{ width: "100vw", height: "50vh" }}
          />
        </div>
      </div>
      <div className="container2">
        <h1
          style={{ margin: "23px 0 0 -7px", padding: "13px", color: "black" }}
        >
          Trending Books
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
        className="photos"
      >
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33612908_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Clinical Medicine</h5>
            <p className="card-text">
              Sunesh Kumar<br></br>
              <b>Rs.115</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33678486_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Medicine</h5>
            <p className="card-text">
              S.Henry<br></br>
              <b>Rs.249</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="	https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33676970_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Clinical Methods</h5>
            <p className="card-text">
              Michael Gynn<br></br>
              <b>Rs.129</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="	https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33612941_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Davidson</h5>
            <p className="card-text">
              John Hampton<br></br>
              <b>Rs.249</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33612967_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Paedriatrics</h5>
            <p className="card-text">
              Sunesh Kumar<br></br>
              <b>Rs.115</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33563116_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Gynaecology</h5>
            <p className="card-text">
              Sunesh Kumar<br></br>
              <b>Rs.115</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
      <div className="container2">
        <h1
          style={{ margin: "23px 0 0 -7px", padding: "13px", color: "black" }}
        >
          ICSE Books
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
        className="photos"
      >
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="	https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33722882_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">History and Civcs</h5>
            <p className="card-text">
             Tapati Das Gupta<br></br>
             <b>Rs.149</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33720399_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Total English</h5>
            <p className="card-text">
            Xavier Pinto<br></br>
            <b>Rs.244</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33721343_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Mathematics X</h5>
            <p className="card-text">
              R.S Agarwal<br></br>
              <b>Rs.399</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33722237_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Mathematics XI</h5>
            <p className="card-text">
              S.K Gupta<br></br>
              <b>Rs.299</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="	https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33690444_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Java</h5>
            <p className="card-text">
              Sumita Arora<br></br>
              <b>Rs.149</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33563116_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Computer Science</h5>
            <p className="card-text">
             S.K Gaur<br></br>
             <b>Rs.199</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
      </div>

      <div className="container2">
        <h1
          style={{ margin: "23px 0 0 -7px", padding: "13px", color: "black" }}
        >
          CBSE Books
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
        className="photos"
      >
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33707884_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Python</h5>
            <p className="card-text">
              Sumita Arora<br></br>
              <b>Rs.239</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="	https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33555149_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Mathematics X</h5>
            <p className="card-text">
              RS Agarwal<br></br>
              <b>Rs.249</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33708195_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">CBSE Solved Paper</h5>
            <p className="card-text">
              Oswal<br></br>
              <b>Rs.139</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33585841_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Mental Arithmetic</h5>
            <p className="card-text">
             RS Agarwal<br></br>
             <b>Rs.129</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33701716_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Double Entry</h5>
            <p className="card-text">
             Sultan Chand<br></br>
             <b>Rs.239</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33567914_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Grammar Gear</h5>
            <p className="card-text">
             Oswal<br></br>
             <b>Rs.129</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
      <div className="container2">
        <h1
          style={{ margin: "23px 0 0 -7px", padding: "13px", color: "black" }}
        >
          NCERT Books
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
        className="photos"
      >
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33595852_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Mathematics</h5>
            <p className="card-text">
             Rs.199
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33595824_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Chemistry</h5>
            <p className="card-text">
             Rs.239
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="	https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33595816_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Biology</h5>
            <p className="card-text">
              Rs.299
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33595812_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">World History</h5>
            <p className="card-text">
              Rs.239
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33595808_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Science</h5>
            <p className="card-text">
              Rs.399
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33595798_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Social Science</h5>
            <p className="card-text">
             Rs.249
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
      </div>

      <div className="container2">
        <h1
          style={{ margin: "23px 0 0 -7px", padding: "13px", color: "black" }}
        >
          Most Popular Children Books
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
        className="photos"
      >
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33689691_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">The Lost Story</h5>
            <p className="card-text">
             Sudha Murty<br></br>
             <b>Rs.239</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
        <img
            src="	https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33562051_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Charlottes Web</h5>
            <p className="card-text">
            E.B White<br></br>
            <b>Rs.239</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33689842_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Wimpky Kid</h5>
            <p className="card-text">
             RabindraNath Tagore<br></br>
             <b>Rs.239</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33562119_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Grandma's Bag</h5>
            <p className="card-text">
              Sudhas Murty<br></br>
              <b>Rs.139</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33574745_1.jpg"
            className="card-img-top"
            alt="photos"
          />
          <div className="card-body">
            <h5 className="card-title">Famous Five</h5>
            <p className="card-text">
             William Shakespeare<br></br>
             <b>Rs.399</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
        <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33689057_1.jpg"
            className="card-img-top"
            alt="photos" 
          />
          <div className="card-body">
            <h5 className="card-title">Harry Potter</h5>
            <p className="card-text">
             JK Rowling<br></br>
           <b>Rs.239</b>
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
      <div className="container2">
        <h1
          style={{ margin: "23px 0 0 -7px", padding: "13px", color: "black" }}
        >
          Browse By Authors
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          maxWidth: "100%",
          height: "auto",
        }}
        className="photosauthr"
      >
        <div className="photosauthor">
          <img
            style={{ borderRadius: "50%", margin: "0 28px", height: "218px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Rabindranath_Tagore.jpg"
            className="img-fluid"
            alt="photos authors"
            width="164px"
            height="164px"
          />
          <h3 style={{ margin: "0 28px" }}>Rabindranath Tagore</h3>
        </div>
        <div className="photosauthor">
          <img
            style={{ borderRadius: "50%", margin: "0 28px", height: "218px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/3/31/William_Shakespeare_1609.jpg"
            className="img-fluid"
            alt="photos authors"
            width="164px"
            height="164px"
          />
          <h3 style={{ margin: "0 28px" }}>William Shakespeare</h3>
        </div>
        <div className="photosauthor">
          <img
            style={{ borderRadius: "50%", margin: "0 28px", height: "218px" }}
            src="https://www.hawtcelebs.com/wp-content/uploads/2018/04/j.k.-rowling-at-harry-potter-and-the-cursed-child-broadway-opening-in-new-york-04-22-2018-3.jpg"
            className="img-fluid"
            alt="photos authors"
            width="164px"
            height="164px"
          />
          <h3 style={{ margin: "0 28px" }}>JK Rowling</h3>
        </div>
      </div>
     
    </>
  );
}

export default PhotoSlider;
