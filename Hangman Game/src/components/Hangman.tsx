const HEAD = <div className="w-10 h-10 rounded-full border-4 border-gray-600 absolute top-5 right-[-20px]" />;
const BODY = <div className="w-1 h-20 bg-gray-600 absolute top-14 right-[-10px]" />;
const RIGHT_ARM = <div className="w-16 h-1 bg-gray-600 absolute top-20 right-[-10px] rotate-[30deg] origin-left" />;
const LEFT_ARM = <div className="w-16 h-1 bg-gray-600 absolute top-20 right-[-10px] -rotate-[30deg] origin-right" />;
const RIGHT_LEG = <div className="w-16 h-1 bg-gray-600 absolute top-36 right-[-10px] rotate-[60deg] origin-left" />;
const LEFT_LEG = <div className="w-16 h-1 bg-gray-600 absolute top-36 right-[-10px] -rotate-[60deg] origin-right" />;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type Props = {
  wrongGuesses: number;
};

const HangmanDrawing = ({ wrongGuesses }: Props) => {
  return (
    <div className="relative h-60 w-40 mt-10">
      {/* Render up to the number of wrong guesses */}
      {BODY_PARTS.slice(0, wrongGuesses)}
      {/* Stand */}
      <div className="h-60 w-1 bg-gray-800 absolute left-1 top-0" />
      <div className="w-24 h-1 bg-gray-800 absolute left-1 top-0" />
      <div className="w-1 h-10 bg-gray-800 absolute left-[92px] top-0" />
      <div className="w-32 h-1 bg-gray-800 absolute bottom-0 left-0" />
    </div>
  );
};

export default HangmanDrawing;
