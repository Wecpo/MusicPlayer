import styles from "./track.module.scss";
import { IconButton } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";
import secondsToMMSS from "../../utils/secondsToMMSS";
import { useContext } from "react";
import { AudioContext } from "../../context/AudioContext";
import classNames from "classnames";

const Track = ({ track }) => {
  const { id, src, title, preview, artists, duration } = track;

  const formattedDuration = secondsToMMSS(duration);

  const { currentTrack, isPlaying, handleToggleAudio } =
    useContext(AudioContext);

  const isCurrentTrack = currentTrack.id === id;

  return (
    <div className={classNames(styles.track, isCurrentTrack && styles.playing)}>
      <IconButton onClick={() => handleToggleAudio(track)}>
        {isCurrentTrack && isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img className={styles.preview} src={preview} alt="preview" />
      <div className={styles.credits}>
        <b>{title}</b>
        <p>{artists}</p>
      </div>
      <p>{formattedDuration}</p>
    </div>
  );
};

export default Track;
