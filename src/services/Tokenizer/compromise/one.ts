// fixme: declare types
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import plg from 'compromise-paragraphs';
import one from 'compromise/one';

one.plugin(plg);

// const methods = one.world().methods;
//
// methods.one.tokenize.splitTerms = (str) => {
//   return str.split(/ /);
// };

export const compromiseOne = one;
