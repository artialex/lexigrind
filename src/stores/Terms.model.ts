// import { flow, onPatch, t } from 'mobx-state-tree';
//
// import { getAllTerms, putTerm } from '@/persistence/terms.db.ts';
//
// const termLevels = ['0', '1', '2', '3', '4', '5', 'ignored', 'unidentified'] as const;
//
// type TermLevel = (typeof termLevels)[number];
//
// export const Term = t
//   .model('Term', {
//     id: t.identifier,
//     level: t.enumeration<TermLevel>(Object.values(termLevels)),
//     notes: t.maybe(t.string),
//   })
//   .actions((self) => ({
//     setLevel(level: TermLevel) {
//       self.level = level;
//     },
//     setNotes(notes: string) {
//       self.notes = notes;
//     },
//   }));
//
// export const Terms = t
//   .model('Terms', {
//     map: t.map(Term),
//     selected: t.maybe(t.reference(Term)),
//   })
//   .actions((self) => ({
//     select(word: string) {
//       if (!self.map.has(word)) {
//         self.map.set(word, { id: word, level: 'unidentified' });
//       }
//
//       self.selected = self.map.get(word)!;
//     },
//
//     init: flow(function* () {
//       try {
//         const response = yield getAllTerms();
//
//         self.map.replace(response);
//       } catch (error) {
//         // console.log('Terms.model :: 43', error);
//       }
//     }),
//   }));
//
// export const terms = Terms.create();
//
// terms.init().then(() => {
//   onPatch(terms.map, (patch) => {
//     if (patch.op === 'add') {
//       void putTerm(patch.value);
//     }
//
//     if (patch.op === 'replace' && patch.path.endsWith('/level')) {
//       const id = patch.path.split('/').at(1)!;
//
//       void putTerm({ id, level: patch.value });
//     }
//
//     if (patch.op === 'replace' && patch.path.endsWith('/notes')) {
//       const id = patch.path.split('/').at(1)!;
//
//       void putTerm({ id, notes: patch.value });
//     }
//   });
// });
