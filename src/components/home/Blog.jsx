import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const blog = [
  {
    image: "/bkb.png",
    title: "The best places to visit in Palembang",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.",
  },
  {
    image: "/ki.jpg",
    title: "The best places to visit in Palembang",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.",
  },
  {
    image: "/amanzi.png",
    title: "The best places to visit in Palembang",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.",
  },
];

function Blog() {
  return (
    <>
      <div
        style={{
          fontFamily: "Avenir",
        }}
        className="my-36 mx-auto w-4/5"
      >
        <div data-aos="fade-right">
          <h1 className="text-3xl font-bold inline border-t-2 pt-3 border-black">
            Latest from us
          </h1>
        </div>

        <div className="my-20" data-aos="fade">
          <Carousel>
            <CarouselContent>
              {blog.map((item) => (
                <CarouselItem key={item.title} className="basis-1/3">
                  <div className="flex flex-col items-center">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full rounded-lg h-96 object-cover"
                    />
                    <h1 className="font-bold text-2xl mt-5">{item.title}</h1>
                    <p className="text mt-5">{item.summary}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Blog;
