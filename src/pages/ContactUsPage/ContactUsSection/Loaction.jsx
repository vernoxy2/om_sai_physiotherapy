import React from "react";

const Loaction = () => {
  return (
    <div className="py-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.356191938596!2d-79.65026312337264!3d43.58061225712194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b46d2f9995517%3A0x898a5019a6605b80!2s3960%20Grand%20Park%20Dr%20Unit%233%2C%20Mississauga%2C%20ON%20L5B%204M6%2C%20Canada!5e1!3m2!1sen!2sin!4v1766050991116!5m2!1sen!2sin"
        className="w-full h-[554px] "
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Loaction;
