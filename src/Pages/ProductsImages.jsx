// import React from "react";
// import image_1 from "../Assets/image_1.png";
// import image_2 from "../Assets/image_2.png";
// import image_3 from "../Assets/image_3.png";
// import image_4 from "../Assets/image_4.png";
// import image_5 from "../Assets/image_5.png";
// import image_6 from "../Assets/image_6.png";


// const ProductsImages = () => {
//   return (
//     <div>
//       <div
//         id="default-carousel"
//         className="relative w-full"
//         data-carousel="slide"
//       >
//         <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
//           <div
//             className="hidden duration-700 ease-in-out grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-2"
//             data-carousel-item
//           >
//             <img
//               src={image_1}
//               className="w-full h-full object-cover rounded-lg"
//               alt="..."
//             />
//             <img
//               src={image_2}
//               className="w-full h-full object-cover rounded-lg"
//               alt="..."
//             />
//             <img
//               src={image_3}
//               className="w-full h-full object-cover rounded-lg"
//               alt="..."
//             />
//             <img
//               src={image_4}
//               className="w-full h-full object-cover rounded-lg"
//               alt="..."
//             />
//           </div>

//           <div
//             className="hidden duration-700 ease-in-out grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-2"
//             data-carousel-item
//           >
//             <img
//              src={image_5}
//               className="w-full h-full object-cover rounded-lg"
//               alt="..."
//             />
//             <img
//               src={image_1}
//               className="w-full h-full object-cover rounded-lg"
//               alt="..."
//             />
//             <img
//               src={image_4}
//               className="w-full h-full object-cover rounded-lg"
//               alt="..."
//             />
//             <img
//               src={image_6}
//               className="w-full h-full object-cover rounded-lg"
//               alt="..."
//             />
//           </div>
//         </div>

//         <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//           <button
//             type="button"
//             className="w-3 h-3 rounded-full"
//             aria-current="true"
//             aria-label="Slide 1"
//             data-carousel-slide-to="0"
//           ></button>
//           <button
//             type="button"
//             className="w-3 h-3 rounded-full"
//             aria-current="false"
//             aria-label="Slide 2"
//             data-carousel-slide-to="1"
//           ></button>
//         </div>

//         <button
//           type="button"
//           className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//           data-carousel-prev
//         >
//           <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg
//               className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 6 10"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M5 1 1 5l4 4"
//               />
//             </svg>
//             <span className="sr-only">Previous</span>
//           </span>
//         </button>
//         <button
//           type="button"
//           className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//           data-carousel-next
//         >
//           <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg
//               className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 6 10"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="m1 9 4-4-4-4"
//               />
//             </svg>
//             <span className="sr-only">Next</span>
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductsImages;


// import React from "react";
// import image_1 from "../Assets/image_1.png";
// import image_2 from "../Assets/image_2.png";
// import image_3 from "../Assets/image_3.png";
// import image_4 from "../Assets/image_4.png";
// import image_5 from "../Assets/image_5.png";
// import image_6 from "../Assets/image_6.png";

// const ProductsImages = () => {
//   const images = [image_1, image_2, image_3, image_4, image_5, image_6];

//   return (
//     <div className="w-full px-4">
//       <h2 className="text-2xl font-bold mb-4">Our Products</h2>
//       <div className="flex overflow-x-auto gap-4 scrollbar-hide">
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className="min-w-[250px] h-[200px] flex-shrink-0 rounded-lg overflow-hidden shadow-md"
//           >
//             <img
//               src={img}
//               alt={`product-${index}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsImages;


import React, { useRef } from "react";
import image_1 from "../Assets/image_1.png";
import image_2 from "../Assets/image_2.png";
import image_3 from "../Assets/image_3.png";
import image_4 from "../Assets/image_4.png";
import image_5 from "../Assets/image_5.png";
import image_6 from "../Assets/image_6.png";

const ProductsImages = () => {

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const images = [image_1, image_2, image_3, image_4, image_5, image_6];

  return (
    <div className="relative w-full px-8 py-12">
      <h2 className="text-2xl font-bold mb-4">Our Products</h2>

      {/* Scrollable container */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-[250px] h-[200px] flex-shrink-0 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={img}
                alt={`product-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductsImages;


