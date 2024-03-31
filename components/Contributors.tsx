'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Contributors = () => {
  const [contributors, setContributors] = useState([]);
  const contributorAPI =
    "https://api.github.com/repos/CodeNight-Ethiopia/codenight-frontend/contributors";
  useEffect(() => {
    fetch(contributorAPI)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setContributors(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <h1 className="text-3xl font-extrabold text-center my-10">
        Our Contributors
      </h1>
      {/* Contributors section */}
      <section className="max-w-2xl flex flex-wrap gap-4 justify-center mx-auto px-10">
        {contributors.map((contributor, idx) => {
          return (
            <Link
              href={(contributor as any).html_url}
              key={(contributor as any).id}
              className="relative rounded-full overflow-hidden h-12 w-12 cursor-pointer"
            >
              <Image
                src={(contributor as any).avatar_url}
                alt={(contributor as any).login}
                height={50}
                width={50}
              />
            </Link>
          );
        })}
      </section>
      {/* spacing */}
      <div className="py-16" />
    </>
  );
};

export default Contributors;
