import styles from "../styles/Radio.module.scss";
import {useState} from "react";

const RadioButtons = ({stations, currentStation, setCurrentStation}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const nextStation = () => {
        setIsPlaying(false);
        if (currentStation === stations.length - 1) {
            setCurrentStation(0);
            return;
        }

        setCurrentStation(currentStation + 1);
    }

    const prevStation = () => {
        setIsPlaying(false);
        if (currentStation === 0) {
            setCurrentStation(3);
            return;
        }
        setCurrentStation(currentStation - 1);
    }

    const shuffleStation = () => {
        const random = Math.floor(Math.random() * 4)
        setCurrentStation(random)
        setIsPlaying(false);
    }

    const handleRadio = () => {
        const radio = document.getElementById('radio');
        if (isPlaying) {
            radio.pause();
            setIsPlaying(false);
        } else {
            radio.play();
            setIsPlaying(true);
        }
    }

    return (
        <div className={styles.container}>

            <audio id='radio' hidden={true}
                   controls
                   src={stations[currentStation].audio}>
                <a href={stations[currentStation].audio}>
                    Download audio
                </a>
            </audio>

            <div className={styles.buttons_container}>
                <img onClick={() => prevStation()} className={styles.radio_buttons} src='/previous.png' alt='previous_song'/>

                {isPlaying ? <img className={styles.radio_buttons} src='/pause.png' alt='pause_song' onClick={() => handleRadio()}/> :
                    <img className={styles.radio_buttons} src='play.png' alt='play_song' onClick={() => handleRadio()}/>}

                <img onClick={() => nextStation()} className={styles.radio_buttons} src='/next.png' alt='next_song'/>
            </div>
            <img onClick={() => shuffleStation()} id={styles.shuffle} className={styles.radio_buttons} src='/shuffle.png' alt='shuffle_song'/>

        </div>
    )
}

export default RadioButtons;