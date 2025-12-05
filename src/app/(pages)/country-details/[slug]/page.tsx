import { CountryDetails } from "@/components/country/country-details";

interface CountryDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CountryDetailsPage({
  params,
}: CountryDetailsPageProps) {
  const { slug } = await params;

  return (
    <>
      <CountryDetails slug={slug} />
    </>
  );
}
