const Home = () => {
  return (
    <main
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        A new website is being worked on.
      </h1>
      <p style={{ fontSize: "1rem", color: "#666", marginBottom: "2rem" }}>
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

export default Home;
