import register_devices from "../../assets/images/register_devices.png";

export const Account_setting = ({ handleClick }) => {
  return (
    <>
      <div style={{ height: "80vh" }}>
        <div className="flex flex-col text-center mt-24">
          <div className="m-auto w-96">
            <img src={register_devices} alt="register..."></img>
          </div>
          <div className="text-sm mt-4">
            STEP <strong>1</strong> of <strong>3</strong>
          </div>
          <div className="text-3xl font-semibold mt-2">
            Finish setting up your <br />
            account
          </div>
          <div className="text-lg font-normal mt-4">
            Netflix is personalised for you.
            <br /> Create a password to watch on any
            <br /> device at any time.
          </div>
          <div className="mt-4">
            <button
              className="bg-red-600 p-2 px-4 rounded h-12 font-semibold text-lg text-white"
              style={{ width: "19rem", height: "4rem", fontSize: "1.5rem" }}
              onClick={handleClick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
