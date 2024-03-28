import FAQSingleCard from "@/components/FAQSingleCard";
import StickyBottomBanner from "@/components/StickyBottomBanner";
import { FAQData } from "@/data";

const FAQPage = () => {
  return (
    <>
      
      <main>
        {/* heading section */}
        <section className="flex flex-col items-center justify-center w-full py-32 space-y-8 h-fit">
          <p className="text-lg font-bold text-gray-800">FAQs</p>
          <h1 className="text-3xl font-bold text-gray-800">
            Frequently Asked Questions
          </h1>
          <p className="text-lg font-light text-gray-700">
            have questions? We&apos;re here to help.
          </p>
        </section>
        {/* FAQs section */}
        <section className="flex flex-col items-center justify-start px-10 mx-auto">
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
