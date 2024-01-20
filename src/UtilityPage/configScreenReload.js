function DisableScreenRefresh() {
  window.addEventListener("scroll", HandleScroll, { passive: false });
}

function HandleScroll(e) {
  if (e.target === document.documentElement) {
    e.preventDefault();
  }
}

export default DisableScreenRefresh;

// function ReloadConfig() {
// useEffect(() => {
// document.addEventListener("touchstart", handleTouchStart, false);
// document.addEventListener("touchmove", handleTouchMove, false);
// let startX = null;
// let startY = null;

// function handleTouchStart(event) {
//   startX = event.touches[0].clientX;
//   startY = event.touches[0].clientY;
// }

// function handleTouchMove(event) {
//   if (!startX || !startY) {
//     return;
//   }

//   const deltaX = Math.abs(event.touches[0].clientX - startX);
//   const deltaY = Math.abs(event.touches[0].clientY - startY);

//   if (deltaY > deltaX * 1.5) {
//     event.preventDefault();
//   }
// }
// return () => {
//   document.removeEventListener("touchstart", handleTouchStart);
//   document.removeEventListener("touchmove", handleTouchMove);
// };
// }, []);
// }
// export default ReloadConfig;
