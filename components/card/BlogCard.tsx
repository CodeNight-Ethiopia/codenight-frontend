import React from "react";

type Props = {
  blog: BlogType;
};

interface BlogType {
  title: string;
  tags: string[];
  date: Date;
  view: number;
}

const BlogCard = ({ blog }: Props) => {
  return (
    <div className="bg-slate-200 hover:bg-slate-300 rounded-md flex gap-2">
      <div className="py-3 px-4 bg-brand-blue ml-8 mb-6 h-fit text-white flex flex-col items-center">
        <span className="text-lg font-semibold">Mar</span>
        <span className="text-3xl font-bold">24</span>
      </div>
      <div className="pt-3 pb-4 px-4 text-brand-blue flex flex-col ">
        <h3 className="text-2xl font-bold">{blog.title}</h3>
        <div className="flex gap-4 py-2">
          {blog.tags.map((tag) => (
            <span key={tag} className="text-sm text-brand-blue/60">
              {tag}
            </span>
          ))}
            <span  className="text-sm text-brand-blue/60">
                {blog.view} Views
            </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
