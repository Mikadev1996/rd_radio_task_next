import RadioButtons from "./RadioButtons";
import {useState} from "react";
import styles from '../styles/Radio.module.scss';
import next from '../public/next.png';

const stations = [
    {
        name: 'Power 181',
        audio: 'http://listen.181fm.com/181-powerexplicit_128k.mp3?listenerId=esAdblock055092&amp;aw_0_1st.playerid=esPlayer&amp;aw_0_1st.skey=1671464603&amp;aw_0_req.gdpr=true',
        current_song: 'STAR WALKIN\' (League of Legends Worlds Anthem) [Explicit]',
        current_artist: 'Lil Nas X',
        current_image: 'https://m.media-amazon.com/images/I/41m1ISag3LL._SL160_.jpg'
    },
    {
        name: 'The Beat (HipHop/R&B)',
        audio: 'http://listen.181fm.com/181-beat_128k.mp3?listenerId=esAdblock055092&amp;aw_0_1st.playerid=esPlayer&amp;aw_0_1st.skey=1671464608&amp;aw_0_req.gdpr=true',
        current_song: 'I Like You (A Happier Song) [Clean] (with Doja Cat)',
        current_artist: 'Post Malone',
        current_image: 'https://m.media-amazon.com/images/I/21O8GXJi8ML._SL160_.jpg'
    },
    {
        name: 'Christmas Classics',
        audio: 'http://listen.181fm.com/181-xtraditional_128k.mp3?listenerId=esAdblock055092&amp;aw_0_1st.playerid=esPlayer&amp;aw_0_1st.skey=1671463009&amp;aw_0_req.gdpr=true',
        current_song: 'While the Angelus Was Ringing',
        current_artist: 'Frank Sinatra',
        current_image: 'https://m.media-amazon.com/images/I/51Ss6N3VTFL._SL160_.jpg'
    },
    {
        name: 'UK Top 40',
        audio: 'http://listen.181fm.com/181-uktop40_128k.mp3?listenerId=esAdblock055092&amp;aw_0_1st.playerid=esPlayer&amp;aw_0_1st.skey=1671463069&amp;aw_0_req.gdpr=true',
        current_song: 'Late Night Talking',
        current_artist: 'Harry Styles',
        current_image: 'https://m.media-amazon.com/images/I/411key4w0jL._SL160_.jpg',
    }
]


const Radio = () => {
    const [currentStation, setCurrentStation] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false);

    const nextStation = () => {
        if (currentStation === stations.length - 1) {
            setCurrentStation(0);
            return;
        }

        setCurrentStation(currentStation + 1);
    }

    const prevStation = () => {
        if (currentStation === 0) {
            setCurrentStation(3);
            return;
        }
        setCurrentStation(currentStation - 1);
    }

    const shuffleStation = () => {
        let current = currentStation;
        while (current === currentStation) {
            current = Math.floor(Math.random() * 4)
        }
        setCurrentStation(current)
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
            <p>{stations[currentStation].name}</p>
            <div>
                <img className={styles.song_image} src={stations[currentStation].current_image} alt='song'/>
            </div>
            <h1 className={styles.song_name}>{stations[currentStation].current_song}</h1>
            <p>{stations[currentStation].current_artist}</p>
            <RadioButtons />

            <audio id='radio' hidden={true}
                controls
                src={stations[currentStation].audio}>
                <a href={stations[currentStation].audio}>
                    Download audio
                </a>
            </audio>

            <div className={styles.buttons_container}>
                <img onClick={() => nextStation()} className={styles.radio_buttons} src='/previous.png' alt='previous_song'/>

                {isPlaying ? <img className={styles.radio_buttons} src='/pause.png' alt='pause_song' onClick={() => handleRadio()}/> :
                    <img className={styles.radio_buttons} src='play.png' alt='play_song' onClick={() => handleRadio()}/>}

                <img onClick={() => prevStation()} className={styles.radio_buttons} src='/next.png' alt='next_song'/>
            </div>
            <img onClick={() => shuffleStation()} id={styles.shuffle} className={styles.radio_buttons} src='/shuffle.png' alt='shuffle_song'/>

        </div>
    )
}

export default Radio;