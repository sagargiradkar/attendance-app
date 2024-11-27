import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify'; // Import toast for notifications

const SelfieCapture = ({ onCapture }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  // Start the webcam
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = stream;
      setIsCameraOn(true);
      toast.success('Camera started successfully!');
    } catch (err) {
      // Error handling with toast notification
      toast.error('Unable to access your webcam. Please check your permissions.');
    }
  };

  // Stop the webcam
  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream?.getTracks();
    tracks?.forEach((track) => track.stop());
    videoRef.current.srcObject = null;
    setIsCameraOn(false);
    toast.info('Camera stopped.');
  };

  // Capture the image
  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/png');
    setCapturedImage(dataUrl);

    // Pass the captured image to the parent component
    if (onCapture) {
      onCapture(dataUrl);
    }

    // Notify success with toast
    toast.success('Selfie captured successfully!');
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Capture Your Selfie</h3>
      
      {/* Webcam feed */}
      <div className="relative mb-4">
        {isCameraOn ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="border-4 border-blue-500 rounded-lg w-full max-w-[400px] shadow-lg"
          ></video>
        ) : (
          <p className="text-gray-600">Webcam is off. Click "Start Camera" to begin.</p>
        )}
      </div>

      {/* Start / Stop camera buttons */}
      <div className="flex space-x-4">
        {isCameraOn ? (
          <button
            onClick={stopCamera}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg"
          >
            Stop Camera
          </button>
        ) : (
          <button
            onClick={startCamera}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg"
          >
            Start Camera
          </button>
        )}
        
        {isCameraOn && (
          <button
            onClick={captureImage}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg"
          >
            Capture Selfie
          </button>
        )}
      </div>

      {/* Display captured image */}
      {capturedImage && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Captured Image:</h4>
          <img
            src={capturedImage}
            alt="Captured Selfie"
            className="w-40 h-40 object-cover rounded-lg border-4 border-gray-300"
          />
        </div>
      )}

      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default SelfieCapture;
