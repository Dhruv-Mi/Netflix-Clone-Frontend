import { useState } from "react";
import { Account_setting } from "./Account_setting";
import { Create_account } from "./Create_account";
import { Choose_plan } from "./Choose_plan";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Navbar_sign_out } from "./Navbar_sign_out";
import { Plan_selection } from "./Plan_selection";
import { Payment } from "./Payment";

export const Registration = () => {
  const [bar, setBar] = useState(<Navbar />);
  var check = 0;
  const onShow = () => {
    if (check === 0) {
      setmiddle(<Create_account handleClick={onShow} />);
      check = 1;
    } else if (check === 1) {
      setmiddle(<Choose_plan handleClick={onShow} />);
      setBar(<Navbar_sign_out />);
      check = 2;
    } else if (check === 2) {
      setmiddle(<Plan_selection handleClick={onShow} />);
      setBar(<Navbar_sign_out />);
      check = 3;
    } else if(check===3){
      setmiddle(<Payment/>);
      setBar(<Navbar_sign_out/>);
    }
    console.log("Click " + check);
  };
  const [middle, setmiddle] = useState(
    <Account_setting handleClick={onShow} />
  );

  return (
    <>
      <div>{bar}</div>
      <div>{middle}</div>
      <div>
        <Footer />
      </div>
    </>
  );
};
