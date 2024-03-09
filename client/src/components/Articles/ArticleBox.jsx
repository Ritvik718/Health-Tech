// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import img1 from "../../assets/ste.jpeg";
// import img2 from "../../assets/doc.png";
// import img3 from "../../assets/mind.jpeg";
// import img4 from "../../assets/old.jpeg";
// import img5 from "../../assets/liver.jpeg";
// import img6 from "../../assets/doc2.jpeg";
// import img7 from "../../assets/drug.jpeg";
// import img8 from "../../assets/eyes.jpeg";

// const Carousel = () => {
//   const [currentSlide1, setCurrentSlide1] = useState(0);
//   const [currentSlide2, setCurrentSlide2] = useState(0);

//   const descriptions1 = [
//     "Malfunctioning immune cells may cause type 2 diabetes in obesity",
//     "Can Blue Light Blocking Technology Combat Digital Eye Strain?",
//     "Development and Validation of a Risk Score",
//     "Addressing the threat of loneliness and depression in older adults",
//   ];

//   const descriptions2 = [
//     "Progress towards elimination of viral hepatitis",
//     "Global Cancer Surgery: pragmatic solutions to improve cancer surgery outcomes",
//     "A life-course approach to women’s health",
//     "Which migraine medications are most helpful?",
//   ];

//   const articleLinks1 = [
//     "https://www.medicalnewstoday.com/articles/malfunctioning-immune-cells-may-cause-type-2-diabetes-in-obesity",
//     "https://www.news-medical.net/health/Can-Blue-Light-Blocking-Technology-Combat-Digital-Eye-Strain.aspx",
//     "https://jamanetwork.com/journals/jama/article-abstract/2814884",
//     "https://www.thelancet.com/journals/lanhl/article/PIIS2666-7568(23)00267-2/fulltext?dgcid_tlcom_nc3",
//   ];

//   const articleLinks2 = [
//     "https://www.thelancet.com/commissions/viral-hepatitis-elimination-progress",
//     "https://www.thelancet.com/commissions/global-cancer-surgery-2",
//     "https://www.nature.com/articles/s41591-023-02777-8",
//     "https://www.health.harvard.edu/blog/which-migraine-medications-are-most-helpful-202402053014",
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className="flex">
//       <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg mr-4">
//         <Slider {...settings} afterChange={(index) => setCurrentSlide1(index)}>
//           <div>
//             <a
//               href={articleLinks1[0]}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src={img7}
//                 alt="Article 1"
//                 style={{ width: "100%", height: "300px", objectFit: "cover" }}
//               />
//             </a>
//           </div>
//           <div>
//             <a
//               href={articleLinks1[1]}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src={img8}
//                 alt="Article 2"
//                 style={{ width: "100%", height: "300px", objectFit: "cover" }}
//               />
//             </a>
//           </div>
//           <div>
//             <a
//               href={articleLinks1[2]}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src={img1}
//                 alt="Article 3"
//                 style={{ width: "100%", height: "300px", objectFit: "cover" }}
//               />
//             </a>
//           </div>
//           <div>
//             <a
//               href={articleLinks1[3]}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src={img4}
//                 alt="Article 4"
//                 style={{ width: "100%", height: "300px", objectFit: "cover" }}
//               />
//             </a>
//           </div>
//         </Slider>
//         <div className="text-center py-4">
//           <p className="text-gray-600">{descriptions1[currentSlide1]}</p>
//         </div>
//       </div>
//       <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
//         <Slider {...settings} afterChange={(index) => setCurrentSlide2(index)}>
//           <div>
//             <a
//               href={articleLinks2[0]}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src={img5}
//                 alt="Article 5"
//                 style={{ width: "100%", height: "300px", objectFit: "cover" }}
//               />
//             </a>
//           </div>
//           <div>
//             <a
//               href={articleLinks2[1]}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src={img6}
//                 alt="Article 6"
//                 style={{ width: "100%", height: "300px", objectFit: "cover" }}
//               />
//             </a>
//           </div>
//           <div>
//             <a
//               href={articleLinks2[2]}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src={img3}
//                 alt="Article 7"
//                 style={{ width: "100%", height: "300px", objectFit: "cover" }}
//               />
//             </a>
//           </div>
//           <div>
//             <a
//               href={articleLinks2[3]}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src={img2}
//                 alt="Article 8"
//                 style={{ width: "100%", height: "300px", objectFit: "cover" }}
//               />
//             </a>
//           </div>
//         </Slider>
//         <div className="text-center py-4">
//           <p className="text-gray-600">{descriptions2[currentSlide2]}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/ste.jpeg";
import img2 from "../../assets/doc.png";
import img3 from "../../assets/mind.jpeg";
import img4 from "../../assets/old.jpeg";
import img5 from "../../assets/liver.jpeg";
import img6 from "../../assets/doc2.jpeg";
import img7 from "../../assets/drug.jpeg";
import img8 from "../../assets/eyes.jpeg";

