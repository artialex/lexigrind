export const ReversoLink = ({ text }: { text: string }) => (
  <a
    className="absolute left-2"
    target="_blank"
    href={`https://www.reverso.net/text-translation#sl=eng&tl=rus&text=${text}`}
  >
    R
  </a>
);
