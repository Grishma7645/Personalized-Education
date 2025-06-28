export default async function handler(req: any, res: any) {
    const { prompt } = req.body;
  
    if (!prompt) return res.status(400).json({ error: 'Prompt is required' });
  
    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3-70b-8192",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.7,
        }),
      });
  
      const data = await response.json();
      res.status(200).json({ reply: data.choices?.[0]?.message?.content || "No reply." });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  }
  