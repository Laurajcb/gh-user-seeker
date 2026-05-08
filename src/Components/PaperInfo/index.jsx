import React from "react";

const PaperInfo = ({ userState }) => {
  const { public_repos, followers, following } = userState;

  const stats = [
    { label: "Repositories", value: public_repos },
    { label: "Followers", value: followers },
    { label: "Following", value: following },
  ];

  return (
    <div className="bg-slate-900/60 rounded-xl px-4 py-3 flex justify-around">
      {stats.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center gap-1">
          <span className="text-slate-400 text-xs uppercase tracking-wider">{label}</span>
          <span className="text-white text-lg font-bold">{value ?? 0}</span>
        </div>
      ))}
    </div>
  );
};

export { PaperInfo };
