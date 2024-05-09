import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQ() {
  return (
    <div className="my-32 relative mx-auto w-4/5">
      <div data-aos="fade-right">
        <h1 className="font-bold text-3xl inline border-t-2 pt-3 border-black">
          A few common questions
        </h1>
      </div>

      <div data-aos="fade" className="flex my-10 justify-between items-center">
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1 className="text-2xl mt-10">
                  What is the capital of Indonesia?
                </h1>
              </AccordionTrigger>
              <AccordionContent>
                <p
                  style={{
                    fontFamily: "Avenir",
                  }}
                  className="text"
                >
                  The capital of Indonesia is Jakarta.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <h1 className="text-2xl  mt-10">
                  What is the population of Indonesia?
                </h1>
              </AccordionTrigger>
              <AccordionContent>
                <p
                  style={{
                    fontFamily: "Avenir",
                  }}
                  className="text"
                >
                  The population of Indonesia is 270 million.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <h1 className="text-2xl  mt-10">
                  What is the currency of Indonesia?
                </h1>
              </AccordionTrigger>
              <AccordionContent>
                <p
                  style={{
                    fontFamily: "Avenir",
                  }}
                  className="text"
                >
                  The currency of Indonesia is the Indonesian Rupiah.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <h1 className="text-2xl  text-left mt-10">
                  What is the official language of Indonesia?
                </h1>
              </AccordionTrigger>
              <AccordionContent>
                <p
                  style={{
                    fontFamily: "Avenir",
                  }}
                  className="text"
                >
                  The official language of Indonesia is Bahasa Indonesia.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <img src="/indonesia.jpg" alt="" className="w-[40rem]" />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
