import React from "react";
import YouTube from "react-youtube";
import { X } from "lucide-react";

function Viewer({ onClose, videoId, opts }) {
  return (
    <div className="fixed z-10 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-top ">
      <div className="mt-20 flex flex-col items-top w-3/4">
        <button onClick={onClose} className="place-self-end">
          <X size={30} />
        </button>
        <div className="rounded-xl">
          <YouTube videoId={videoId} opts={opts} />
        </div>
      </div>
    </div>
  );
}

export default Viewer;
