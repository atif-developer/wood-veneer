import React from "react";

const Map = () => {
  return (
    <div id="contact">
      <div className="my-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55729.545607691805!2d74.32751268602036!3d31.552328880562534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919100345663227%3A0x903b2fb4b04df25d!2sArt%20Wood%20Veneer!5e0!3m2!1sen!2s!4v1726128164328!5m2!1sen!2s"
          className="w-full h-[400px] md:h-[600px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Map;
