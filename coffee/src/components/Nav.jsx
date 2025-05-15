import Button from "./Button";
const Nav = () => {
  const links = [
    {
      link: "Home",
      des: "/",
    },
    {
      link: "Menu",
      des: "/menu",
    },
    {
      link: "Rewards",
      des: "/rewards",
    },
    {
      link: "Gift Cards",
      des: "/gift-cards",
    },
    {
      link: "Stores",
      des: "/stores",
    },
  ];

  return (
    <nav className="h-1/6 flex w-full items-center justify-center">
      <header className="flex items-center justify-evenly w-full">
        <img src="logo.png" alt="" className="h-20" />
        <ul className="flex gap-6 text-lg">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.des}>{link.link}</a>
            </li>
          ))}
        </ul>
        <Button text={"sign in"} />
      </header>
    </nav>
  );
};
export default Nav;
