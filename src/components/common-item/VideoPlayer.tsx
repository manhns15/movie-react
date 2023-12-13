import React, { useRef, useState, useEffect } from 'react';

interface VideoPlayerProps {
  videoSource: string;
  autoPlay?: boolean;
  autoRepeat?: boolean;
  startTime?: number;
}

const CustomVideoPlayer: React.FC<VideoPlayerProps> = ({ videoSource, autoPlay = false, autoRepeat = false, startTime = 0 }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  // const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [volume] = useState(autoPlay ? 0 : 1);
  const [, setIsEnded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.currentTime = startTime;
      if (autoPlay) {
        videoRef.current.play();
      }
    }
  }, [volume, autoPlay, startTime]);

  useEffect(() => {
    const handleEnded = () => {
      setIsEnded(true);

      if (autoRepeat && videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleEnded);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleEnded);
      }
    };
  }, [autoRepeat]);

  return (
    <div>
      <video
        ref={videoRef}
        src={videoSource}
        autoPlay={autoPlay}
      />
    </div>
  );
};

export default CustomVideoPlayer;