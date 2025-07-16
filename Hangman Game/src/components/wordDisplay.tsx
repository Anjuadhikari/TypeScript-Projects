type Props = {
  word: string;
  guessedLetters: string[];
};

const WordDisplay = ({ word, guessedLetters }: Props) => {
  return (
    <div className="flex gap-6 mt-10">
      {word.split("").map((letter, idx) => (
        <span
          key={idx}
          className="w-12 h-12 flex items-center justify-center border-b-4 border-lavender text-3xl font-bold text-rose"
        >
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;