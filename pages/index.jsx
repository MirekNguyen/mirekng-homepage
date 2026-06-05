const Home = () => {
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        textAlign: "center",
        backgroundColor: "#0a0a0a",
        color: "#ffffff",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "0.75rem" }}>
        A new website is being worked on.
      </h1>
      <p style={{ fontSize: "1rem", color: "#888", marginBottom: "1.75rem" }}>
        Check back soon.
      </p>
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "1rem",
          color: "#0070f3",
          textDecoration: "underline",
        }}
      >
        Demo
      </a>
    </main>
  );
};

Home.getLayout = (page) => page;

export default Home;