const Carousel = () => {
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

  const descriptions1 = [
    "Malfunctioning immune cells may cause type 2 diabetes in obesity",
    "Can Blue Light Blocking Technology Combat Digital Eye Strain?",
    "Development and Validation of a Risk Score",
    "Addressing the threat of loneliness and depression in older adults",
  ];

  const descriptions2 = [
    "Progress towards elimination of viral hepatitis",
    "Global Cancer Surgery: pragmatic solutions to improve cancer surgery outcomes",
    "A life-course approach to women’s health",
    "Which migraine medications are most helpful?",
  ];

  const articleLinks1 = [
    "https://www.medicalnewstoday.com/articles/malfunctioning-immune-cells-may-cause-type-2-diabetes-in-obesity",
    "https://www.news-medical.net/health/Can-Blue-Light-Blocking-Technology-Combat-Digital-Eye-Strain.aspx",
    "https://jamanetwork.com/journals/jama/article-abstract/2814884",
    "https://www.thelancet.com/journals/lanhl/article/PIIS2666-7568(23)00267-2/fulltext?dgcid_tlcom_nc3",
  ];

  const articleLinks2 = [
    "https://www.thelancet.com/commissions/viral-hepatitis-elimination-progress",
    "https://www.thelancet.com/commissions/global-cancer-surgery-2",
    "https://www.nature.com/articles/s41591-023-02777-8",
    "https://www.health.harvard.edu/blog/which-migraine-medications-are-most-helpful-202402053014",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "slick-dots horizontal-dots", // Custom class for horizontal dots
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mx-4 md:mx-auto max-w-7xl">
      <div className="max-w-md w-full md:w-1/2 mx-auto bg-white rounded-lg overflow-hidden shadow-lg mr-4">
        <Slider {...settings} afterChange={(index) => setCurrentSlide1(index)}>
          {articleLinks1.map((link, index) => (
            <div key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={
                    index === 0
                      ? img7
                      : index === 1
                      ? img8
                      : index === 2
                      ? img1
                      : img4
                  }
                  alt={`Article ${index + 1}`}
                  className="w-full h-60 object-cover"
                />
              </a>
            </div>
          ))}
        </Slider>
        <div className="text-center py-4">
          <p className="text-gray-600">{descriptions1[currentSlide1]}</p>
        </div>
      </div>
      <div className="max-w-md w-full md:w-1/2 mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <Slider {...settings} afterChange={(index) => setCurrentSlide2(index)}>
          {articleLinks2.map((link, index) => (
            <div key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={
                    index === 0
                      ? img5
                      : index === 1
                      ? img6
                      : index === 2
                      ? img3
                      : img2
                  }
                  alt={`Article ${index + 5}`}
                  className="w-full h-60 object-cover"
                />
              </a>
            </div>
          ))}
        </Slider>
        <div className="text-center py-4">
          <p className="text-gray-600">{descriptions2[currentSlide2]}</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
