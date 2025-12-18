// import React from "react";
// import Title from "../../../component/Title";
// import img1 from "../../../assets/ConditionPageImgs/Treat/img1.png";
// import img2 from "../../../assets/ConditionPageImgs/Treat/img2.png";
// import img3 from "../../../assets/ConditionPageImgs/Treat/img3.png";
// import img4 from "../../../assets/ConditionPageImgs/Treat/img4.png";

// const ConditionTreat = () => {
//   const headText = [
//     {
//       MainText: (
//         <h1>
//           Comprehensive &nbsp;
//           <span className="text-[#696969]">
//             Care for
//             <br /> Every<span className="text-primary"> Condition </span>
//           </span>
//         </h1>
//       ),
//     },
//   ];

//   const cardData = [
//     {
//       id: 1,
//       img: img1,
//       Type: "Shoulder",
//       SubText: [
//         "Rotator Cuff Injury",
//         "Shoulder Pain",
//         "Rotator Cuff Tear",
//         "Frozen Shoulder",
//         "Shoulder Joint Dislocations",
//       ],
//     },
//     {
//       id: 2,
//       img: img2,
//       Type: "Neck & Back",
//       SubText: [
//         "Rotator Cuff Injury",
//         "Shoulder Pain",
//         "Rotator Cuff Tear",
//         "Frozen Shoulder",
//         "Shoulder Joint Dislocations",
//       ],
//     },
//     {
//       id: 3,
//       img: img3,
//       Type: "Hip",
//       SubText: [
//         "Rotator Cuff Injury",
//         "Shoulder Pain",
//         "Rotator Cuff Tear",
//         "Frozen Shoulder",
//         "Shoulder Joint Dislocations",
//       ],
//     },
//     {
//       id: 4,
//       img: img4,
//       Type: "Elbow",
//       SubText: [
//         "Rotator Cuff Injury",
//         "Shoulder Pain",
//         "Rotator Cuff Tear",
//         "Frozen Shoulder",
//         "Shoulder Joint Dislocations",
//       ],
//     },
//   ];
//   return (
//     <section>
//       <div className="container gap-10">
//         <div className="mx-auto w-full flex flex-col items-center justify-center text-center space-y-3">
//           <Title
//             className="text-white text-xl items-center"
//             title="Conditions We Treat"
//           />
//           {headText.map((item, index) => (
//             <h1 className="w-" key={index}>
//               {item.MainText}
//             </h1>
//           ))}
//         </div>

//         <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-9">
//           {cardData.map((member, index) => (
//             <div
//               key={index}
//               className="relative group text-center bg-primary/20"
//             >
//               <img
//                 src={member.img}
//                 alt={member.Type}
//                 className="w-full rounded-xl"
//               />

//               {/* hover li list Subtext */}
//               <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-8 opacity-0 group-hover:opacity-100 transition bg-white p-4 rounded-md">
//                 {/* subtext with li list */}
//               </div>

//               <div className="bg-white py-3">
//                 <h2 className="text-2xl font-Marcellus text-white bg-primary rounded-lg">
//                   {member.Type}
//                 </h2>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConditionTreat;

import React from "react";
import Title from "../../../component/Title";
import img1 from "../../../assets/ConditionPageImgs/Treat/img1.png";
import img2 from "../../../assets/ConditionPageImgs/Treat/img2.png";
import img3 from "../../../assets/ConditionPageImgs/Treat/img3.png";
import img4 from "../../../assets/ConditionPageImgs/Treat/img4.png";

const ConditionTreat = () => {
  const headText = [
    {
      MainText: (
        <h1>
          Comprehensive &nbsp;
          <span className="text-[#696969]">
            Care for
            <br /> Every<span className="text-primary"> Condition </span>
          </span>
        </h1>
      ),
    },
  ];

  const cardData = [
    {
      id: 1,
      img: img1,
      Type: "Shoulder",
      SubText: [
        "Rotator Cuff Injury",
        "Shoulder Pain",
        "Rotator Cuff Tear",
        "Frozen Shoulder",
        "Shoulder Joint Dislocations",
      ],
    },
    {
      id: 2,
      img: img2,
      Type: "Neck & Back",
      SubText: [
        "Neck Pain",
        "Herniated Disc",
        "Muscle Strain",
        "Sciatica",
        "Scoliosis",
      ],
    },
    {
      id: 3,
      img: img3,
      Type: "Hip",
      SubText: [
        "Hip Pain",
        "Arthritis",
        "Bursitis",
        "Labral Tear",
        "Hip Replacement",
      ],
    },
    {
      id: 4,
      img: img4,
      Type: "Elbow",
      SubText: [
        "Tennis Elbow",
        "Golfer's Elbow",
        "Bursitis",
        "Fractures",
        "Ligament Injuries",
      ],
    },
  ];

  return (
    <section>
      <div className="container gap-10">
        <div className="mx-auto w-full flex flex-col items-center justify-center text-center space-y-3">
          <Title
            className="text-white text-xl items-center"
            title="Conditions We Treat"
          />
          {headText.map((item, index) => (
            <div key={index}>{item.MainText}</div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-9">
          {cardData.map((member, index) => (
            // <div
            //   key={index}
            //   className="relative text-center rounded-xl overflow-hidden shadow-lg"
            // >
            //   {/* Image container with hover group */}
            //   <div className="relative group rounded-t-xl overflow-hidden">
            //     <img src={member.img} alt={member.Type} className="w-full" />

            //     {/* Hover subtext */}
            //     <div className="absolute inset-0 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition duration-300 p-4 bg-[#797979] group-hover:bg-[#131313]">
            //       <ul className="list-disc list-inside text-left space-y-1 text-white text-base">
            //         {member.SubText.map((sub, i) => (
            //           <li key={i}>{sub}</li>
            //         ))}
            //       </ul>
            //     </div>
            //   </div>

            //   {/* Gap between image and Type */}
            //   <div className="bg-primary rounded-b-xl py-3 mt-3">
            //     <h2 className="text-2xl font-Marcellus text-white">
            //       {member.Type}
            //     </h2>
            //   </div>
            // </div>
            <div
              key={index}
              className="relative text-center rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image container with hover group */}
              <div className="relative group rounded-t-xl overflow-hidden">
                <img src={member.img} alt={member.Type} className="w-full" />

                {/* Hover subtext with smooth color transition */}
                <div className="absolute inset-0 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-4
                 bg-[#797979] group-hover:bg-[#131313]">
                  <ul className="list-disc list-inside text-left space-y-1 text-white text-base">
                    {member.SubText.map((sub, i) => (
                      <li key={i}>{sub}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Gap between image and Type */}
              <div className="bg-primary rounded-b-xl py-3 mt-3">
                <h2 className="text-2xl font-Marcellus text-white">
                  {member.Type}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionTreat;
