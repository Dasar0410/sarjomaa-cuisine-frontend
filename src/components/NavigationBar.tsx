import Logo from "../assets/bread.svg";

function NavigationBar() {
  return (
    <nav className="bg-prime text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <img src={Logo} className="h-9" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Sarjomaa-Cuisine</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-prime dark:bg-gray-800 md:dark:bg-prime dark:border-gray-700">
            <li>
              <a href="/" className="block py-2 px-3 rounded md:bg-transparent hover:text-gray-300 md:text-white md:p-0">Home</a>
            </li>
            <li>
              <a href="/recipes" className="block py-2 px-3 rounded text-white hover:text-gray-300 md:bg-transparent md:p-0">Recipes</a>
            </li>
            <li>
              <a href="/add-recipe" className="block py-2 px-3 rounded text-white hover:text-gray-300 md:bg-transparent md:p-0">Add Recipe</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 rounded text-white hover:text-gray-300 md:bg-transparent md:p-0">Profile</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 rounded text-white hover:text-gray-300 md:bg-transparent md:p-0">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;