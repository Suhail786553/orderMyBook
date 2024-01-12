import React, { useState } from 'react';
// import './AboutPage.css'; // You'll need to create this CSS file for styling

const AboutPage = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleSection = (sectionNumber) => {
    switch (sectionNumber) {
      case 1:
        setIsOpen1(!isOpen1);
        break;
      case 2:
        setIsOpen2(!isOpen2);
        break;
      case 3:
        setIsOpen3(!isOpen3);
        break;
      default:
        break;
    }
  };

  return (
    <div style={{marginTop:"82px"}}className="about-page">
      <div className="about-section">
        <h2 onClick={() => toggleSection(1)}>Welcome to [OrderMyBooks]</h2>
        {/* <button onClick={()=> toggleSection(1)}type="button" class="btn btn-light">Welcome to [OrderMyBooks]</button> */}
        {isOpen1 && <p>Order your Books Regualrly and give a one time chance to order a book all kinds of book available on this website.This website is specially made by book lover and reader of books.At Order My Books, our mission is to make the process of finding and purchasing books as seamless as possible. We believe in the power of storytelling and aim to create an immersive experience for book enthusiasts of all ages. Whether you're seeking an adventure in fantasy realms, exploring the depths of non-fiction, or enjoying the classics, we have something for every reader.</p>}
        <div className={`arrow ${isOpen1 ? 'open' : ''}`} onClick={() => toggleSection(1)}>
        <button type="button" class="btn btn-info">Tap to Open</button>
        </div>
      </div>

      <div className="about-section">
        <h2 onClick={() => toggleSection(2)}>Our Collection</h2>
        {isOpen2 && <p>Explore our extensive catalog featuring a wide range of genres, including:

Fiction & Literature: Immerse yourself in captivating stories, from classic novels to contemporary fiction.
Mystery & Thriller: Get lost in gripping tales filled with suspense and intrigue.
Science Fiction & Fantasy: Embark on thrilling adventures in distant galaxies or magical realms.
Self-Help & Personal Development: Discover resources to enhance your well-being and personal growth.
Children's Books: Nurture young minds with engaging and educational reads for kids of all ages.
Non-Fiction: Delve into informative and thought-provoking books covering various subjects.</p>}
        <div className={`arrow ${isOpen2 ? 'open' : ''}`} onClick={() => toggleSection(2)}>
        <button type="button" class="btn btn-info">Tap to Open</button>
        </div>
      </div>

      <div className="about-section">
        <h2 onClick={() => toggleSection(3)}>Our story</h2>
        {isOpen3 && <p>Established in [Year Established], [Bookstore Name] has been a haven for book enthusiasts, offering a curated selection of books across various genres. Our journey began with a simple idea: to create a space where individuals could explore, discover, and indulge in the beauty of storytelling.</p>}
        <div className={`arrow ${isOpen3 ? 'open' : ''}`} onClick={() => toggleSection(3)}>
        <button type="button" class="btn btn-info">Tap to Open</button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
