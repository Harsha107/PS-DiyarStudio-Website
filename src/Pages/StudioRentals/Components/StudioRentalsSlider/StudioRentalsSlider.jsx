import React, { useRef } from 'react';
import './StudioRentalsSliderStyles.css';
import Image01 from '../../../../assets/studio-rentals/sr_1.jpg';
import Image02 from '../../../../assets/studio-rentals/sr_2.jpg';
import Image03 from '../../../../assets/studio-rentals/sr_3.jpg';

const StudioRentalsSlider = () => {
  const containerRef = useRef(null);

  const handleScroll = () => {
    const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;
    const maxScrollLeft = scrollWidth - clientWidth;
    if (scrollLeft >= maxScrollLeft) {
      console.log('load more products');
    }
  };

  return (
    <div className="srs-container">
        <div className="srs-cont-container" ref={containerRef} onScroll={handleScroll}>
            <div className="srs-content-box box1">
              <div className="srs-img-container">
                <img src={Image01} alt="" className="srs-img" />
              </div>
              <div className="scc-text_btn-container">
                <span className="srs-text1-container">
                  <p className="srs-text">Vanity Station</p>
                </span>
                <span className="scc-t1-subtext-container">
                  <p className="srs-sbt">
                    Designed with convenience and elegance in mind, our makeup vanity station features ample storage space, professional-grade lighting, a large mirror, and all the essential tools you need to create stunning looks
                  </p>
                </span>
                <span className="srs-uList-container">
                  <span className="srs-uList-heading-container">
                    <p className="srs-uList-heading">Available equipment:</p>
                  </span>
                  <ul className="srs-uList">
                    <li className="srs-li1">&nbsp;&nbsp;&nbsp;&nbsp;Flash light</li>
                    <li className="srs-li2">&nbsp;&nbsp;&nbsp;&nbsp;Video light</li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="srs-content-box box2">
              <div className="srs-img-container">
                <img src={Image02} alt="" className="srs-img" />
              </div>
              <div className="scc-text_btn-container">
                <span className="srs-text1-container">
                  <p className="srs-text">Lighting Station</p>
                </span>
                <span className="srs-t1-subtext-container">
                  <p className="srs-sbt">
                    With adjustable brightness and color temperature settings, you can achieve the perfect lighting conditions for any project or occasion whether you're a content creator, photographer, or simply want to enhance your visual content.
                  </p>
                </span>
                <span className="srs-uList-container">
                  <span className="srs-uList-heading-container">
                    <p className="srs-uList-heading">Available equipment:</p>
                  </span>
                  <ul className="srs-uList">
                    <li className="srs-li1">&nbsp;&nbsp;&nbsp;&nbsp;Spot lights</li>
                    <li className="srs-li2">&nbsp;&nbsp;&nbsp;&nbsp;Softbox</li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="srs-content-box last-box">
              <div className="srs-img-container">
                <img src={Image03} alt="" className="srs-img" />
              </div>
              <div className="scc-text_btn-container">
                <span className="srs-text1-container">
                  <p className="srs-text">Dressup Station</p>
                </span>
                <span className="scc-t1-subtext-container">
                  <p className="srs-sbt">
                    Step into a world of style and convenience with our spacious and well-equipped dressing area, complete with full-length mirrors, comfortable seating, and plenty of storage to accommodate your wardrobe.
                  </p>
                </span>
                <span className="srs-uList-container">
                  <span className="srs-uList-heading-container">
                    <p className="srs-uList-heading">Available equipment:</p>
                  </span>
                  <ul className="srs-uList">
                    <li className="srs-li1">&nbsp;&nbsp;&nbsp;&nbsp;Changing rooms</li>
                    <li className="srs-li2">&nbsp;&nbsp;&nbsp;&nbsp;Cloth hangers</li>
                  </ul>
                </span>
              </div>
            </div>
        </div>
    </div>
  );
};

export default StudioRentalsSlider;
