import React from "react";
import HeroDestination from "@/components/destination/HeroDestination";
import DestinationInformation from "@/components/destination/DestinationInformation";
import DestinationMasonry from "@/components/destination/DestinationMasonry";
import Travel from "@/components/home/Travel";

function Destination() {
  return (
    <div>
      <HeroDestination />
      <DestinationInformation />
      <DestinationMasonry />
      <Travel title="Inspiration for your next trip" />
    </div>
  );
}

export default Destination;
