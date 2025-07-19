type Props = {
  word: string;
  guessedLetters: string[];
};

const WordDisplay = ({ word, guessedLetters }: Props) => {
  return (
    <div className="flex gap-4 mt-12 px-4 py-6 bg-peach rounded-xl shadow-md border border-lavender">
      {word.split("").map((letter, idx) => (
        <span
          key={idx}
          className="w-14 h-14 flex items-center justify-center rounded-md border-b-4 border-plum bg-white text-3xl font-semibold text-grayText shadow-inner"
        >
          {guessedLetters.includes(letter) ? (
            <span className="text-rose">{letter}</span>
          ) : (
            "_"
          )}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;
