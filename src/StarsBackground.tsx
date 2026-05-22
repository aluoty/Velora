import { useMemo } from "react";
import "./StarsBackground.css";

type Star = {
  id: number;
  left: number;
  top: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
};

function createStars(count: number): Star[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2.2 + 0.6,
    opacity: Math.random() * 0.55 + 0.25,
    delay: Math.random() * 6,
    duration: Math.random() * 4 + 3,
  }));
}

export function StarsBackground() {
  const stars = useMemo(() => createStars(120), []);
  const brightStars = useMemo(() => createStars(18), []);

  return (
    <div className="stars-background" aria-hidden="true">
      <div className="stars-nebula" />
      <div className="stars-layer stars-layer--dim">
        {stars.map((star) => (
          <span
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>
      <div className="stars-layer stars-layer--bright">
        {brightStars.map((star) => (
          <span
            key={`bright-${star.id}`}
            className="star star--bright"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size + 1}px`,
              height: `${star.size + 1}px`,
              opacity: star.opacity + 0.2,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration + 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
