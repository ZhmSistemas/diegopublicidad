"use client";

import { useRef, useEffect } from "react";

type VideoInViewProps = {
  src: string;
  className?: string;
  loop?: boolean;
};

export default function VideoInView({ src, className, loop }: VideoInViewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video ref={videoRef} muted playsInline loop={loop} className={className}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
