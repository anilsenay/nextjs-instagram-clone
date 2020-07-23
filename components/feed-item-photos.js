import React, { useState, useRef, useEffect } from "react";

export default function FeedItemPhotos({ photos }) {
  const photoRef = useRef(0);

  const [photosX, setPhotosX] = useState(0);
  const [refLoaded, setRefLoaded] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  useEffect(() => {
    if (photoRef) setRefLoaded(true);
  }, [photoRef]);

  const min_x = -((photoRef.current.width + 2) * (photos.length - 1));

  const slideButtonEvent = (x) => {
    if (x < min_x) setPhotosX(min_x);
    else if (x > 0) setPhotosX(0);
    else setPhotosX(x);
  };

  return (
    <div className="feed-photo-container flex relative items-center">
      {photosX !== 0 && (
        <button
          className="stories-button left-0 z-10"
          onClick={() => {
            slideButtonEvent(photosX + photoRef.current.width + 2);
            setSelectedPhoto(selectedPhoto - 1);
          }}
        >
          {"<"}
        </button>
      )}
      <div
        className="feed-photo-images-container w-full flex relative transition ease-linear duration-200"
        style={{ transform: `translate(${photosX}px, 0px)` }}
      >
        <img
          className="flex-1 object-fill"
          src={photos[0] || "https://picsum.photos/400/400"}
          ref={photoRef}
        />{" "}
        {refLoaded &&
          photos.map((item, index) => {
            return (
              index !== 0 && (
                <img
                  key={index}
                  className="flex-1 object-fill hide-photo absolute overflow-hidden"
                  style={{
                    width: photoRef.current.width,
                    transform: `translate(${
                      (photoRef.current.width + 2) * index
                    }px, 0px)`,
                  }}
                  src={item || "hhttps://picsum.photos/400/400"}
                />
              )
            );
          })}
      </div>
      {photosX !== min_x && (
        <button
          className="stories-button right-0 z-10"
          onClick={() => {
            slideButtonEvent(photosX - photoRef.current.width - 2);
            setSelectedPhoto(selectedPhoto + 1);
          }}
        >
          {">"}
        </button>
      )}
      {photos.length > 1 && (
        <div className="slide-dots absolute flex">
          {photos.map((item, index) => {
            return (
              <div
                key={index}
                className="slide-dot flex justify-center"
                style={{
                  backgroundColor: index === selectedPhoto && "#0095F6",
                }}
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
}
