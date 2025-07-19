const HEAD = (
  <div className="w-10 h-10 rounded-full border-4 border-plum absolute top-5 right-[-20px] bg-peach shadow-inner" />
);
const BODY = (
  <div className="w-1 h-20 bg-plum absolute top-14 right-[-10px] shadow-md" />
);
const RIGHT_ARM = (
  <div className="w-16 h-1 bg-plum absolute top-20 right-[-10px] rotate-[30deg] origin-left shadow-md" />
);
const LEFT_ARM = (
  <div className="w-16 h-1 bg-plum absolute top-20 right-[-10px] -rotate-[30deg] origin-right shadow-md" />
);
const RIGHT_LEG = (
  <div className="w-16 h-1 bg-plum absolute top-36 right-[-10px] rotate-[60deg] origin-left shadow-md" />
);
const LEFT_LEG = (
  <div className="w-16 h-1 bg-plum absolute top-36 right-[-10px] -rotate-[60deg] origin-right shadow-md" />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type Props = {
  wrongGuesses: number;
};

const HangmanDrawing = ({ wrongGuesses }: Props) => {
  return (
    <div className="relative h-60 w-40 mt-10">
      {/* Render body parts up to wrongGuesses */}
      {BODY_PARTS.slice(0, wrongGuesses)}
      {/* Stand */}
      <div className="h-60 w-1 bg-lavender absolute left-1 top-0 shadow-inner" />
      <div className="w-24 h-1 bg-lavender absolute left-1 top-0 shadow-inner" />
      <div className="w-1 h-10 bg-lavender absolute left-[92px] top-0 shadow-inner" />
      <div className="w-32 h-1 bg-lavender absolute bottom-0 left-0 shadow-inner" />
    </div>
  );
};

export default HangmanDrawing;
