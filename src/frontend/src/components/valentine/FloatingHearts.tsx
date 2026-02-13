export default function FloatingHearts() {
  // Create 15 hearts with random positions and delays
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    size: 20 + Math.random() * 30
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {hearts.map((heart) => (
        <img
          key={heart.id}
          src="/assets/generated/valentine-heart-icons.dim_256x256.png"
          alt=""
          className="absolute animate-float-up opacity-0"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`
          }}
        />
      ))}
    </div>
  );
}
