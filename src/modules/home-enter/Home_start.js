import * as React from "react";
import background from "../../assets/images/background-enter.jpg";
import logo from "../../assets/images/logo.png";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import enjoy from "../../assets/images/enjoy.png";
import download from "../../assets/images/download.png";
import watch from "../../assets/images/watch.png";
import children from "../../assets/images/children.png";
import { Frequent_question } from "../../shared/Frequent_question";
import { useRef, useState } from "react";
import { useAlert } from "react-alert";

const useStyles = makeStyles(() => ({
  root: {
    background: "rgb(255,255,255)",
  },
}));

export const Home_start = () => {
  const alert = useAlert();

  const foot = [
    "FAQ",
    "Help Centre",
    "Account",
    "Media Centre",
    "Investor Relations",
    "Jobs",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preference",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notice",
    "Only on Netflix",
  ];
  const theme = createTheme({
    palette: {
      primary: {
        main: "#757575",
      },
      secondary: {
        main: "#757575",
      },
    },
  });

  const classes = useStyles();

  const [toggle1, setToggle1] = useState(false);
  const userid1 = useRef("");

  const [toggle2, setToggle2] = useState(false);
  const userid2 = useRef("");

  const click1 = () => {
    if (toggle1 === false) {
      return (
        <button
          className="bg-red-600 p-3 px-10 text-2xl"
          onClick={handleStarted1}
        >
          Get Started &#8594;
        </button>
      );
    } else {
      return (
        <a href="/registration">
          <button
            className="bg-red-600 p-3 px-10 text-2xl"
            onClick={handleStarted1}
          >
            Get Started &#8594;
          </button>
        </a>
      );
    }
  };

  const handleStarted1 = () => {
    console.log("handle started");
    const uid = userid1.current.value;
    if (uid !== "" && toggle1 === false) {
      setToggle1(true);
    } else {
      alert.show("Incomplete Fields");
    }
  };

  const click2 = () => {
    if (toggle2 === false) {
      return (
        <button
          className="bg-red-600 p-3 px-10 text-2xl"
          onClick={handleStarted2}
        >
          Get Started &#8594;
        </button>
      );
    } else {
      return (
        <a href="/registration">
          <button
            className="bg-red-600 p-3 px-10 text-2xl"
            onClick={handleStarted2}
          >
            Get Started &#8594;
          </button>
        </a>
      );
    }
  };

  const handleStarted2 = () => {
    console.log("handle started");
    const uid = userid2.current.value;
    if (uid !== "" && toggle2 === false) {
      setToggle2(true);
    } else {
      alert.show("Incomplete Fields");
    }
  };

  return (
    <div>
      <div
        className="bg-auto bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="h-screen text-white">
          <div className="flex flex-row mx-8 justify-between">
            <div className="w-52">
              <img src={logo} alt="logo..."></img>
            </div>
            <div className="m-9">
              <span>
                <select className="w-24 py-2 mx-5 border-white rounded border text-center bg-black">
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </span>
              <span>
                <a href="/login">
                  <button className="bg-red-600 p-2 px-4 rounded">
                    Sign In
                  </button>
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center mt-32 text-center ">
            <div className="text-7xl font-semibold">
              Unlimited movies, TV <br />
              shows and more.
              <p className="text-3xl font-normal mt-5">
                Watch anywhere. Cancel anytime.
              </p>
            </div>
            <div className="text-xl mt-6 font-normal">
              Ready to watch? Enter your email to create or restart your
              membership.
            </div>
            <div className="mt-5">
              <ThemeProvider theme={theme}>
                <TextField
                  id="filled-basic"
                  label="Email address"
                  variant="filled"
                  className={classes.root}
                  inputRef={userid1}
                  sx={{ width: 500 }}
                />
              </ThemeProvider>
              {click1()}
            </div>
          </div>
        </div>
      </div>
      <div className="h-2 bg-stone-800"></div>
      <div className="flex flex-row justify-around h-5/6 bg-black text-white">
        <div className="mt-28">
          <p className="text-5xl font-semibold ml-16">Enjoy on your TV.</p>
          <p className="mt-5 text-2xl ml-16">
            Watch on smart TVs, PlayStation, Xbox,
            <br /> Chromecast, Apple TV, Blu-ray players and
            <br /> more.
          </p>
        </div>
        <div className="h-96 w-2/5 ml-10">
          <img src={enjoy} alt="enjoy..."></img>
        </div>
      </div>
      <div className="h-2 bg-stone-800"></div>
      <div className="flex flex-row justify-around h-5/6 bg-black text-white">
        <div className="h-96 w-3/12 ml-16 mt-5">
          <img src={download} alt="download..."></img>
        </div>
        <div className="mt-28">
          <p className="text-5xl font-semibold">
            Download your shows
            <br /> to watch offline.
          </p>
          <p className="mt-5 text-2xl">
            Save your favourites easily and always have
            <br /> something to watch.
          </p>
        </div>
      </div>
      <div className="h-2 bg-stone-800"></div>
      <div className="flex flex-row justify-around h-5/6 bg-black text-white">
        <div className="mt-36">
          <p className="text-5xl font-semibold ml-16">Watch everywhere.</p>
          <p className="mt-5 text-2xl ml-16">
            Stream unlimited movies and TV shows on your
            <br /> phone, tablet, laptop, and TV.
          </p>
        </div>
        <div className="h-96 w-4/12 ml-10 mt-8">
          <img src={watch} alt="watch..."></img>
        </div>
      </div>
      <div className="h-2 bg-stone-800"></div>
      <div className="flex flex-row justify-around h-5/6 bg-black text-white">
        <div className="h-96 w-4/12 ml-16 mt-5">
          <img src={children} alt="children..."></img>
        </div>
        <div className="mt-28">
          <p className="text-5xl font-semibold">
            Create profiles for <br />
            children.
          </p>
          <p className="mt-5 text-2xl mr-8">
            Send children on adventures with their
            <br /> favourite characters in a space made just for
            <br /> them—free with your membership.
          </p>
        </div>
      </div>
      <div className="h-2 bg-stone-800"></div>
      <div className="bg-black text-white text-center h-fit">
        <div className="text-transparent">h</div>
        <div className="mt-8 text-5xl font-semibold">
          Frequently Asked Questions
        </div>
        <div className="w-3/6 m-auto mt-10">
          <div>
            <Frequent_question
              heading="What is Netflix ?"
              content="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
            />
          </div>
          <div>
            <Frequent_question
              heading="How much does Netflix cost ?"
              content="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
            />
          </div>
          <div>
            <Frequent_question
              heading="Where can I watch ?"
              content="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
            />
          </div>
          <div>
            <Frequent_question
              heading="How do I cancel ?"
              content="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
            />
          </div>
          <div>
            <Frequent_question
              heading="What can I watch on Netflix ?"
              content="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
            />
          </div>
          <div>
            <Frequent_question
              heading="Is Netflix good for kids ?"
              content="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
            />
          </div>
          <div className="mb-16">
            <div className="text-xl mt-10 font-normal">
              Ready to watch? Enter your email to create or restart your
              membership.
            </div>
            <div className="mt-5">
              <ThemeProvider theme={theme}>
                <TextField
                  id="filled-basic"
                  label="Email address"
                  variant="filled"
                  className={classes.root}
                  inputRef={userid2}
                  sx={{ width: 500 }}
                />
              </ThemeProvider>
              {click2()}
            </div>
          </div>
          <div className="text-transparent">b</div>
        </div>
      </div>
      <div className="h-2 bg-stone-800"></div>
      <div className="bg-black h-96 text-white">
        <div className="text-transparent">h</div>
        <div className="w-7/12 m-auto text-stone-500">
          <div className="mt-10 text-base">
            Questions? Call{" "}
            <a href="/" className="no-underline hover:underline">
              000-800-919-1694
            </a>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-7 text-sm">
            {foot.map((element) => (
              <p>
                <a href="/" className="no-underline hover:underline">
                  {element}
                </a>
              </p>
            ))}
          </div>
          <div>
            <span>
              <select className="w-24 py-3 mt-5 border-stone-500 rounded border text-center bg-black">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </span>
          </div>
          <div className="mt-8 text-sm">Netflix India</div>
        </div>
      </div>
    </div>
  );
};
