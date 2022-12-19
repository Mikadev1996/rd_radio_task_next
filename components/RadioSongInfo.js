import styles from "../styles/Radio.module.scss";

const RadioSongInfo = ({currentStation}) => {
    return (
        <div className={styles.container}>
            <p>{currentStation.name}</p>
            <div>
                <img className={styles.song_image} src={currentStation.current_image} alt='song'/>
            </div>
            <h1 className={styles.song_name}>{currentStation.current_song}</h1>
            <p>{currentStation.current_artist}</p>
        </div>
    )
}

export default RadioSongInfo;

