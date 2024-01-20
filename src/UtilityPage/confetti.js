import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

function Confetti() {
  const [sreendimensions, setscreendimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function detectSize() {
    setscreendimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [sreendimensions]);

  return (
    <>
      <ReactConfetti
        width={sreendimensions.width}
        height={sreendimensions.height}
        recycle={false}
        numberOfPieces={1500}
      />
    </>
  );
}

export default Confetti;
