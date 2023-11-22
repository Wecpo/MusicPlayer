import { useState } from "react";
import trackList from "../../assets/trackList";
import Track from "../../components/Track/Track";
import styles from "./mainPage.module.scss";
import { Input } from "@mui/material";

const runSearch = (query) => {
  if (!query) {
    return trackList;
  }

  const lowerCaseQuery = query.toLowerCase();

  return trackList.filter(
    (track) =>
      track.title.toLowerCase().includes(lowerCaseQuery) ||
      track.artists.toLowerCase().includes(lowerCaseQuery)
  );
};

const MainPage = () => {
  const [tracks, setTracks] = useState(trackList);

  const handleChange = (event) => {
    const foundTracks = runSearch(event.target.value);
    setTracks(foundTracks);
  };

  return (
    <div className={styles.search}>
      <Input
        className={styles.input}
        placeholder="Search track"
        onChange={handleChange}
      />
      <div className={styles.list}>
        {tracks.map((track) => (
          <Track key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};
export default MainPage;
