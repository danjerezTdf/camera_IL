import React, { useEffect, useState } from 'react';
import './videoplayer.css';
import axios from 'axios';

const VideoPlayer = () => {
  const [accessToken, setAccessToken] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await axios.get('http://localhost:5000/lechange/accessToken'); // ruta endpoint 
        setAccessToken(response.data.accessToken); 
      } catch (error) {
        setError('Error al obtener el accessToken _');
      }
    };

    fetchAccessToken();
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        accessToken && (
          <video controls>
            <source
              src={`https://open.imoulife.com/video/live/${accessToken}`}
              type="application/x-mpegURL"
            />
          </video>
        )
      )}
    </div>
  );
};

export default VideoPlayer;
