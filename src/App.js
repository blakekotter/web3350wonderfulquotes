import { useState } from "react";
import Quote from "./Components/InputQuote/Quote";
import NewQuote from "./Components/NewInputQuote/NewQuote";
import Stack from 'react-bootstrap/Stack';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([
    {
      id: "a1",
      quote: "If I’m not back in five minutes, just wait longer.",
      author: "Ace Ventura",
      isFavorite: false,
    },
    {
      id: "a2",
      quote:
        "Life is like a box of chocolates, you never know what you're gonna get.",
      author: "Forrest Gump",
      isFavorite: false,
    },
    {
      id: "a3",
      quote:
        "There has never been a sadness that can't be cured by breakfast food.",
      author: "Ron Swanson",
      isFavorite: false,
    },
  ]);

  const addQuoteHandler = (newQuote) => {
    setQuotes((prevQuotes) => {
      const updatedQuotes = [...prevQuotes, newQuote];
      return updatedQuotes;
    });
  };

  const deleteQuoteHandler = (quoteId) => {
    setQuotes((prevQuotes) => prevQuotes.filter((quote) => quote.id !== quoteId));
  };

  const toggleFavoriteHandler = (quoteId) => {
    setQuotes((prevQuotes) =>
      prevQuotes.map((quote) =>
        quote.id === quoteId ? { ...quote, isFavorite: !quote.isFavorite } : quote
      )
    );
  };

  return (
    <Stack gap={3} className="p-4">
      <NewQuote onAddQuote={addQuoteHandler} />
      <Quote
        items={quotes}
        onDeleteQuote={deleteQuoteHandler}
        onToggleFavorite={toggleFavoriteHandler}
      />
    </Stack>
  );
}

export default App;
