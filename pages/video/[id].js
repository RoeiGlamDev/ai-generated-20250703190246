import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import VideoPlayer from '../components/VideoPlayer';

export default function VideoPage() {
  const router = useRouter();
  const [video, setVideo] = useState({});

  useEffect(() => {
    const fetchVideo = async () => {
      const videoRef = db.collection('videos').doc(router.query.id);
      const videoDoc = await videoRef.get();
      setVideo(videoDoc.data());
    };
    fetchVideo();
  }, [router.query.id]);

  return (
    <div>
      <VideoPlayer video={video} />
    </div>
  );
}