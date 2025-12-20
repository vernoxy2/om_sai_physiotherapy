import React from "react";

const CustomOrthotics = () => {
  return (
    <section className="container">
      <h1>Custom Orthotics</h1>
      <p className="w-full h-0.5 bg-primary" />
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-16">
        <div className="space-y-5 text-base">
          <h5 className="bg-primary text-white p-0 w-full ">
            Benefits of Custom Orthotics
          </h5>

          <ul className="list-disc pl-6  space-y-2">
            <li>Correct foot alignment and posture</li>
            <li>Reduce pressure points and muscle strain</li>
            <li>
              Relieve discomfort in the ankles, knees, hips, and lower back
            </li>
            <li>Improve balance and walking mechanics</li>
            <li>Reduce fatigue and support long-term mobility</li>
            <li>Enhance overall comfort during daily activities</li>
          </ul>
          <p>
            Custom orthotics are worn inside your shoes to support the foot and
            correct improper biomechanicshelping your feet and entire body
            function the way they were meant to.
          </p>
          {/* Vertical */}
        </div>

        <div className="space-y-5 text-base ">
          {/* <p className="w-[1%] h-full bg-[#696969]  " /> */}

          <h5 className="bg-primary text-white p-0 w-full">
            Benefits of Custom Orthotics
          </h5>
          <ul className="list-disc pl-6 space-y-2">
            <li>Heel Spurs</li>
            <li>Plantar Fasciitis</li>
            <li>Metatarsalgia</li>
            <li>Knee Pain</li>
            <li>Lower Back Pain</li>
            <li>Bunions</li>
            <li>Achilles Tendonosis</li>
            <li>High Arches (Pes Cavus)</li>
            <li>Limb Length Discrepancy</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CustomOrthotics;
