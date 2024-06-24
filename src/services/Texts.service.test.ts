// import { describe, expect, it } from 'vitest';
//
// import { Texts } from './Texts.service.ts';
//
// const example = `First paragraph
//
// Second paragraph
//
// Third paragraph
//
// Very-very-very-very-very-very-very-very-very-very long fourth paragraph
// `;
//
// describe('text.utils', () => {
//   it('should work', () => {
//     expect(Texts.chunks(example, 15)).toEqual([
//       'First paragraph',
//       'Second paragraph',
//       'Third paragraph',
//       'Very-very-very-very-very-very-very-very-very-very long fourth paragraph',
//     ]);
//   });
//   it('should work', () => {
//     expect(Texts.chunks(example, 30)).toEqual([
//       'First paragraph\n\nSecond paragraph',
//       'Third paragraph\n\nVery-very-very-very-very-very-very-very-very-very long fourth paragraph',
//     ]);
//   });
//
//   it('should calculate stats [when]', async () => {
//     const stats = await Texts.getTextStats('Simple Stuff');
//     expect(stats).toEqual({
//       paragraphs: ['Simple Stuff'],
//       paragraphCount: 1,
//       sentenceCount: 1,
//       wordCount: 2,
//       uniqueWords: ['simple', 'stuff'],
//       uniqueWordCount: 2,
//     });
//   });
// });
