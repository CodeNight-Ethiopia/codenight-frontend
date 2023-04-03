import FAQSingleCard from "@/components/FAQSingleCard";
import PageHead from "@/components/PageHead";
import StickyBottomBanner from "@/components/StickyBottomBanner";
import Nav from "@/components/nav/Nav";

const data = [
    {
      title: "What is an API?",
      desc: "API stands for Application Programming Interface. It's a set of protocols, routines, and tools for building software and applications. APIs allow different software applications to communicate with each other and share data."
    },
    {
      title: "What is Git?",
      desc: "Git is a version control system that allows developers to track changes in their codebase, collaborate with other developers, and revert to earlier versions of their code if needed."
    },
    {
      title: "What is RESTful API?",
      desc: "REST stands for Representational State Transfer. It's an architectural style that defines a set of constraints to be used when creating web services. A RESTful API is an API that adheres to these constraints, and uses HTTP requests to GET, POST, PUT, and DELETE data."
    },
    {
      title: "What is Docker?",
      desc: "Docker is a containerization platform that allows developers to package their applications and dependencies into containers. Containers are isolated environments that run on a host machine, and can be easily deployed and scaled."
    },
    {
      title: "What is Agile methodology?",
      desc: "Agile methodology is an iterative and incremental approach to software development. It emphasizes collaboration, flexibility, and customer satisfaction. Agile teams work in short iterations, and regularly review and adjust their approach to meet changing requirements."
    }
  ]

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
            
            {data.map((faq,idx) => {
                return <FAQSingleCard key={idx} title={faq.title} desc={faq.desc} />
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
