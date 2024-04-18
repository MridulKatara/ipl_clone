import React from 'react';
import '../Css/homepage.css';

function Homepage() {
  
  const handleImageClick = (path) => {
    // Navigate to the respective page
    window.location.href = path;
  };

  const handleFeatureClick = (path) => {
    // Navigate to the respective feature page
    window.location.href = path;
  };

  return (
    <div className="homepage">
      <div className="slider">
        {/* Slider content goes here */}
        <div className="video-slide">
          <video className="video-item" loop>
            <source src="/path/to/video1.mp4" type="video/mp4" />
          </video>
          {/* Add more videos similarly */}
        </div>
      </div>

      <div className="image-slots">
        {/* Image slots go here */}
        <div className="slot" onClick={() => handleImageClick('/path/to/page1')}>
          <img src="/image/download.png" alt="Slot 1" className="slot-image" />
        </div>
        <div className="slot" onClick={() => handleImageClick('/path/to/page2')}>
          <img src="/image/download.png" alt="Slot 2" className="slot-image" />
        </div>
        <div className="slot" onClick={() => handleImageClick('/path/to/page3')}>
          <img src="/image/download.png" alt="Slot 3" className="slot-image" />
        </div>
        <div className="slot" onClick={() => handleImageClick('/path/to/page4')}>
          <img src="/image/download.png" alt="Slot 4" className="slot-image" />
        </div>
        <div className="slot" onClick={() => handleImageClick('/path/to/page1')}>
          <img src="/image/download.png" alt="Slot 5" className="slot-image" />
        </div>
        <div className="slot" onClick={() => handleImageClick('/path/to/page1')}>
          <img src="/image/download.png" alt="Slot 6" className="slot-image" />
        </div>
        <div className="slot" onClick={() => handleImageClick('/path/to/page1')}>
          <img src="/image/download.png" alt="Slot 7" className="slot-image" />
        </div>
        <div className="slot" onClick={() => handleImageClick('/path/to/page1')}>
          <img src="/image/download.png" alt="Slot 8" className="slot-image" />
        </div>
        {/* Add more slots similarly */}
      </div>

      <div className="search-line">
        What are you looking for?
      </div>

      <div className="feature-slots">
  {/* Feature slots go here */}
  <div className="feature-slot" onClick={() => handleFeatureClick('/path/to/feature1')}>
    <img src="/image/download.png" alt="Feature 1" className="feature-image" />
    <div className="feature-overlay">
      <h3>Feature 1</h3>
      <p>Description for Feature 1</p>
    </div>
  </div>
  
  <div className="feature-slot" onClick={() => handleFeatureClick('/path/to/feature2')}>
    <img src="/image/download.png" alt="Feature 2" className="feature-image" />
    <div className="feature-overlay">
      <h3>Feature 2</h3>
      <p>Description for Feature 2</p>
    </div>
  </div>
  
  <div className="feature-slot" onClick={() => handleFeatureClick('/path/to/feature3')}>
    <img src="/image/download.png" alt="Feature 3" className="feature-image" />
    <div className="feature-overlay">
      <h3>Feature 3</h3>
      <p>Description for Feature 3</p>
    </div>
  </div>
  
  <div className="feature-slot" onClick={() => handleFeatureClick('/path/to/feature4')}>
    <img src="/image/download.png" alt="Feature 4" className="feature-image" />
    <div className="feature-overlay">
      <h3>Feature 4</h3>
      <p>Description for Feature 4</p>
    </div>
  </div>
</div>

    </div>
  );
}

export default Homepage;


