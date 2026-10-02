import logo from '../../assets/logo-text.png'
const Footer = () => {
  return (
    <footer className="w-full bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">

          {/* Column 1: Brand Block */}
          <div className=" flex-col items-start lg:col-span-1">

            <a className="flex items-center gap-2 mb-4" href="#">

              <img className="h-8 w-auto" src={logo} alt="Logo" />

            </a>

            {/* Description */}
            <p className="text-sm text-gray-500 mb-6 leading-relaxed max-w-xs">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">GitHub</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
              <a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Column 2: Product Links */}
          <div className="flex flex-col items-start lg:pl-10">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-5">
              Product
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Technologies</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="flex flex-col items-start">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 4: Legal Links */}
          <div className="flex flex-col items-start">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-5">
              Legal
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* ================= BOTTOM SECTION: Copyright & Links ================= */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright Text */}
          <p className="text-sm text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          {/* Bottom Right Links */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;