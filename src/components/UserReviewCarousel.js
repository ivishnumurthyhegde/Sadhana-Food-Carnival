import React from 'react';

const TextCarouselItem = ({ text, isActive }) => (
  <div className={`duration-700 ease-in-out ${isActive ? 'active' : ''}`} data-carousel-item={isActive ? 'active' : ''}>
    <p className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-center text-2xl text-gray-800">
      {text}
    </p>
  </div>
);


const UserReviewCarousel = () => {
  // Sample text data
  const textItems = [
    <p>
       Food was delicious, and it has never changed its taste. The chicken
        sherva had a separate fan base, and fantastic service and taste. Must-try kushka, 
        rice, chicken sambar, and even alfham.<br /> <strong>--Divya Shankar</strong>
    </p>,
    <p>
    I loved this hotel's atmosphere and chicken biryani. Mutton
     ghee roast is very tasty, like homemade food, and prices are
      also very reasonable. Very friendly owners and staff. I will give 5 stars ⭐⭐⭐⭐⭐. 
      <br />  <strong>--Aruna Madhu</strong>
    </p>,
    <p>
     They have a very good kaal soup and biryani. Definitely recommend this place.
      They have always been consistent.<br /> <strong>--Revanth M</strong> 
    </p>,
    <p>
       Very tasty food. My favorite is leg soup, mutton fry, and mutton biryani.<br /><strong>--Depankar Dey</strong>
    </p>,
    <p>
      This was my second option when checking rating 4.6 
      on breakfast option in chickbanavara. But i regret should have tried here first ,as soon as we entered the aroma was so welcoming, since our breakfast was already done ,
      we took parcel of chicken biryani and boti fry.
       <br /><strong> --Gayatri G</strong>
    </p>,
  ];

  return (
    <> 
      <div id="indicators-carousel" className="relative w-full" data-carousel="static">
        {/* Carousel wrapper */}
        <div className="relative h-80 mt-8 md:mt-3 lg:mt-2 md:h-96 overflow-hidden rounded-lg"> {/* Increased the height to h-72 for mobile */}
          {/* Map through text items and render text carousel items */}
          {textItems.map((text, index) => (
            <TextCarouselItem key={index} text={text} isActive={index === 0} />
          ))}
        </div>
        {/* Slider indicators */}
        <div className="absolute mb-[-8%] md:mb-3 lg:mb-2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
          {/* Indicators for each text carousel item */}
          {textItems.map((_, index) => (
            <button
              key={index}
              type="button"
              className="w-3 h-3 rounded-full bg-black"
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
            ></button>
          ))}
        </div>
        {/* Slider controls */}
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          {/* Previous button */}
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          {/* Next button */}
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className='mb-5' />
    </>
  );
};

export default UserReviewCarousel;
