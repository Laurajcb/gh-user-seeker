import React, { useEffect, useState } from "react";
import { Searcher } from "./Components/Searcher";
import { getGitHubUser } from './services/users';
import { UserCard } from "./containers/userCard";

const App = () => {
  const [inputUser, setInputUser] = useState('Octocat');
  const [userState, setUserState] = useState(null);
  const [notfound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const gettingUser = async (user) => {
    setLoading(true);
    setNotFound(false);
    setError(null);

    try {
      const userResponse = await getGitHubUser(user);
      if (userResponse.message === 'Not Found') {
        setNotFound(true);
      } else {
        setUserState(userResponse);
      }
    } catch {
      setError("Error searching for user, please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    gettingUser(inputUser);
  }, [inputUser]);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-slate-800 rounded-2xl shadow-2xl p-6 md:p-8">
        <h1 className="text-white text-2xl font-bold mb-6 tracking-tight">
          GitHub User Seeker
        </h1>
        <Searcher setInputUser={setInputUser} />
        {loading && (
          <p className="text-slate-400 text-sm mt-6 text-center animate-pulse">
            Searching...
          </p>
        )}
        {error && (
          <p className="text-red-400 text-sm mt-6 text-center">{error}</p>
        )}
        {notfound && (
          <p className="text-slate-400 text-sm mt-6 text-center">
            No user found for <span className="text-white font-medium">"{inputUser}"</span>. Try another username.
          </p>
        )}
        {!loading && !error && !notfound && userState && (
          <UserCard userState={userState} />
        )}
      </div>
    </div>
  );
};

export default App;
