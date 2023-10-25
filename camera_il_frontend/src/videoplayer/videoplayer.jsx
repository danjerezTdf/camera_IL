import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css'; // Asegúrate de importar el archivo de estilos CSS

const VideoPlayer = () => {
  const videoURL =
    'https://cmgw-online-fk.easy4ipcloud.com:8890/LCO/9E06092PBVAC6A8/0/1/20230727T224615/f6ac0757e6b49cadc798c5884b727ddd.m3u8?proto=https';

  return (
    <div className="centered-container">
      <div className="video-player-container">
        {/* La clase 'inverted-video' se aplicará solo a la etiqueta <video> */}
        <ReactPlayer url={videoURL} controls width="800px" playing={true} className="video-player" />
      </div>
    </div>
  );
};

export default VideoPlayer;

