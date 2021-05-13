import "./ContentBar.css";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import BPM120 from "../../assets/BPM/BPM120.mp3";

export default function ContentBar ({ note, setNote, song, setSong, userSongs, setUserSongs }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const BPM = useRef(new Audio(BPM120));
  const history = useHistory();

  function recordSong() {
    if (song.length) {
      BPM.current.pause();
      setIsPlaying(false);
      setUserSongs([...userSongs, song]);
      setNote("");
      setSong([]);
      history.push('/songs');
    } else {
      BPM.current.pause();
      setIsPlaying(false);
      setNote("Play some notes first!")
    }
  }

  function playPauseMetronome () {
    isPlaying ? BPM.current.pause() : BPM.current.play();
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="mainContainer">
      <div className="contentBar">
        <button className="record" onClick={ recordSong }>Record</button>
        <div className="metronome">
          <div>120 BPM &nbsp;</div>
          <button className={ isPlaying ? "playPauseMetronome glowingGreen" : "playPauseMetronome"} onClick={ playPauseMetronome } >{ isPlaying ? 'Pause' : 'Play' }</button>
        </div>
        <div className="noteTracker">Note: { note }</div>
      </div>
    </div>
  )
}
