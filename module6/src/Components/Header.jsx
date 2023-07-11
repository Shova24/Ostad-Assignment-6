const Header = ({ title }) => {
  return (
    <header class="flex justify-center px-4 py-2 bg-blue-100">
      <h1 class={"font-semibold text-[34px]"}>{title}</h1>
    </header>
  );
};

export default Header;
