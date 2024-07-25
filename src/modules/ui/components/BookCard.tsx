export const BookCard = () => {
  return (
    <div className="lexi-card inline-flex border border-stone-200 bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="flex w-12 flex-col items-end bg-stone-300 p-2 text-stone-900">
        {/*<Menu size="14" className="mb-auto self-center" />*/}
        <div className="mt-auto text-xs">3</div>
        <div className="text-xs">18.1k</div>
        <div className="text-xs">3.0k</div>
        <div className="text-xs">691</div>
      </div>

      <div className="px-4 py-2">
        <div className="font-caps mb-2 flex items-center gap-2 text-xl font-semibold text-stone-900">
          Fourth Wing
        </div>

        <div className="flex justify-between text-sm">
          <span>R. Yarros</span>
          <span className="text-sm font-semibold underline">Fantasy</span>
        </div>

        <hr className="my-2 h-0 border border-stone-200" />

        <ul className="flex gap-1 text-sm">
          <li className="lexi-word-0 w-10 rounded border border-stone-200 px-1 text-right text-xs">
            1.8k
          </li>
          <li className="lexi-word-1 w-10 rounded border border-stone-200 px-1 text-right text-xs">
            196
          </li>
          <li className="lexi-word-2 w-10 rounded border border-stone-200 px-1 text-right text-xs">
            80
          </li>
          <li className="lexi-word-3 w-10 rounded border border-stone-200 px-1 text-right text-xs">
            65
          </li>
          <li className="lexi-word-4 w-10 rounded border border-stone-200 px-1 text-right text-xs">
            16
          </li>
          <li className="lexi-word-5 w-10 rounded border border-stone-200 px-1 text-right text-xs">
            12
          </li>
        </ul>
      </div>
    </div>
  );
};
