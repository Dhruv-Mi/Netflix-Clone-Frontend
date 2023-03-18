export const Footer = () => {
  const foot = [
    "Audio Description",
    "Help Centre",
    "Gift Card",
    "Media Centre",
    "Investor Relations",
    "Jobs",
    "Terms of Use",
    "Privacy",
    "Cookie Preference",
    "Corporate Information",
    "Contact Us",
    "Legal Notice",
  ];
  return (
    <>
      <div>
        <div className="bg-black h-80 text-white">
          <div className="text-transparent">h</div>
          <div className="w-7/12 m-auto text-stone-500">
            <div className="mt-5 text-base">
              <a href="https://www.facebook.com/NetflixIN/" target="_blank">
                <i
                  class="fa-brands fa-facebook-f mr-7 fa-xl"
                  style={{ color: "white" }}
                ></i>
              </a>
              <a href="https://www.instagram.com/Netflix_IN/" target="_blank">
                <i
                  class="fa-brands fa-instagram mr-7 fa-xl"
                  style={{ color: "white" }}
                ></i>
              </a>
              <a href="https://twitter.com/netflixindia" target="_blank">
                <i
                  class="fa-brands fa-twitter mr-7 fa-xl"
                  style={{ color: "white" }}
                ></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg"
                target="_blank"
              >
                <i
                  class="fa-brands fa-youtube mr-7 fa-xl"
                  style={{ color: "white" }}
                ></i>
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
            <div className="mt-4 text-xs">&#169; 1997-2023 Netflix,Inc.</div>
          </div>
        </div>
      </div>
    </>
  );
};
