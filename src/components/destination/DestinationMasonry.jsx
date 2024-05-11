import React from "react";
import { Masonry } from "@mui/lab";

const height = ["30rem", "40rem", "50rem", "60rem", "70rem", "80rem", "30rem"];
const heightswithImage = [
  { height: "30rem", image: "/ampera.jpg" },
  { height: "40rem", image: "/amanzi.jpg" },
  { height: "50rem", image: "/amanzi.png" },
  { height: "60rem", image: "/bkb.png" },
  { height: "70rem", image: "/kemaro.jpg" },
  { height: "80rem", image: "/kemaro2.jpg" },
  { height: "30rem", image: "/ki.jpg" },
];

function DestinationMasonry() {
  return (
    <div className="w-4/5 flex flex-col gap-10 mx-auto my-32">
      <div data-aos="fade-right">
        <h1 className="font-bold text-3xl inline border-t-2 pt-3 border-black">
          Learn more about Palembang
        </h1>
      </div>

      <Masonry data-aos="fade" columns={2} spacing={1}>
        {heightswithImage.map((height, index) => (
          <div
            key={index + 1}
            className="rounded-lg"
            style={{ height: height.height }}
          >
            <img
              src={height.image}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default DestinationMasonry;
