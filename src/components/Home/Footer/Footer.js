// import img from '../../assets/logo/minas_log.jpeg';

// import img from '../../../assets/logo/FullLogo_NoBuffer.jpg';

const Footer = () => {
    return (
       <>
  <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section: Branding / Logo */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold uppercase"> print on demand </h2>
          <p className="text-gray-400 text-sm">Showcasing print-on-demand designs</p>
        </div>

        {/* Middle Section: Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="##Skills" className="hover:text-gray-300 transition">Skills</a>
          <a href="https://linktr.ee/mjpixelvibe" className="hover:text-gray-300 transition">Portfolio</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </div>

        {/* Right Section: Social / Contact */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/mjpixelvibe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            Instagram
          </a>
          <a
            href="mailto:Mjpixelvibe@gmail.com"
            className="hover:text-gray-300 transition"
          >
            Email
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Print on Demand. All rights reserved.
      </div>
    </footer>
       </>
    );
};

export default Footer;