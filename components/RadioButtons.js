import styles from "../styles/Radio.module.scss";
import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStepBackward} from "@fortawesome/free-solid-svg-icons";
import {faStepForward} from "@fortawesome/free-solid-svg-icons";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {faPauseCircle} from "@fortawesome/free-solid-svg-icons";
import {faShuffle} from "@fortawesome/free-solid-svg-icons";


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
        let random;
        do {
            random = Math.floor(Math.random() * 4)
        } while (random === currentStation);

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
                <div onClick={() => prevStation()}><FontAwesomeIcon icon={faStepBackward} className={styles.radio_buttons}/></div>

                {isPlaying ? <div onClick={() => handleRadio()}><FontAwesomeIcon icon={faPauseCircle} className={styles.radio_buttons}/></div> :
                             <div onClick={() => handleRadio()}><FontAwesomeIcon icon={faPlayCircle} className={styles.radio_buttons}/></div>}

                <div onClick={() => nextStation()}><FontAwesomeIcon icon={faStepForward} className={styles.radio_buttons}/></div>
            </div>

            <div onClick={() => shuffleStation()}><FontAwesomeIcon icon={faShuffle} id={styles.shuffle}/></div>
        </div>
    )
}

export default RadioButtons;