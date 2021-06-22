import { useContext, useEffect, useState } from "react";
import { EpisodePlayContext } from '../../contexts/episodePlayContext'

const Player = () => {
    const [isPlaying, setIsPlaying] = useState();
    const [audio] = useState(new Audio());
    const [ episodePlay ] = useContext(EpisodePlayContext);

    useEffect(() => {
        if (!episodePlay)
            return;
        
        setIsPlaying(false); 
        audio.setAttribute('src', episodePlay.episode.media);
        audio.load();
    }, [episodePlay, audio])

    const onClickPlayPauseHandler = () => {
        if (!audio)
            return;

        if (!audio.paused) {
            audio.pause();
            setIsPlaying(false);   
        }
        else {
            audio.play();
            setIsPlaying(true);
        }
    }
    
    return (
        episodePlay && 
        <div onClick={onClickPlayPauseHandler} className="flex cursor-pointer">
            <img src={episodePlay.podcast.image} alt={episodePlay.podcast.name} class="inline-block h-8 w-8 mr-2 rounded-sm shadow"></img>
            <span className="self-center">{episodePlay.episode.title}</span>
            <div className="inline-block ml-1 ">
                {!isPlaying && <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>}
                {isPlaying && <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>}
            </div>
        </div>
    )
}

export default Player;