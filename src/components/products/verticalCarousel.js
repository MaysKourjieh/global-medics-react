import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import product from "../../images/product.png";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-vertical-carousel-component-in-react
 */

const VerticalCarousel = ({ data, leadingText }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Used to determine which items appear above the active item
  const halfwayIndex = Math.ceil(data.length / 2);

  // Usd to determine the height/spacing of each item
  const itemHeight = 10;

  // Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight;

  // Used to determine which items should be visible. this prevents the "ghosting" animation
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex) => {
    // If these match, the item is active
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        console.log((itemIndex - activeIndex) * itemHeight);
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        console.log(-(data.length + activeIndex - itemIndex) * itemHeight);
        return -(data.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      console.log((itemIndex - activeIndex) * itemHeight);
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        console.log((data.length - (activeIndex - itemIndex)) * itemHeight);
        return (data.length - (activeIndex - itemIndex)) * itemHeight;
      }
      console.log(-(activeIndex - itemIndex) * itemHeight);
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  const handleClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        if (prevIndex + 1 > data.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      }

      if (prevIndex - 1 < 0) {
        return data.length - 1;
      }

      return prevIndex - 1;
    });
  };

  return (
      <section className="outer-container1">
        <div className="carousel-wrapper1 m-0 ps-0 pe-0">
          <button
            type="button"
            className="carousel-button1 prev arrow-up"
            onClick={() => handleClick("prev")}
          >
           <i className="fa fa-light fa-chevron-up"></i>
          </button>

          <div className="carousel1">
            <div className="slides1">
              <div className="carousel-inner1">
                {data.map((item, i) => (
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={cn("carousel-item1", {
                      active: activeIndex === i,
                      visible:
                        Math.abs(determinePlacement(i)) <= visibleStyleThreshold
                    })}
                    key={item.id}
                    style={{
                      transform: `translateY(${determinePlacement(i)}px)`
                    }}
                  >
                    <img src={item.content.image} width="110" height="110"></img>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="carousel-button1 next arrow-down"
            onClick={() => handleClick("next")}
          >
           <i className="fa fa-light fa-chevron-down"></i>
          </button>
        </div>
        <div className="content m-0 p-0">
          <img
          width="500" height="500"
            src={data[activeIndex].content.image}
            alt={data[activeIndex].content.introline}
          />
          <p>{data[activeIndex].content.copy}</p>
        </div>
      </section>
  );
};

VerticalCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  leadingText: PropTypes.string.isRequired
};

export default VerticalCarousel;