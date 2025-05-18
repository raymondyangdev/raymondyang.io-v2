import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';

interface BlogCardProps {
  key: string;
  title: string;
  description: string;
  slug: string;
  date: Date;
}

export default function BlogCard({ title, description, slug, date }: BlogCardProps) {
  const maxLength = 50;

  const truncatedDescription =
    description?.length > maxLength ? description.slice(0, maxLength).trimEnd() + '...' : description;

  return (
    <Card className="max-w-2xs shadow-lg hover:scale-[1.02] transition-transform">
      <Link href={`/blog/${slug}`} className="flex flex-col gap-2">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{new Date(date).toLocaleDateString()}</p>
        </CardHeader>
      </Link>
      <CardContent>{truncatedDescription}</CardContent>
    </Card>
  );
}
