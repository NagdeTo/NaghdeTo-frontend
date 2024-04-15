import React from "react";
import { AudioRecorder } from "react-audio-voice-recorder";

const VoiceRecorder = () => {
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };
  return (
    <AudioRecorder
      showVisualizer={true}
      onRecordingComplete={addAudioElement}
      audioTrackConstraints={{
        noiseSuppression: true,
        echoCancellation: true,
      }}
      downloadOnSavePress={true}
      downloadFileExtension="mp3"
    />
  );
};

export default VoiceRecorder;
