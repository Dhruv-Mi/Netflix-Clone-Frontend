import modal from "../../assets/images/modal.jpg";
import LazyLoad from "react-lazy-load";

export const Modal_player = () => {
  return (
    <>
      <div
        className="absolute top-1/2 left-1/2"
        style={{ transform: "translate(-50%,-50%)" }}
      >
        <div className="flex flex-col bg-white h-fit w-fit">
          <div>
            <LazyLoad>
              <img src={modal} alt="modal..."></img>
            </LazyLoad>
          </div>
          <div className="bg-stone-900 text-white">
            <div className="m-5 text-lg font-semibold ">
              <span className="text-green-600">98% match</span>
              <span className="ml-5">2022</span>
              <span className="ml-5">U/A 16+</span>
              <span className="ml-5">4 Seasons</span>
            </div>
            <div className="m-5 text-xl font-semibold">
              In 1980s Indiana, a group of young friends witness supernatural
              forces and secret government exploits. As they search for answers,
              the children unravel a series of extraordinary mysteries.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
