import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { urlFor } from '@/sanity/lib/image';
import { SanityImageAssetDocument } from 'next-sanity';
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: SanityImageAssetDocument;
  github: string;
  live: string;
}

export function ProjectCard({ title, description, tags, image, github, live }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:scale-[1.02] transition-transform">
      <div className="flex flex-col flex-1 gap-4">
        <CardHeader>
          <div className="relative w-full h-48 mb-4 bg-white rounded-lg overflow-hidden">
            <Image
              src={urlFor(image).fit('clip').url()}
              alt={`${title} Card Image`}
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col flex-1 justify-end">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </div>

      <CardFooter className="flex justify-between pt-4">
        {github && (
          <Button variant="outline" size="sm" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="mr-1 h-4 w-4" /> GitHub
            </a>
          </Button>
        )}
        {live && (
          <Button variant="default" size="sm" asChild>
            <a href={live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1 h-4 w-4" /> Live
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
