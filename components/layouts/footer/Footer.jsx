"use client";
const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 p-10">
      <aside>
        <img
          src={
            "https://res.cloudinary.com/dpisx0ysb/image/upload/v1737161718/logoPanaderia_limgcq.svg"
          }
          alt="logoPanaderia"
          className="w-20"
        />
        <p className="font-bold text-base-content">La Fika Panaderia</p>
        <p className="text-base-content">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <button className="btn btn-ghost p-0">
            <a
              href="https://www.instagram.com/lafikapanaderia/"
              target="_blank"
            >
              <img
                src={
                  "https://res.cloudinary.com/dpisx0ysb/image/upload/v1737161717/logoInstagram_nafkek.svg"
                }
                alt="Instagram"
              />
            </a>
          </button>
          <button className="btn btn-ghost p-0">
            <a>
              <img
                src={
                  "https://res.cloudinary.com/dpisx0ysb/image/upload/v1737161718/logoWhatsapp_nuueh6.svg"
                }
                alt="Instagram"
              />
            </a>
          </button>
          <button className="btn btn-ghost p-0">
            <a href="https://maps.app.goo.gl/ZU6hasX8Jg968aWu7" target="blank">
              <img
                src={
                  "https://res.cloudinary.com/dpisx0ysb/image/upload/v1737161717/logoGoogleMaps_bvxirz.svg"
                }
                alt="Google Maps"
              />
            </a>
          </button>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
