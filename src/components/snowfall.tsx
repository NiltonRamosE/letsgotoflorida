export default function Snowfall() {
  const snowflakes = Array.from({ length: 50 });

  return (
    <>
      {snowflakes.map((_, index) => (
        <div
          key={index}
          className="snow"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            opacity: Math.random() * 0.5 + 0.3,
          }}
        />
      ))}
    </>
  );
}
