export default function swDev() {
  let swURL = `${process.env.PUBLIC_URL}/sw.js`;
  console.log(swURL);
  navigator.serviceWorker.register(swURL).then((res) => {
    console.warn("response", res);
  });
}
