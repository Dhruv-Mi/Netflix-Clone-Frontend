import credit from "../../assets/images/credit.png";
import upi from "../../assets/images/upi.png";

export const Payment = () => {
  return (
    <>
      <div style={{ height: "80vh" }}>
        <div className="flex flex-col w-5/12 m-auto mt-16 text-center">
          <div>
            <i
              class="fa-solid fa-lock fa-2x"
              style={{ color: "rgb(239 68 68)" }}
            ></i>
          </div>
          <div className="text-xs mt-8 font-medium">
            STEP <strong>3</strong> OF <strong>3</strong>
          </div>
          <div className="text-3xl font-semibold mt-3">Choose how to pay</div>
          <div className="text-xl mt-4">
            Your payment is encrypted and you can change how <br />
            you pay anytime.
          </div>
          <div className="text-lg font-semibold mt-4">
            Secure for peace of mind. <br />
            Cancel easily online.
          </div>
          <div className="mt-10 m-auto w-96 flex flex-col">
            <div className="text-right">
              <span className="mr-2 text-sm">End-to-end encrypted</span>
              <span>
                <i
                  class="fa-solid fa-lock"
                  style={{ color: "rgb(251 191 36)" }}
                ></i>
              </span>
            </div>
            <div className="mt-1">
              <a href="/home">
                <div className="h-14 flex flex-row border-2 rounded border-stone-300">
                  <div className="mt-3 ml-2">Credit or Debit Card</div>
                  <div className="w-40 h-10 mt-2 ml-3">
                    <img src={credit} alt="credit..."></img>
                  </div>
                </div>
              </a>
            </div>
            <div className="mt-1">
              <a href="/home">
                <div className="h-14 flex flex-row border-2 rounded border-stone-300">
                  <div className="mt-3 ml-2">UPI AutoPay</div>
                  <div className="w-60 h-10 mt-4 ml-3">
                    <img src={upi} alt="UPI..."></img>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
