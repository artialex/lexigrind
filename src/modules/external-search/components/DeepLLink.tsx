export const DeepLLink = ({ text }: { text: string }) => (
  <a
    className="absolute left-6"
    target="_blank"
    href={`https://www.deepl.com/en/translator#en/ru/${text}`}
  >
    D
  </a>
);
