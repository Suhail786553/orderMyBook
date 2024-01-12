import React, { useState, useEffect } from "react";
import './ImageRow.css';
import './logo.css';

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
        <div style={{ width: "100%", overflow: "hidden", marginTop: "57px", border:"3px solid black" }}>
          <img
            src={photos[currentPhotoIndex]}
            alt={`Photo ${currentPhotoIndex + 1}`}
            style={{ width: "100vw", height: "50vh" }} />
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
            src="	https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33686643_1.jpg"
            className="card-img-top"
            alt="photos" />
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
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33678486_1.jpg"
            className="card-img-top"
            alt="photos" />
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
            alt="photos" />
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
            src="	https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33612474_1.jpg"
            className="card-img-top"
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">ECG</h5>
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
            src="	https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33686643_1.jpg"
            className="card-img-top"
            alt="photos" />
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
      
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="	https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33686643_1.jpg"
            className="card-img-top"
            alt="photos" />
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
          CISCE Books
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
            src="https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33720399_1.jpg"
            className="card-img-top"
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", margin: "12px" }}>
          <img
            src="	https://getmybooks.sgp1.cdn.digitaloceanspaces.com/images/33562119_1.jpg"
            className="card-img-top"
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            alt="photos" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
      <div style={{display:"flex",justifyContent:"center",textAlign:"center",maxWidth:"100%",height:"auto"}}className="photosauthr">
            <div className="photosauthor">
              <img style={ {borderRadius:"50%",margin:"0 28px",height:"218px"}}src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Rabindranath_Tagore.jpg"className="img-fluid" alt="photos authors" width="164px"height="164px"/>
             <h3 style={{margin:"0 28px"}}>Rabindranath Tagore</h3>
            </div>
            <div className="photosauthor">
              <img style={ {borderRadius:"50%",margin:"0 28px",height:"218px"}}src="https://upload.wikimedia.org/wikipedia/commons/3/31/William_Shakespeare_1609.jpg" className="img-fluid" alt="photos authors" width="164px"height="164px"/>
              <h3 style={{margin:"0 28px"}}>William Shakespeare</h3>
              </div>
              <div className="photosauthor">
              <img style={ {borderRadius:"50%",margin:"0 28px",height:"218px"}}src="https://www.hawtcelebs.com/wp-content/uploads/2018/04/j.k.-rowling-at-harry-potter-and-the-cursed-child-broadway-opening-in-new-york-04-22-2018-3.jpg" className="img-fluid" alt="photos authors" width="164px"height="164px"/>
              <h3 style={{margin:"0 28px"}}>JK Rowling</h3>
              </div>
              </div>
              <footer class="footer">
  <div class="container">
    <div class="footer-content">
      <h2>Order My Books</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero at risus consequat, id convallis dui fringilla.</p>
      <button class="order-button">Order Now</button>
    </div>
    <div style={{display:"flex",justifyContent:"center",margin:"14px"}}className="logom">
    <div style={{margin:"0 8px"}}className="logo">
      <a href="https://www.facebook.com/profile.php?id=100012880817132" className="fa fa-facebook"></a>
      </div>
      
      <div className="logo1">
<a href="#" className="fa fa-twitter"></a>
</div>
</div>
  </div>
</footer>
 {/* {/* <div style={{width:"100vh",backgroundColor:"grey"}}className="footer">
      
 </div> */}
 </>


    
  );
}

export default PhotoSlider;
