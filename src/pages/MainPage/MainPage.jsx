import trackList from "../../assets/trackList";
import styles from "./mainPage.module.scss";

const MainPage = () => (
  <div className={styles.search}>
    <>Track search</>
    <div className={styles.list}>
      {trackList.map((track) => (
        <div>{JSON.stringify(track)}</div>
      ))}
    </div>
  </div>
);
export default MainPage;
