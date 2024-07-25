import { ChevronsUp } from 'react-feather';

export const Card = () => {
  return (
    <div className="lexi-card inline-flex border border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 to-fuchsia-100">
      <div className="flex w-6 flex-col items-center justify-center bg-fuchsia-300 p-2 text-fuchsia-900">
        <ChevronsUp size="16" />
        <span className="text-xl">5</span>
      </div>
      <div className="px-4 py-2">
        <div className="font-caps mb-2 flex items-center gap-2 text-xl font-semibold text-fuchsia-900">
          Coincidence
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
        <hr className="my-2 h-0 border border-fuchsia-200" />

        <ul className="flex gap-2">
          <li className="text-sm italic underline">Examples</li>
        </ul>
      </div>
    </div>
  );
};
