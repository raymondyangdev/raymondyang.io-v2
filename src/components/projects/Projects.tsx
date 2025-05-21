import { ProjectCard } from '@/components/projects/ProjectCard';
import { SanityDocument } from 'next-sanity';

interface ProjectProps {
  projects: SanityDocument[];
}

export default function Projects({ projects }: ProjectProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-4xl">projects.</h2>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project._id} className="flex flex-col flex-1">
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              github={project.github}
              live={project.live}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
