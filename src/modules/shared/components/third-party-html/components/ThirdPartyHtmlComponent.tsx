import DOMPurify from "dompurify";

interface ThirdPartyHtmlComponentProps {
  markup: string;
}

export const ThirdPartyHtmlComponent = ({ markup }: ThirdPartyHtmlComponentProps) => {
  const sanitizedHtml = { __html: DOMPurify.sanitize(markup) };
  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={sanitizedHtml} />;
};
