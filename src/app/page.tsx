export default function Home() {
  return (
    <iframe
      src="/game/index.html"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        border: 'none',
        display: 'block',
      }}
      allow="camera; microphone"
      title="World Cup Cheer Penalty"
    />
  );
}
