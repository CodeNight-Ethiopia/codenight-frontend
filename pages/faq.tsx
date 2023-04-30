import FAQSingleCard from "@/components/FAQSingleCard";
import PageHead from "@/components/PageHead";
import StickyBottomBanner from "@/components/StickyBottomBanner";
import Nav from "@/components/nav/Nav";
import { FAQData } from "@/data";

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
          {FAQData.map((faq, idx) => {
            return (
              <FAQSingleCard key={idx} title={faq.title} desc={faq.desc} />
            );
          })}
        </section>
        {/* spacing */}
        <div className="py-16" />
      </main>
      <StickyBottomBanner />
    </>
  );
};

export default FAQPage;
