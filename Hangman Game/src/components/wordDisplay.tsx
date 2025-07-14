type props ={
    word: string;
    guessedLetters: string[];
    onGuess?: (letter: string) => void;
 
}

const WordDisplay = ({ word, guessedLetters, onGuess }: props) => {
    const handleGuess = (letter: string) => {
        if (onGuess) {
            onGuess(letter);
        }
    };

    return (
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
    );
}

export default WordDisplay;