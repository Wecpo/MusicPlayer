import trackList from "../../assets/trackList";
import Track from "../../components/Track/Track";
import styles from "./mainPage.module.scss";

const MainPage = () => (
  <div className={styles.search}>
    <>Track search</>
    <div className={styles.list}>
      {trackList.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  </div>
);
export default MainPage;
