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
      </main>
    </>
  );
};

export default App;
