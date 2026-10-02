import logo from '../../assets/logo-text.png'

const Navbar = () => {
  return (

    <nav className="w-full bg-page border-b border-page py-4 shadow-sm">

      {/* Main Container */}
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">

        <div className=" flex justify-start items-center">

          <a className="flex items-center gap-2" href="#">

            <img className="h-8 w-auto" src={logo} alt="Logo" />

          </a>
        </div>
        
        <ul className="flex justify-center items-center gap-8 text-sm font-medium" >
          <li><a href="#" className="text-pink transition-colors" >Home</a></li>
          <li><a href="#">Technologies</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="flex justify-end items-center gap-6">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Sign In
          </a>
          <button className="bg-button hover:bg-pink-600 text-white text-sm font-medium py-2 px-6 rounded-full
           transition-all duration-300 shadow-md hover:shadow-lg">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
