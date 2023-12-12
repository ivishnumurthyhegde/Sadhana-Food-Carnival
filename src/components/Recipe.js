import React from 'react';

const Recipe = () => {
  return (
    <>
      <br />
      <br />
      <h1 className='text-5xl font-semibold text-center'> Top Recipe </h1>
      <h1 className='text-4xl font-semibold text-center mt-2'> Our Special Dishes</h1>
      <section className="px-4 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="card">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://shorturl.at/dfkDM"
                alt="Biryani"
                className="object-cover w-full h-40"
              />
              <br />
              <h2 className='text-center font-bold'> Biryani</h2>
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href="https://shorturl.at/eiuLV"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Order Now
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://shorturl.at/iMOV9"
                alt="Manchurian"
                className="object-cover w-full h-40"
              />
               <br />
              <h2 className='text-center font-bold'> Manchurian </h2>
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href="https://shorturl.at/eiuLV"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Order Now
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://shorturl.at/xyRS7"
                alt="Mudde Meals"
                className="object-cover w-full h-40"
              />
               <br />
              <h2 className='text-center font-bold'> Meals</h2>
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href="https://shorturl.at/eiuLV"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipe;
