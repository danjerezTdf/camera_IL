import React, { useState, useRef } from 'react';
import axios from 'axios';
import './AudioRecorder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faStop, faPlay } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos que desees utilizar

const AudioRecorder = () => {
  const [audioBlob, setAudioBlob] = useState(null);
  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorder.current = new MediaRecorder(stream);

        mediaRecorder.current.ondataavailable = (e) => {
          if (e.data.size > 0) {
            audioChunks.current.push(e.data);
          }
        };

        mediaRecorder.current.onstop = () => {
          const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
          setAudioBlob(audioBlob);
        };

        mediaRecorder.current.start();
      })
      .catch((error) => {
        console.error('Error accessing microphone:', error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
      mediaRecorder.current.stop();
    }
  };

  const playAudio = () => {
    const audioURL = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioURL);
    audio.play();
  };

  const sendAudio = () => {
    if (audioBlob) {
      alert("enviado")
      // const formData = new FormData();
      // formData.append('audio', audioBlob);

      // axios.post('URL_DE_TU_CONTROLADOR', formData).then((response) => {
      //   // Maneja la respuesta del servidor si es necesario
      // });
    }
  };

  return (
    <div className="audio-recorder-container">
      <button className="audio-button" onClick={startRecording}>
        <FontAwesomeIcon icon={faCircle} /> {/* Icono de "Rec" */}
      </button>
      <button className="audio-button" onClick={stopRecording}>
        <FontAwesomeIcon icon={faStop} /> {/* Icono de "Stop" */}
      </button>
      <button className="audio-button" onClick={playAudio}> 
        <FontAwesomeIcon icon={faPlay} /> {/* Icono de "play" */}</button>
      <button className="audio-button" onClick={sendAudio}>Enviar Audio</button>
    </div>
  );
};

export default AudioRecorder;
