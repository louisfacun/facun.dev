interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  techList: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  slug,
  techList,
}) => {
  return (
    <a
      href={`projects/${slug}`}
      className="rounded-md border border-gray-200 p-4 shadow-gray-200 dark:border-gray-700 dark:shadow-gray-700"
    >
      <div className="mb-4 h-40 w-full rounded-md bg-gray-200"></div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-2 text-gray-700">{description}</p>
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
    </a>
  );
};

export default ProjectCard;
