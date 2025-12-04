import { ServiceDetail } from "@/components/pages/services/serviceDetails/service-details";

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  
  return <ServiceDetail slug={slug} />;
}
