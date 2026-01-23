import { useEffect, useRef } from 'react';
import Image from 'next/image';

const ASPECT_RATIO = 'aspect-[2/3]';

export default function GalleryCard({ item = {} }) {
  const videoRef = useRef(null);
  const {
    format = 'image',
    src,
    alt = '',
    caption = '',
    model = 'Custom',
  } = item;
  const isVideo = format.toLowerCase() === 'video';

  useEffect(() => {
    if (!isVideo || !videoRef.current) return undefined;

    const node = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.play().catch(() => {});
          } else {
            node.pause();
            node.currentTime = 0;
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVideo]);

  return (
    <div className="brand-card overflow-hidden">
      {!isVideo ? (
        <div className={`relative w-full ${ASPECT_RATIO}`}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 240px, 80vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className={`relative w-full ${ASPECT_RATIO} bg-gray-700`}>
          <video
            ref={videoRef}
            controls
            autoPlay
            className="w-full h-full object-cover"
            preload="auto"
            muted
            playsInline
            loop
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div className="p-4 space-y-1">
        {caption && <p className="text-white text-sm">{caption}</p>}
        <p className="brand-section-subhead text-brand-lavender text-xs">
          <span className="font-medium text-white">{model}</span>
        </p>
      </div>
    </div>
  );
}
