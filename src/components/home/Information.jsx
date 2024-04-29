import React from "react";

function Information() {
  return (
    <div className="my-10 flex flex-col w-full">
      <div className="w-full flex justify-end">
        <div className="w-2/3">
          <img
            className=" w-full h-[720px] object-cover"
            src="/ampera.jpg"
            alt="ampera"
          />
        </div>
        <div></div>
      </div>
      <div className="mt-20 flex">
        <div className="w-2/3">
          <img src="/masjid.jpg" alt="masjid" />
        </div>
      </div>
    </div>
  );
}

export default Information;
