function FlipCard() {
  return (
    <div className="group h-96 w-96 [perspective:1000px]">
      <div className="bg-gray-700 text-slate-200 relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div
          id="front"
          className="absolute inset-0 h-full w-full rounded-xl bg-gray-700 px-12 text-center text-slate-200 [backface-visibility:hidden]"
        >
          <div className="flex min-h-full flex-col items-center justify-center">
            Front
          </div>
        </div>
        <div
          id="back"
          className="absolute inset-0 h-full w-full rounded-xl bg-gray-800 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]"
        >
          <div className="flex min-h-full flex-col items-center justify-center">
            Back
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
