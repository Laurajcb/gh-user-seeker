import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

const LocationInfo = ({ userState }) => {
  const { location, twitter_username, blog, company } = userState;

  const items = [
    { icon: <LocationOnIcon fontSize="small" />, value: location },
    { icon: <TwitterIcon fontSize="small" />, value: twitter_username },
    {
      icon: <LanguageIcon fontSize="small" />,
      value: blog,
      render: (v) => (
        <a href={v} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline truncate">
          {v}
        </a>
      ),
    },
    { icon: <BusinessIcon fontSize="small" />, value: company },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
      {items.map(({ icon, value, render }, i) => (
        <div key={i} className="flex items-center gap-2 text-slate-300 text-sm min-w-0">
          <span className="text-slate-500 shrink-0">{icon}</span>
          {value
            ? render
              ? render(value)
              : <span className="truncate">{value}</span>
            : <span className="text-slate-500">Not Available</span>
          }
        </div>
      ))}
    </div>
  );
};

export { LocationInfo };
