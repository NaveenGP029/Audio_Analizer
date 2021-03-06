import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './index.scss';

const UploadAudioPage = ({ sendAudioFile }) => {
  const [audioFile, setAudioFile] = useState(null);
  const navigate = useNavigate();   // to reroute to waveform analysis route

  const uploadFile = () => {
    // audioFile sent to lifted state in App.js, and rerouted
    sendAudioFile(audioFile);
    navigate('/analyzeAudio');
  }

  return (
    <div className='file-upload-form-page'>
      <div className='file-upload-form'>
        <input type='file' accept='audio/*' onChange={e => setAudioFile(e.target.files[0])} />
        <button onClick={uploadFile} disabled={audioFile === null} className="uploadButton">Upload</button>

        <hr />
        <a href='https://substancia.github.io/randomStorage/testmusic.mp3'target='_blank'
          rel='noopener noreferrer'><button>Download sample music</button></a>
      </div>
    </div>
  );
}

export default UploadAudioPage;