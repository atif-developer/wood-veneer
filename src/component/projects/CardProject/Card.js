import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Card = ({Data}) => {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Data?.Images.map((item, index) => {
        return (
          <div key={index}>
            <Zoom>
              <img
                className="h-96 w-96  max-w-full rounded-lg"
                src={item}
                alt=""
              />
            </Zoom>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
