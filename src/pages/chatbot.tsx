import { useState } from "react";

export default function ChatbotPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askBot = async () => {
    const res = await fetch("/api/groq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: question }),
    });
    const data = await res.json();
    setAnswer(data.reply);
  };

  return (
    <div className="container">
      <h1>🧠 Ask the AI Tutor</h1>
      <input
        type="text"
        placeholder="What do you want to learn?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={askBot}>Ask</button>
      <div className="output">{answer}</div>
    </div>
  );
}
