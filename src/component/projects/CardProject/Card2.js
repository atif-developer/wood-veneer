import React from 'react'
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Card2 = ({ Data = [] }) => {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Data.length > 0 ? (
        Data?.map((image, index) => (
          <div key={index}>
            <Zoom>
              <img
                className="h-96 w-full max-w-full rounded-lg"
                src={image}
                alt={`Image ${index + 1}`}
              />
            </Zoom>
          </div>
        ))
      ) : (
        <p>No images to display.</p>
      )}
  </div>
  )
}

export default Card2