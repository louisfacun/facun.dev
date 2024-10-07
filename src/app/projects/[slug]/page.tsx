// https://github.com/vercel/next.js/discussions/58575#discussioncomment-7999173

import { access, readFile } from "fs/promises";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import path from "path";

const POSTS_FOLDER = path.join(
  process.cwd(),
  "src",
  "app",
  "projects",
  "posts",
);

async function readPostFile(slug: string) {
  const filePath = path.resolve(path.join(POSTS_FOLDER, `${slug}.mdx`));
  console.log(POSTS_FOLDER);
  try {
    await access(filePath);
  } catch (err) {
    return null;
  }

  const fileContent = await readFile(filePath, { encoding: "utf8" });
  return fileContent;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const markdown = await readPostFile(params.slug);

  if (!markdown) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<{
    title: string;
    date: string;
  }>({
    source: markdown,
    options: { parseFrontmatter: true },
  });

  return (
    <main className="prose dark:prose-invert mx-auto max-w-xl px-4 py-16">
      <h1 className="mb-2 text-3xl font-bold">{frontmatter.title}</h1>
      <p className="mb-4 text-gray-500 dark:text-gray-400">
        {frontmatter.date}
      </p>
      {content}
    </main>
  );
}
