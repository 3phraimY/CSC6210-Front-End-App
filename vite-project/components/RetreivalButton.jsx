import axios from "axios";
import { useState } from "react";

function RetrievalButton() {
  const [displayText, setDisplayText] = useState("");
  const [verse, setVerse] = useState("");

  const callAPIRandom = async (event, verse) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://labs.bible.org/api/?passage=${verse}&formatting=plain`
      );
      console.log("API Response:", response.data);
      setDisplayText(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <h2>{displayText}</h2>
      <p>Enter a verse reference to view the passage. (Ex. John 3:16) </p>
      <input
        type="text"
        value={verse}
        onChange={(event) => setVerse(event.target.value)}
      ></input>
      <form onSubmit={(event) => callAPIRandom(event, verse)}>
        <input type="submit" name="rand" value="Search" />
      </form>
    </>
  );
}
export default RetrievalButton;
