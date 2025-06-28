import { useState } from "react";

export default function QuizPage() {
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState("");

  const generateQuiz = async () => {
    const prompt = `Generate a 5-question quiz with answers on the topic: ${topic}`;
    const res = await fetch("/api/groq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setQuiz(data.reply);
  };

  return (
    <div className="container">
      <h1>📝 Fun Quiz Time</h1>
      <input
        type="text"
        placeholder="Enter topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button onClick={generateQuiz}>Generate Quiz</button>
      <div className="output">{quiz}</div>
    </div>
  );
}
