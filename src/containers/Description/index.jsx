import React from "react";
import { PaperInfo } from '../../Components/PaperInfo';
import { LocationInfo } from "../../Components/LocationInfo";

const Description = ({ userState }) => {
  const { bio } = userState;

  return (
    <div className="flex flex-col gap-4">
      <p className="text-slate-300 text-sm leading-relaxed">
        {bio ?? "This profile has no bio."}
      </p>
      <PaperInfo userState={userState} />
      <LocationInfo userState={userState} />
    </div>
  );
};

export { Description };
