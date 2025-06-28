import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1 style={{ fontSize: "32px", color: "#023047", textAlign: "center" }}>
        🎓 Welcome to <span style={{ color: "#fb8500" }}>AI Learning Buddy!</span>
      </h1>
      <p style={{ textAlign: "center", marginBottom: "30px", fontSize: "18px" }}>
        Let’s learn, play, and grow smarter every day!
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Link href="/chatbot">
          <button className="menu-button">🧠 Ask the AI Tutor</button>
        </Link>
        <Link href="/study-plan">
          <button className="menu-button">📅 Build My Study Plan</button>
        </Link>
        <Link href="/quiz">
          <button className="menu-button">📝 Take a Fun Quiz</button>
        </Link>
      </div>
    </div>
  );
}
