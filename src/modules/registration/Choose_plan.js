export const Choose_plan = ({ handleClick }) => {
  return (
    <>
      <div style={{ height: "85vh" }}>
        <div className="m-auto mt-32 w-80">
          <div className="text-center">
            <i
              className="fa-solid fa-circle-check fa-3x"
              style={{ color: "red" }}
            ></i>
          </div>
          <div className="text-center mt-4 text-sm">
            STEP <strong>2</strong> of <strong>3</strong>
          </div>
          <div className="text-center text-4xl mt-2 font-semibold">
            Choose your plan.
          </div>
          <div className="flex flex-row mt-4 ml-3">
            <div className="mt-2">
              <i class="fa-solid fa-check fa-2x" style={{ color: "red" }}></i>
            </div>
            <div className="ml-2 text-xl">
              No commitments, cancel <br />
              anytime.
            </div>
          </div>
          <div className="flex flex-row mt-3 ml-3">
            <div className="mt-2">
              <i class="fa-solid fa-check fa-2x" style={{ color: "red" }}></i>
            </div>
            <div className="ml-2 text-xl">
              Everything on Netflix for one <br />
              low price.
            </div>
          </div>
          <div className="flex flex-row mt-3 ml-3">
            <div className="mt-2">
              <i class="fa-solid fa-check fa-2x" style={{ color: "red" }}></i>
            </div>
            <div className="ml-2 text-xl mt-2">
              No ads and no extra fees. Ever.
            </div>
          </div>
          <div className="mt-8">
            <button
              className="bg-red-600 p-2 px-4 rounded h-12 font-semibold text-lg text-white"
              style={{ width: "22rem", height: "4rem", fontSize: "1.5rem" }}
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
