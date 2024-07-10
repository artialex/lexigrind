// import three from 'compromise/three';
// import { useMemo } from 'react';
//
// import { TermGridCell } from '@/components/TermGridCell.tsx';
// import { TermStore } from '@/stores/TermStore.ts';
//
// interface TermFamilyProps {
//   term: TermStore;
// }
//
// export function TermFamily(props: TermFamilyProps) {
//   console.log('TermFamily :: 12', props);
//
//   if (!props.term?.conjugations) {
//     return null;
//   }
//
//   return (
//     <label htmlFor="">
//       <div className="font-semibold">Family</div>
//       <ul className="flex  flex-col text-xs">
//         {Object.entries(props.term.conjugations).map(([form, word]) => (
//           <li className="mb-1" key={form}>
//             <TermGridCell word={word} />
//           </li>
//         ))}
//       </ul>
//     </label>
//   );
// }
