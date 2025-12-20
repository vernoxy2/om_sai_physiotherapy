const PrimarySecGrid = ({
  Img,
  Children,
  className,
  className1,
  className2,
}) => {
  return (
    <section className="">
      {/* main grid */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 container  ${className}`}
      >
        {/* left div */}
        <div
          className={`flex w-full items-center justify-center  ${className2}`}
        >
          <img src={Img} alt="" className="w-full" />
        </div>

        {/* right div */}
        <div className={` text-[#696969] ${className1}`}>{Children}</div>
      </div>
    </section>
  );
};

export default PrimarySecGrid;
