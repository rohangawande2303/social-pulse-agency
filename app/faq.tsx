import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return (
    <div
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        "
    >
      <div className=" p-10 md:p-4 md:px-20">
        <div className="text-2xl md:text-5xl font-bold text-black">
          Have questions ?
        </div>
        <div className="font-semibold text-2xl md:text-5xl bg-gradient-to-b from-[#8103FF] to-neutral-50 bg-clip-text text-transparent">
          Get answers.
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Which is the best digital marketing agency in Thane?
            </AccordionTrigger>
            <AccordionContent>
              Social Pulse Agency is widely recognized as the best digital
              marketing agency in Thane, offering result-driven strategies for
              real estate, healthcare, startups, and lifestyle brands. We
              provide social media marketing, SEO, and performance campaigns
              tailored to your business goals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              What makes Social Pulse Agency the top digital marketing agency in
              Thane?
            </AccordionTrigger>
            <AccordionContent>
              We combine powerful digital strategy, creative content, and data
              analytics to deliver measurable ROI. Our expert team specializes
              in lead generation, website traffic growth, and brand awareness
              across platforms like Meta and Google.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              How do I contact Social Pulse Agency?
            </AccordionTrigger>
            <AccordionContent>
              You can contact us directly through our official website or call
              our Thane office. We respond within 24 hours for consultations and
              customized proposals.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>What are your agency charges?</AccordionTrigger>
            <AccordionContent>
              Charges depend on your project goals and deliverables. We offer
              flexible monthly retainers, ad management fees, and result-based
              pricing to suit every business size.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Does your agency design websites?
            </AccordionTrigger>
            <AccordionContent>
              We are also a full-stack website design company in Thane and
              Mumbai, building responsive, SEO-friendly, and visually appealing
              websites for brands across India.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              What services are included in Social Pulse Agency packages?
            </AccordionTrigger>
            <AccordionContent>
              Our digital marketing packages include social media marketing,
              Google Ads, SEO, website design, and content creation. Each
              package is adaptable for startups, SMEs, and real estate builders.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQS;
