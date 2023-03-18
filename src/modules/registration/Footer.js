export const Footer = () => {
  const foot = [
    "FAQ",
    "Help Centre",
    "Netflix Shop",
    "Terms of Use",
    "Privacy",
    "Cookie Preference",
    "Corporate Information",
  ];
  return (
    <>
      <div className="bg-stone-100 h-64 text-white">
        <div className="text-transparent">h</div>
        <div className="w-7/12 ml-20 text-stone-500">
          <div className="mt-5 text-base">
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
              <select className="w-24 py-3 mt-5 border-stone-500 rounded border text-center">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
