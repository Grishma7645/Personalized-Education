import { useState } from "react";

export default function StudyPlanPage() {
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [plan, setPlan] = useState("");

  const generatePlan = async () => {
    const prompt = `Create a personalized study plan for ${subject} with an exam on ${date}`;
    const res = await fetch("/api/groq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setPlan(data.reply);
  };

  return (
    <div className="container">
      <h1>📚 Study Plan Maker</h1>
      <input
        type="text"
        placeholder="Enter subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={generatePlan}>Generate Plan</button>
      <div className="output">{plan}</div>
    </div>
  );
}
