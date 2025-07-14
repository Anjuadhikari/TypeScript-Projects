import { useEffect, useState } from "react";
import { words } from "./word";
import WordDisplay from "./components/wordDisplay";

function App() {
  const [selectedWord, setSelectedWord] = useState<string>("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setSelectedWord(randomWord);
  }, []);

  const handleGuess = (letter: string) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((prev) => [...prev, letter]);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-pink-50 text-gray-600 p-6">
      <h1 className="text-4xl font-bold mb-4">Hangman Game</h1>
      <WordDisplay word={selectedWord} guessedLetters={guessedLetters} />

      <div className="grid grid-cols-7 gap-2 mt-8">
        {"abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
          <button
            key={letter}
            onClick={() => handleGuess(letter)}
            disabled={guessedLetters.includes(letter)}
            className={`px-4 py-2 border rounded ${
              guessedLetters.includes(letter)
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {letter}
          </button>
        ))}
      </div>
    </main>
  );
}

export default App;
