type Props = {
  guessedLetters: string[];
  onGuess: (letter: string) => void;
};

const Keyboard = ({ guessedLetters, onGuess }: Props) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="grid grid-cols-7 gap-4 mt-14">
      {alphabet.map((letter) => {
        const isGuessed = guessedLetters.includes(letter);

        return (
          <button
            key={letter}
            onClick={() => onGuess(letter)}
            disabled={isGuessed}
            className={`
              w-16 h-16 flex items-center justify-center text-2xl font-semibold rounded-xl shadow-md transition-all duration-200 font-serif
              ${
                isGuessed
                  ? "bg-lavender text-white cursor-not-allowed"
                  : "bg-peach text-rose hover:bg-rose hover:text-white"
              }
            `}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
