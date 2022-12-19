import RadioButtons from "./RadioButtons";

const stations = [
    {
        name: 'Power 181',
        audio: 'http://listen.181fm.com/181-jazzmix_128k.mp3?listenerId=esAdblock055092&amp;aw_0_1st.playerid=esPlayer&amp;aw_0_1st.skey=1671462156&amp;aw_0_req.gdpr=true',
        current_song: 'STAR WALKIN\' (League of Legends Worlds Anthem) [Explicit]',
        current_artist: 'Lil Nas X',
        current_image: 'https://m.media-amazon.com/images/I/41m1ISag3LL._SL160_.jpg'
    },
    {
        name: 'The Beat (HipHop/R&B)',
        audio: 'http://listen.181fm.com/181-soul_128k.mp3?listenerId=esAdblock055092&amp;aw_0_1st.playerid=esPlayer&amp;aw_0_1st.skey=1671462974&amp;aw_0_req.gdpr=true',
        current_song: 'I Like You (A Happier Song) [Clean] (with Doja Cat)',
        current_artist: 'Post Malone',
        current_image: 'https://m.media-amazon.com/images/I/21O8GXJi8ML._SL160_.jpg'
    },
    {
        name: 'Christmas Classics',
        audio: 'http://listen.181fm.com/181-xtraditional_128k.mp3?listenerId=esAdblock055092&amp;aw_0_1st.playerid=esPlayer&amp;aw_0_1st.skey=1671463009&amp;aw_0_req.gdpr=true',
        current_song: 'While the Angelus Was Ringing',
        current_artist: 'Frank Sinatra',
        current_image: 'https://m.media-amazon.com/images/I/51Ss6N3VTFL._SL160_.jpg"'
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
    return (
        <div>
            <h2>Radio 2000</h2>
            <div>Image</div>
            <h1>Song name</h1>
            <RadioButtons />
            <figure>
                <figcaption>Listen to the T-Rex:</figcaption>
                <audio
                    controls
                    src="">
                    <a href="">
                        Download audio
                    </a>
                </audio>
            </figure>

        </div>
    )
}

export default Radio;