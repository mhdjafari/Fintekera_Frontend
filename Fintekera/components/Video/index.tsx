import React, { useRef, useEffect } from 'react';

const VideoPlayer = ({ videoFileName }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      videoElement.currentTime = 0;
      videoElement.play();
    };

    videoElement.addEventListener('ended', handleVideoEnd);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  const videoSource = `/videos/${videoFileName}`;

  const videoStyle = {
    transform: 'scale(1)', // Adjust the scale value as needed
    transition: 'transform 0.3s ease-in-out', // Add a transition for smoother effect
    display: 'block', // Ensure video is displayed as a block element
    outline: 'none', // Remove outline
    borderRadius: '20px', // Add border-radius for rounded corners
    overflow: 'hidden', // Hide overflow content
  };

  return (
    <div>
      <video ref={videoRef} controls={false} autoPlay muted style={videoStyle}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
