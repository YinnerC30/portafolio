import React, { useState } from 'react';

export interface ImageCarousel {
  url: string;
  show: boolean;
}

interface CarouselProps {
  images: ImageCarousel[];
}

export const Carousel: React.FC<CarouselProps> = ({ images = [] }) => {
  const [positionImage, setPositionImage] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setPositionImage((previousPosition) => previousPosition - 1);
  };
  const handleFront = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setPositionImage((previousPosition) => previousPosition + 1);
  };

  const jumpToImage = (position: number) => {
    setPositionImage(position);
  };

  const handleSelectedImage = (imageURL: string) => {
    setSelectedImage(imageURL);
  };

  const handleCloseDialog = () => {
    setSelectedImage(null);
  };

  const disableButtonBack = positionImage === 0;
  const disableButtonFront = images.length === positionImage + 1;

  return (
    <div className=" flex flex-col items-center justify-center gap-5 my-4">
      {!!selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 backdrop-blur-sm">
          <div className="flex flex-col gap-5">
            <button
              type="button"
              onClick={handleCloseDialog}
              className={`cursor-pointer px-4 py-2  text-slate-900 rounded-xl bg-gray-400 hover:bg-gray-200 w-12 flex items-center self-end`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <div
              className={`w-[80vw] w-max-[95vw] h-[600px] overflow-auto rounded-lg bg-no-repeat bg-contain`}
              style={{
                backgroundImage: `url(${selectedImage})`,
              }}
            ></div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-5">
        <button
          className={`hidden sm:block cursor-pointer px-4 py-2  text-slate-900 rounded-xl hover:bg-gray-400 ${
            disableButtonBack ? 'bg-gray-600 pointer-events-none' : 'bg-white'
          }`}
          type="button"
          onClick={handleBack}
          disabled={disableButtonBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </button>

        <img
          onDoubleClick={() => handleSelectedImage(images[positionImage]?.url)}
          className="w-[700px] h-[300px] rounded-xl object-scale-down cursor-pointer"
          src={images[positionImage]?.url}
          alt=""
        />
        <button
          className={` hidden sm:block cursor-pointer px-4 py-2  text-slate-900 rounded-xl hover:bg-gray-400 ${
            disableButtonFront ? 'bg-gray-600 pointer-events-none' : 'bg-white'
          }`}
          type="button"
          onClick={handleFront}
          disabled={disableButtonFront}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="flex gap-10">
        <button
          className={`sm:hidden cursor-pointer px-4 py-2  text-slate-900 rounded-xl hover:bg-gray-400 ${
            disableButtonBack ? 'bg-gray-600 pointer-events-none' : 'bg-white'
          }`}
          type="button"
          onClick={handleBack}
          disabled={disableButtonBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </button>
        <button
          className={`sm:hidden cursor-pointer px-4 py-2  text-slate-900 rounded-xl hover:bg-gray-400 ${
            disableButtonFront ? 'bg-gray-600 pointer-events-none' : 'bg-white'
          }`}
          type="button"
          onClick={handleFront}
          disabled={disableButtonFront}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Bullets */}
      <div className="flex gap-2 flex-wrap justify-center">
        {images.map((_, index) => (
          <button
            type="button"
            onClick={() => jumpToImage(index)}
            className={`w-6 h-6 rounded-full  text-xs hover:bg-white text-slate-900 cursor-pointer ${
              positionImage === index ? 'bg-white' : 'bg-gray-600'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
