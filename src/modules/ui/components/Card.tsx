import { ChevronDown, ChevronUp, Plus } from 'react-feather';

export const Card = () => {
  return (
    <div className="inline-flex min-w-60 max-w-96 overflow-hidden rounded border border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 shadow-xl">
      <div className="flex w-6 flex-col items-center bg-fuchsia-300 p-2 text-fuchsia-900">
        {/*<Hexagon size="16" />*/}
        <button>
          <ChevronUp size="16" />
          {/*<Triangle />*/}
        </button>
        <span className="text-lg">5</span>
        <button>
          <ChevronDown size="16" />
        </button>

        <Plus className="mt-auto" size="16" />
        {/*<div className="flex w-8 items-center justify-center rounded-full border-2 border-fuchsia-300 text-center text-lg shadow-lg"></div>*/}
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center gap-2 font-semibold uppercase text-fuchsia-900">
          {/*<div>/!*<ChevronUp />*!/</div>*/}

          <div>
            <span className="text-2xl">C</span>
            <span className="text-xl">oincidence</span>
          </div>
        </div>

        <div className="flex justify-between text-sm">
          <span>[/kəʊˈɪn.sɪ.dəns/]</span>
          <span className="italic">noun</span>
        </div>

        <hr className="my-2 h-0 border border-fuchsia-200" />

        <ul className="flex list-inside list-decimal flex-col gap-2 text-sm">
          <li>
            <span className="mr-1 text-fuchsia-600">(SAME TIME)</span>
            An occasion when two or more similar things happen at the same time, especially in a way
            that is unlikely and surprising.
          </li>
          <li>
            <span className="mr-1 text-fuchsia-600">(LUCK)</span>
            Chance or luck
          </li>
        </ul>

        <hr className="my-2 h-0 border border-fuchsia-200" />

        <ul className="flex gap-2">
          <li className="text-sm font-semibold underline">Amazement</li>
          <li className="text-sm font-semibold underline">Moving & Walking</li>
        </ul>
      </div>
    </div>
  );
};
