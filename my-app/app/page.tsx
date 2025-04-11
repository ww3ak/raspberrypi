"use client";
import React, { useState } from "react";
import Weather from "./weather"; // this imports from weather.js

function App() {
  const [iconUrl, setIconUrl] = useState<string | null>(null);

  return (
    <div className="App">
      <header className="App-header">
        {iconUrl && (
          <img
            src={`https:${iconUrl}`}
            alt="Weather Icon"
            width={300}
            height={300}
          />
        )}
        <p>Raspberry Pi Web Page Test</p>
        <Weather onIconUpdate={setIconUrl} />
      </header>
    </div>
  );
}

export default App;
