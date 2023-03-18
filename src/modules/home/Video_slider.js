import * as React from "react";
import { useState } from "react";
import overlay from "../../assets/video/overlay.mp4";
import "../../css/home/Overlay.css";
import VideoPlayer from "react-background-video-player";
import overlay_picture from "../../assets/images/overlay_picture.png";
import Modal from "@mui/material/Modal";
import { Modal_player } from "./Modal_player";

export const Video_slider = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [mute, setMute] = useState(true);
  const [icon, setIcon] = useState(
    <i
      className="fa-solid fa-volume-xmark fa-xl"
      style={{ color: "white" }}
    ></i>
  );
  const handleClick = () => {
    console.log("click sound");
    if (mute === true) {
      setIcon(
        <i
          className="fa-solid fa-volume-high fa-xl"
          style={{ color: "white" }}
        ></i>
      );
      setMute(false);
    } else {
      setIcon(
        <i
          className="fa-solid fa-volume-xmark fa-xl"
          style={{ color: "white" }}
        ></i>
      );
      setMute(true);
    }
  };
  return (
    <>
      <div
        style={{
          width: "100vh",
          height: "100vh",
        }}
      >
        <VideoPlayer
          className="video"
          src={overlay}
          autoPlay={true}
          loop={true}
          volume={1}
          muted={mute}
        />
        <div className="absolute bottom-32 left-7">
          <div className="flex flex-col w-2/5">
            <div className="w-80">
              <img src={overlay_picture}></img>
            </div>
            <div className="text-white ml-5 text-lg font-medium mt-3">
              In 1980s Indiana, a group of young friends witness supernatural
              forces and secret government exploits. As they search for answers,
              the children unravel a series of extraordinary mysteries.
            </div>
            <div className="mt-5">
              <span className="mx-5">
                <button className="bg-white rounded px-8 py-2 text-xl font-semibold hover:bg-stone-300">
                  <i className="fa-solid fa-play mr-2 fa-lg"></i>
                  Play
                </button>
              </span>
              <span>
                <button
                  className="bg-stone-500 opacity-75 text-white rounded px-8 py-2 text-xl font-semibold hover:bg-stone-400"
                  onClick={handleOpen}
                >
                  <i className="fa-solid fa-circle-info mr-2 fa-lg"></i>
                  More Info
                </button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Modal_player />
                </Modal>
              </span>
              <span className="mx-5">
                <button
                  className="rounded-full px-3 py-2"
                  onClick={handleClick}
                >
                  {icon}
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
