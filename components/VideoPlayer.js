import { useState, useEffect } from 'react';
import { storage } from '../firebaseConfig';

export default function VideoPlayer({ video }) {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      const videoRef = storage.ref(`videos/${video.id}`);
      const url = await videoRef.getDownloadURL();
      setUrl(url);
    };
    fetchVideoUrl();
  }, [video.id]);

  return (
    <div>
      <video src={url} controls />
    </div>
  );
}