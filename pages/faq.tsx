import FAQSingleCard from "@/components/FAQSingleCard";
import PageHead from "@/components/PageHead";
import StickyBottomBanner from "@/components/StickyBottomBanner";
import Nav from "@/components/nav/Nav";

const data = [
  {
    title: "What is codenight?",
    desc: "Code-night is a developer community based in Ethiopia that aims to connect, support, and empower developers to build innovative solutions and grow their skills.",
  },
  {
    title: "Who can join Codenight?",
    desc: "Anyone who is interested in programming and software development can join Codenight. The community is open to developers of all levels, from beginners to experienced professionals.",
  },
  {
    title:
      "What programming languages and technologies does Codenight focus on",
    desc: "Codenight is an inclusive community that welcomes developers of all backgrounds and skill levels. While the community doesn't focus on any particular language or technology, members are encouraged to share their knowledge and expertise with others.",
  },
  {
    title: "How can I stay up-to-date with Codenight activities",
    desc: "To stay up-to-date with Codenight activities, you can follow the community's social media accounts, or check our website for the latest updates. You can also engage with other members of the community to stay informed about upcoming events and opportunities.",
  },
  {
    title: "How can I suggest ideas for Codenight activities or events?",
    desc: "If you have ideas for Codenight activities or events, you can share them with the community through their social media groups or by reaching out to the organizers directly. The community is always open to new ideas and welcomes input from its members.",
  },
];

const FAQPage = () => {
  return (
    <>
      <PageHead />
      <Nav />
      <main>
        {/* heading section */}
        <section className="w-full h-fit flex flex-col space-y-8 justify-center items-center py-32">
          <p className="font-bold text-lg text-gray-800">FAQs</p>
          <h1 className="font-bold text-3xl text-gray-800">
            Frequently Asked Questions
          </h1>
          <p className="font-light text-lg text-gray-700">
            have questions? We&apos;re here to help.
          </p>
        </section>
        {/* FAQs section */}
        <section className="flex flex-col justify-start items-center mx-auto px-10">
          {data.map((faq, idx) => {
            return (
              <FAQSingleCard key={idx} title={faq.title} desc={faq.desc} />
            );
          })}
        </section>
        {/* spacing */}
        <div className="py-16"></div>
      </main>
      <StickyBottomBanner />
    </>
  );
};

export default FAQPage;
