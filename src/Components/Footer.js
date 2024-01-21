import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="order-book-section">
        <h3>Order My Book</h3>
        <p>Explore my latest book and place your order now!</p>
        <button onClick={() => alert('Order button clicked!')}>
          Order Now
        </button>
      </div>
      {/* Add other footer sections or links as needed */}
      <div className="additional-section">
        {/* Additional footer content */}
      </div>
      <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "9px",
            }}
            className="logom"
          >
             <div className="logo">
              <a href="www.linkedin.com/in/mohd-suhail-1bb6b8251" className="fa fa-linkedin"></a>
            </div>

            <div  className="logo">
              <a
                href="https://www.facebook.com/profile.php?id=100012880817132"
                className="fa fa-amazon"
              ></a>
            </div>
           
            <div className="logo1">
              <a href="www.linkedin.com/in/mohd-suhail-1bb6b8251" className="fa fa-yahoo"></a>
            </div>
            <div className="logo1">
              <a href="www.linkedin.com/in/mohd-suhail-1bb6b8251" className="fa fa-instagram"></a>
            </div>
          
          </div>
            <p>&copy; 2024 OrderMyBook. All rights reserved.</p>
       
    </footer>
  );
};

export default Footer;
