import { BlogDetail } from "@/components/pages/blog/blogDetail/blogDetails";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  return <BlogDetail slug={slug} />;
}
