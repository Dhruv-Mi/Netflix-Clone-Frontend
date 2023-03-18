import logo from "../../assets/images/logo.png";

export const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="w-48 ml-10">
          <img src={logo} alt="logo..."></img>
        </div>
        <div className="m-10 mr-20 text-xl font-bold hover:underline">
          <a href="/">Sign In</a>
        </div>
      </div>
      <div className="bg-stone-300 h-px"></div>
    </>
  );
};
