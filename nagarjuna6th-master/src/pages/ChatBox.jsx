import React, { useState } from "react";

const ChatBox = () => {
  let [question, setQuestion] = useState("");
  let [result, setResult] = useState("");
  let [loading, setLoading] = useState(false);

  const getResponse = async () => {
    setLoading(true);
    const url = "https://open-ai21.p.rapidapi.com/conversationllama";
    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": "096a356f1cmsha7d4a329091379dp156492jsn7e2291fdad4c",
        "x-rapidapi-host": "open-ai21.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: { question },
          },
        ],
        web_access: false,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setLoading(false);
      setResult(result.result);
    } catch (error) {
      console.log(error);
      console.error(error);
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-end items-center h-[100vh]">
      <div className="fixed top-5 left-5">
        <input
          type="text"
          className="input bg-slate-100"
          onChange={(e) => setQuestion(e.target.value)}
        />
        {loading ? (
          <button className="btn">LOADING</button>
        ) : (
          <button className="btn" onClick={getResponse}>
            Submit
          </button>
        )}
      </div>
      <div className="h-[100vh] border-2 w-3/5 p-5">{result}</div>
    </div>
  );
};

export default ChatBox;
