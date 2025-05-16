import Nav from "./components/Nav";

const LargeText = ({ text, css }) => {
  return <p className={`text-7xl font-bold text-center h-24 ${css}`}>{text}</p>;
};

const App = () => {
  return (
    <>
      <Nav />

      <main className=" text-white h-5/6">
        <LargeText text="Good Coffee" css={"text-green-800"} />
        <LargeText
          text="Good Moods"
          css={"text-shadow-md text-shadow-gray-400"}
        />
        <img
          src="coffee-beans.png"
          alt="coffee-beans"
          className="absolute h-screen w-screen top-0 left-0 -z-10 object-cover"
        />
        {/* <div className="flex items-center justify-center h-screen w-full absolute  left-80 -z-10"> */}
        <img
          src="coffee-cups.png"
          alt="coffee-cups"
          className="h-9/10 -z-10 absolute top-10 left-80 object-cover"
        />
        {/* </div> */}
      </main>
    </>
  );
};

export default App;
