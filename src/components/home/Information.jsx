import React from "react";

function Information() {
  return (
    <div className="my-10 flex flex-col w-full">
      <div className="w-full flex items-center justify-end">
        <div className="rounded-lg h-96 w-[30rem] mr-[-300px] z-10 bg-slate-300 shadow-lg">
          <div
            className="py-20 px-10 flex flex-col gap-3"
            style={{
              fontFamily: "Avenir",
            }}
          >
            <h1 data-aos="fade" className="text-2xl font-bold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
              ipsa.
            </h1>
            <p data-aos="fade">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis reiciendis hic facere necessitatibus soluta facilis
              quod consequuntur laborum nesciunt quia nisi aliquid possimus
              quidem alias aspernatur, totam ipsa illo?
            </p>
          </div>
        </div>
        <div className="w-2/3">
          <img
            className=" w-full h-[720px] object-cover"
            src="/masjid.jpg"
            alt="ampera"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="mt-20 flex items-center">
          <div className="w-2/3">
            <img
              className=" w-full h-[720px] object-cover"
              src="/ampera.jpg"
              alt="masjid"
            />
          </div>
          <div className="rounded-lg h-96 w-[30rem] ml-[-300px] z-10 bg-slate-300 shadow-lg">
            <div
              className="py-20 px-10 flex flex-col gap-3"
              style={{
                fontFamily: "Avenir",
              }}
            >
              <h1 data-aos="fade" className="text-2xl font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
                ipsa.
              </h1>
              <p data-aos="fade">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident perferendis reiciendis hic facere necessitatibus
                soluta facilis quod consequuntur laborum nesciunt quia nisi
                aliquid possimus quidem alias aspernatur, totam ipsa illo?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
