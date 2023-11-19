import styles from "./track.module.scss";
import { IconButton } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import secondsToMMSS from "../../utils/secondsToMMSS";

const Track = ({ track }) => {
  const { id, src, title, preview, artists, duration } = track;

  const formattedDuration = secondsToMMSS(duration);

  return (
    <div className={styles.track}>
      <IconButton>
        <PlayArrow />
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
