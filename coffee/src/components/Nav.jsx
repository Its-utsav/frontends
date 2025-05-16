import Button from "./Button";
const Nav = () => {
  const links = [
    {
      link: "Home",
      des: "#",
    },
    {
      link: "Menu",
      des: "#",
    },
    {
      link: "Rewards",
      des: "#",
    },
    {
      link: "Gift Cards",
      des: "#",
    },
    {
      link: "Stores",
      des: "#",
    },
  ];

  return (
    <nav className="h-1/6 flex w-full items-center justify-center">
      <header className="md:flex md:w-full md:items-center md:justify-evenly">
        <img src="logo.png" alt="" className="h-20" />

        <ul className="flex items-center justify-center gap-6 text-lg text-white">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.des}>{link.link}</a>
            </li>
          ))}
        </ul>
        <Button text={"sign in"} />
      </header>
      <div className="flex flex-col gap-0.5 md:hidden">
        <div className="h-2 w-4 bg-black block"></div>
        <div className="h-2 w-4 bg-black block"></div>
        <div className="h-2 w-4 bg-black block"></div>
      </div>
    </nav>
  );
};
export default Nav;
