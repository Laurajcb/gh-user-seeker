import React from "react";

const MainInformation = ({ userState }) => {
  const { name, login, created_at } = userState;
  const date = new Date(created_at).toLocaleDateString('en-us');

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <h2 className="text-white text-xl md:text-2xl font-bold leading-tight">
          {name || login}
        </h2>
        <span className="text-slate-400 text-xs shrink-0">Joined {date}</span>
      </div>
      <span className="text-blue-400 text-sm">@{login}</span>
    </div>
  );
};

export { MainInformation };
