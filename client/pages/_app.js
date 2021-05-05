import "bootswatch/dist/cyborg/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <img
        src="/spacexlogo.png"
        alt="SpaceX"
        style={{ width: 300, display: "block", margin: "auto" }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
