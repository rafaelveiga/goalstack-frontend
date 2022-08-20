const Header = () => {
  const MENU_ITEMS = ["My Goals", "Logout"];

  return (
    <header className="rounded bg-white border-zinc-100 shadow dark:bg-zinc-800 border dark:border-zinc-700">
      <div className="container-fluid mx-auto py-5 px-5">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold dark:text-zinc-100 text-zinc-700">
            Goal
            <span className="text-blue-500">Stack</span>
          </div>

          <div className="flex items-center">
            {MENU_ITEMS.map((item, index) => (
              <a
                key={item}
                href="#"
                className="text-sm ml-4 font-bold hover:text-blue-500 transition-colors text-gray-600 dark:text-gray-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
