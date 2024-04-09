import React, { useRef, useEffect } from 'react';

const VideoPlayer = ({ videoFileName }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      // Pause the video
      videoElement.pause();

      // Add a small delay to allow the transition to complete
      setTimeout(() => {
        // Reset the currentTime to 0
        videoElement.currentTime = 0;

        // Play the video again
        videoElement.play();
      }, 3000); // Adjust the delay time as needed
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

