import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SeoMetadataProps {
  title: string;
  description: string;
}

export const SeoMetadata = ({ title, description }: SeoMetadataProps) => {
  const location = useLocation();

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${window.location.origin}${location.pathname}`} />
    </Helmet>
  );
};
