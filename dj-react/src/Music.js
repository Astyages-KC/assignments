import React, { useState, useEffect } from "react";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(
    () => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  return [playing, toggle];
};

const Music = ({ url="http://streaming.tdiradio.com:8000/house.mp3" }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button className="muzic" onClick={toggle}>{playing ? "Pause" : "Play Music"}</button>
    </div>
  );
};

export default Music;