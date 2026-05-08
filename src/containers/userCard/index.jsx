import React from "react";
import { MainInformation } from "../../Components/MainInformation";
import { Description } from "../Description";

const UserCard = ({ userState }) => {
  const { avatar_url } = userState;

  return (
    <div className="flex gap-6 items-start mt-6">
      <img
        src={avatar_url}
        alt="GitHub User"
        className="w-20 h-20 md:w-28 md:h-28 rounded-full ring-2 ring-blue-400 shrink-0 object-cover"
      />
      <div className="flex-1 flex flex-col gap-3 min-w-0">
        <MainInformation userState={userState} />
        <Description userState={userState} />
      </div>
    </div>
  );
};

export { UserCard };
