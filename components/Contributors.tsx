import Image from "next/image";
import Link from "next/link";

type ContributorsType = {
  login: string;
  avatar_url: string;
  html_url: string;
};

const getContributors = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/CodeNight-Ethiopia/codenight-frontend/contributors"
    );
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const Contributors = async () => {
  const contributorData = await getContributors();
  return (
    <>
      <h1 className="text-3xl font-extrabold text-center my-10">
        Our Contributors
      </h1>
      {/* Contributors section */}
      <section className="max-w-2xl flex flex-wrap gap-4 justify-center mx-auto px-10">
        {contributorData.map((contributor: ContributorsType, idx: number) => {
          return (
            <Link
              href={contributor.html_url}
              key={idx}
              className="relative rounded-full overflow-hidden h-12 w-12 cursor-pointer"
            >
              <Image
                src={contributor.avatar_url}
                alt={contributor.login}
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
