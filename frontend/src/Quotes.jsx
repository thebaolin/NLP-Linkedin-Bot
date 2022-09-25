import React, {useState} from "react";

function Quotes() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

return (
    <div>
      <button>
        Generate Quote
      </button>
      <h1>{text}</h1>
      <h3>{"-" + author}</h3>
    </div>
  )
}

export default Quotes;
