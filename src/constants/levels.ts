export const levels = {
  '0': 'common',
  '1': 'uncommon',

  '2': 'rare',
  '3': 'epic',

  '4': 'legendary',
  '5': 'mythic',

  ignored: 'ignored',
  unidentified: 'unidentified',
} as const;

export type Level = keyof typeof levels;

export const levelKeys = Object.keys(levels) as Array<Level>;
