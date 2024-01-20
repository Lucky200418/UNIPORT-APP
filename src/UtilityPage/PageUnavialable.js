import { useSpring, animated } from "react-spring";
function PageUnavialable() {
  const props = useSpring({
    opacity: 1,
    transition: "all 0.9s, ease-in",
    from: { opacity: 0 },
  });
  return (
    <animated.div style={props} className="not-available">
      <h2>Page Not available</h2>
      <p>We are sorry , but the page is unavialable</p>
    </animated.div>
  );
}

export default PageUnavialable;
