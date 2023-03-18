import { useState } from "react";

export const Plan_selection = ({ handleClick }) => {
  var content = [
    "Watch all you want. Ad-free.",
    "Recommendations just for you.",
    "Change or cancel your plan anytime.",
  ];
  var buttonContent = [
    { id: "mobile", content: "Mobile" },
    { id: "basic", content: "Basic" },
    { id: "standard", content: "Standard" },
    { id: "premium", content: "Premium" },
  ];
  var price = [
    { id: "mobile", content: "149" },
    { id: "basic", content: "199" },
    { id: "standard", content: "499" },
    { id: "premium", content: "649" },
  ];
  var quality = [
    { id: "mobile", content: "Good" },
    { id: "basic", content: "Good" },
    { id: "standard", content: "Better" },
    { id: "premium", content: "Best" },
  ];
  var mobile = [
    { icon: "mobile", content: "Phone" },
    { icon: "tablet", content: "Tablet" },
  ];
  var all = [
    { icon: "mobile", content: "Phone" },
    { icon: "tablet", content: "Tablet" },
    { icon: "computer", content: "Computer" },
    { icon: "tv", content: "TV" },
  ];

  const [color, setColor] = useState("basic");
  const correctSelection = (id) => {
    console.log(id);
    if (id === "mobile") {
      setColor("mobile");
    } else if (id === "basic") {
      setColor("basic");
    } else if (id === "standard") {
      setColor("standard");
    } else {
      setColor("premium");
    }
  };
  return (
    <>
      <div style={{ height: "145vh" }}>
        <div className="w-7/12 m-auto">
          <div className="flex flex-col mt-5">
            <div className="text-xs font-medium">
              STEP <strong>2</strong> of <strong>3</strong>
            </div>
            <div className="text-3xl font-semibold mt-2">
              Choose the plan that's right for you
            </div>
            <div className="mt-2">
              {content.map((element) => (
                <div className="flex flex-row">
                  <div className="mt-2">
                    <i
                      class="fa-solid fa-check fa-xl"
                      style={{ color: "red" }}
                    ></i>
                  </div>
                  <div className="ml-2 text-lg mt-2">{element}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col mt-2 ">
              <div className="sticky top-0">
                <div className="text-transparent bg-white h-4">h</div>
                <div className="flex flex-row justify-end bg-white">
                  {buttonContent.map((element) => (
                    <button
                      className={`bg-red-600 text-white w-32 h-32 text-lg font-semibold mx-3 ${
                        color === element.id ? "opacity-100" : "bg-red-400"
                      }`}
                      id={element.id}
                      onClick={() => correctSelection(element.id)}
                    >
                      {element.content}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-row justify-between text-lg">
                Monthly price
                <div className="flex flex-row">
                  {price.map((element) => (
                    <div
                      className={`mx-14 font-semibold ${
                        color === element.id ? "text-red-500" : "text-stone-500"
                      }`}
                      id={element.id}
                    >
                      &#8377; {element.content}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <hr></hr>
              </div>
              <div className="mt-3 flex flex-row justify-between text-lg">
                Video quality
                <div className="flex flex-row">
                  {quality.map((element) => (
                    <div
                      className={`mx-14 font-semibold ${
                        color === element.id ? "text-red-500" : "text-stone-500"
                      }`}
                      id={element.id}
                    >
                      {element.content}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <hr></hr>
              </div>
              <div className="mt-3 flex flex-row justify-between text-lg">
                Resolution
                <div className="flex flex-row">
                  <div
                    className={`font-semibold mx-14 ${
                      color === "mobile" ? "text-red-500" : "text-stone-500"
                    }`}
                  >
                    480p
                  </div>
                  <div
                    className={`font-semibold mx-14 ${
                      color === "basic" ? "text-red-500" : "text-stone-500"
                    }`}
                  >
                    720p
                  </div>
                  <div
                    className={`font-semibold mx-14 ${
                      color === "standard" ? "text-red-500" : "text-stone-500"
                    }`}
                  >
                    1080p
                  </div>
                  <div
                    className={`font-semibold mx-10 ${
                      color === "premium" ? "text-red-500" : "text-stone-500"
                    }`}
                  >
                    4K+HDR
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <hr></hr>
              </div>
              <div className="mt-3 flex flex-row justify-between text-lg">
                Devices you can use to watch
                <div className="flex flex-row">
                  <div className="flex flex-col mx-16 text-center">
                    {mobile.map((element) => (
                      <div className="mt-4">
                        <div>
                          <i
                            className={`fa-solid fa-${element.icon} fa-xl`}
                            style={{
                              color: `${
                                color === "mobile"
                                  ? "rgb(239 68 68)"
                                  : "rgb(120 113 108)"
                              }`,
                            }}
                          ></i>
                        </div>
                        <div
                          className={`text-sm mt-1 font-medium ${
                            color === "mobile"
                              ? "text-red-500"
                              : "text-stone-500"
                          }`}
                        >
                          {element.content}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col mx-9 text-center">
                    {all.map((element) => (
                      <div className="mt-4">
                        <div>
                          <i
                            className={`fa-solid fa-${element.icon} fa-xl`}
                            style={{
                              color: `${
                                color === "basic"
                                  ? "rgb(239 68 68)"
                                  : "rgb(120 113 108)"
                              }`,
                            }}
                          ></i>
                        </div>
                        <div
                          className={`text-sm mt-1 font-medium ${
                            color === "basic"
                              ? "text-red-500"
                              : "text-stone-500"
                          }`}
                        >
                          {element.content}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className="flex flex-col mx-14 text-center"
                    id="standard"
                  >
                    {all.map((element) => (
                      <div className="mt-4">
                        <div>
                          <i
                            className={`fa-solid fa-${element.icon} fa-xl`}
                            style={{
                              color: `${
                                color === "standard"
                                  ? "rgb(239 68 68)"
                                  : "rgb(120 113 108)"
                              }`,
                            }}
                          ></i>
                        </div>
                        <div
                          className={`text-sm mt-1 font-medium ${
                            color === "standard"
                              ? "text-red-500"
                              : "text-stone-500"
                          }`}
                        >
                          {element.content}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col mx-10 text-center">
                    {all.map((element) => (
                      <div className="mt-4">
                        <div>
                          <i
                            className={`fa-solid fa-${element.icon} fa-xl`}
                            style={{
                              color: `${
                                color === "premium"
                                  ? "rgb(239 68 68)"
                                  : "rgb(120 113 108)"
                              }`,
                            }}
                          ></i>
                        </div>
                        <div
                          className={`text-sm mt-1 font-medium ${
                            color === "premium"
                              ? "text-red-500"
                              : "text-stone-500"
                          }`}
                        >
                          {element.content}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-xs mt-10">
            <div className="font-medium text-stone-500">
              HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
              subject to your internet service and device capabilities. Not all
              content is available in all resolutions. See our{" "}
              <a href="/" className="text-blue-700">
                Terms of Use
              </a>{" "}
              for more details.
            </div>
            <br />
            <div className="font-medium text-stone-500">
              Only people who live with you may use your account. Watch on 4
              different devices at the same time with Premium, 2 with Standard,
              and 1 with Basic and Mobile.
            </div>
            <div className="mt-14 text-center">
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
      </div>
    </>
  );
};
