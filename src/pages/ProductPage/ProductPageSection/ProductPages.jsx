import React, { useState } from "react";
import PhysioHead from "../../ServicePage/ServiceSection/PhysioHead";
import BgImg from "../../../assets/ServicesPageImgs/PhysioTherapy/BgImg.png";
import img1 from "../../../assets/ProductPageImgs/AllProducts/img1.png";
import img2 from "../../../assets/ProductPageImgs/AllProducts/img2.png";
import img3 from "../../../assets/ProductPageImgs/AllProducts/img3.png";
import img4 from "../../../assets/ProductPageImgs/AllProducts/img4.png";
import img5 from "../../../assets/ProductPageImgs/AllProducts/img5.png";
import img6 from "../../../assets/ProductPageImgs/AllProducts/img6.png";
import img7 from "../../../assets/ProductPageImgs/AllProducts/img7.png";
import img8 from "../../../assets/ProductPageImgs/AllProducts/img8.png";
import CustomOrthotics from "./CustomOrthotics";
import ProductModal from "./ProductModal";
import ProductSection from "./ProductSection";
import Compression from "./Compression";
import KneeBraces from "./kneebraces";
import BackBraces from "./BackBraces";
import ElbowBraces from "./ElbowBraces";
import AnkleBraces from "./AnkleBraces";
import WristBraces from "./WristBraces";
import CervicalPillow from "./CervicalPillow";

const ProductPages = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const renderModalContent = () => {
    switch (selectedProduct) {
      case "orthotics":
        return <CustomOrthotics />;
      case "compression":
        return <Compression />;
      case "kneeBraces":
        return <KneeBraces />;
      case "backBraces":
        return <BackBraces />;
      case "elbowbraces":
        return <ElbowBraces />;
        case "anklebraces":
        return <AnkleBraces />;
        case "wristbraces":
        return <WristBraces />;
        case "cervical":
        return <CervicalPillow />;
      default:
        return null;
    }
  };

  return (
    <>
      <section className="rounded-full">
        <PhysioHead
          Heading={
            <>
              <span className="text-white">Orthotics,</span> Braces & Supportive
            </>
          }
          WhiteText="Products"
          BgImg={BgImg}
          subtext="At Om Sai Physiotherapy Clinic, we offer a comprehensive range of custom orthotics, medical-grade braces, compression stockings, 
        and supportive devices designed to reduce pain, improve mobility,and correct biomechanical issues."
          subtext1="Our goal is to help you move comfortably, prevent further injury, and support your long-term musculoskeletal health with tailored 
        solutions that truly fit your body."
        />

        <div className="container grid grid-cols-1 xl:grid-cols-2 gap-5 capitalize">
          {/* Text */}
          <ProductSection
            ProductImg={img1}
            ColorText="Orthotics"
            Headtext="Custom"
            SubText1="Custom orthotics are specially molded devices designed to correct abnormal foot mechanics and provide optimal support, alignment, and balance."
            onOpen={() => handleOpenModal("orthotics")}
          />
          <ProductSection
            ProductImg={img2}
            Headtext="Compression"
            ColorText="Stockings"
            SubText1="Compression therapy uses medical-grade stockings that apply graduated pressure—tightest at the ankle and lighter upward
        to improve circulation, prevent pooling of blood, and reduce swelling."
            onOpen={() => handleOpenModal("compression")}
          />
          <ProductSection
            ProductImg={img3}
            Headtext="Custom"
            ColorText="Knee Braces"
            SubText1="Custom knee braces provide targeted support for injury recovery, arthritis, ligament instability, and chronic knee pain."
            onOpen={() => handleOpenModal("kneeBraces")}
          />
          <ProductSection
            ProductImg={img4}
            Headtext="Back"
            ColorText="Braces"
            SubText1="Back braces help support the spine, reduce pain, stabilize injuries, and improve posture. They are especially useful after surgery or trauma."
            onOpen={() => handleOpenModal("backBraces")}
          />
          <ProductSection
            ProductImg={img5}
            Headtext="Elbow"
            ColorText="Braces"
            SubText1="Elbow braces provide targeted compression for tendon injuries and chronic conditions."
            onOpen={() => handleOpenModal("elbowbraces")}
          />
          <ProductSection
            ProductImg={img6}
            Headtext="Ankle"
            ColorText="Braces"
            SubText1="Ankle braces stabilize the joint, reduce pain, and assist recovery from sprains or instability."
            onOpen={() => handleOpenModal("anklebraces")}
          />
          <ProductSection
            ProductImg={img7}
            Headtext="Wrist"
            ColorText="Braces"
            SubText1="Wrist braces immobilize and support the wrist after injury or strain."
            onOpen={() => handleOpenModal("wristbraces")}
          />
          <ProductSection
            ProductImg={img8}
            Headtext="Cervical"
            ColorText="Pillows"
            SubText1="Cervical pillows provide proper neck alignment during sleep, ensuring comfort and reducing strain."
            onOpen={() => handleOpenModal("cervical")}
          />
        </div>
      </section>

      {/* ✅ MODAL */}
      <ProductModal
        isOpen={selectedProduct !== null}
        onClose={handleCloseModal}
      >
        {renderModalContent()}
      </ProductModal>
    </>
  );
};

export default ProductPages;
