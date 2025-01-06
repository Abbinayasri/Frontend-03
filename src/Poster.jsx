import React from "react";

const styles = {
  container: {
    width: "80%",
    margin: "2rem auto",
    padding: "2rem",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
  },
  image: {
    width: "100%",
    maxHeight: "400px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1.2rem",
    color: "#555",
    lineHeight: "1.5",
  },
  button: {
    marginTop: "1.5rem",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

function Poster() {
  const handleButtonClick = () => {
    alert("Learn More Clicked!");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to the Event</h1>
      <img
        src="https://i.pinimg.com/originals/6d/46/c2/6d46c278bc8bea36adbced41f730981d.gif"
        alt="Event Poster"
        style={styles.image}
      />
      <p style={styles.description}>
        Join us for an amazing event filled with exciting activities, engaging
        speakers, and unforgettable moments. Don't miss this incredible
        experience!
      </p>
      <button
        style={styles.button}
        onClick={handleButtonClick}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Learn More
      </button>
    </div>
  );
}

export default Poster;
