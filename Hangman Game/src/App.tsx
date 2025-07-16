import { useEffect, useState } from "react";
import { words } from "./word";
import WordDisplay from "./components/wordDisplay";
import Keyboard from "./components/keyboard";
import HangmanDrawing from "./components/Hangman";

function App() {
  const [selectedWord, setSelectedWord] = useState("");
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
  const incorrectLetters = guessedLetters.filter(
    (letter) => !selectedWord.includes(letter)
  );

  const isWinner = selectedWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const isLoser = incorrectLetters.length >= 6;

  const restartGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setSelectedWord(randomWord);
    setGuessedLetters([]);
  };

  return (
    <main className="min-h-screen bg-pink-50 bg-cover bg-center text-gray-200 flex flex-col items-center py-20 px-4">
      <h1 className="text-6xl font-bold mb-10 drop-shadow-lg text-pink-200 font-serif">
        🌸 Hangman Garden
      </h1>

      <WordDisplay word={selectedWord} guessedLetters={guessedLetters} />

      <Keyboard guessedLetters={guessedLetters} onGuess={handleGuess} />
      <HangmanDrawing wrongGuesses={incorrectLetters.length} />

      {isWinner && (
        <p className="text-3xl font-bold text-green-600 mt-6">🎉 You Win!</p>
      )}
      {isLoser && (
        <p className="text-3xl font-bold text-red-600 mt-6">
          💔 You lost! The word was:{" "}
          <span className="uppercase">{selectedWord}</span>
        </p>
      )}
      {(isWinner || isLoser) && (
        <button
          onClick={restartGame}
          className="mt-6 px-6 py-3 bg-lavender text-white font-bold rounded-lg hover:bg-plum transition"
        >
          🔄 Play Again
        </button>
      )}
    </main>
  );
}

export default App;
