import { useContext, useEffect, useState } from "react";
import { EpisodeContext } from '../../contexts/episodeContext'

const Player = () => {
    const [isPlaying, setIsPlaying] = useState();
    const [audio] = useState(new Audio());
    const [ episode ] = useContext(EpisodeContext);

    useEffect(() => {
        if (!episode)
            return;
        
        setIsPlaying(false); 
        audio.setAttribute('src', episode.media);
        audio.load();
    }, [episode, audio])

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
        episode && 
        <div className="flex">
            <div onClick={onClickPlayPauseHandler} className="inline-block mr-1 cursor-pointer">
                {!isPlaying && <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>}
                {isPlaying && <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>}
            </div>
            <span className="self-center">{episode.title}</span>
        </div>
    )
}

export default Player;