import Image from "next/image";

interface ProjectCardProps {
  imgHref: string;
  imgAlt: string;
  title: string;
  description: string;
  slug: string;
  techList: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgHref,
  imgAlt,
  title,
  description,
  slug,
  techList,
}) => {
  return (
    <a
      href={`projects/${slug}`}
      className="rounded-md border border-gray-200 p-4 shadow-gray-200 duration-300 hover:no-underline hover:shadow-lg dark:border-gray-700 dark:shadow-gray-700 dark:hover:shadow-gray-900"
    >
      <div className="flex flex-col gap-y-4">
        <div className="overflow-hidden rounded-md">
          <Image
            src={imgHref}
            alt={imgAlt}
            className="h-40 w-full object-cover transition-transform duration-300 hover:scale-125"
            height={160}
            width={220}
            unoptimized
          />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techList.map((tech, index) => (
            <span
              key={index}
              className="rounded bg-gray-200 px-2 py-1 text-xs text-gray-900 dark:bg-gray-700 dark:text-gray-100"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
