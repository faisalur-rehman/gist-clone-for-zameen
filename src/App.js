import React, { useState } from "react";
import RepoDetails from "./components/RepoDetails";
import "./App.css";
import { fetchData, fetchForksUrl } from "./services/fetchData";

function App() {
  const [gists, setGists] = useState([]);
  const [name, setName] = useState("");
  const [forksUrl, setForksUrl] = useState([]);
  const [forkUsers, setForkUsers] = useState([]);
  const handleChange = ({ target }) => {
    setName(target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const gists = await fetchData(name);
    gists && setGists(gists);

    gists &&
      gists.map((gist) => setForksUrl((prev) => [...prev, gist.forks_url]));
    if (gists) {
      for (let i = 0; i < gists.length; i++) {
        const { language, repoId, userData } = await fetchForksUrl(
          forksUrl[i],
          i,
          gists
        );
        setForkUsers((prev) => [
          ...prev,
          {
            repoId,
            userData,
            language,
          },
        ]);
      }
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="repositiry">Search</label>
        <input
          type="text"
          id="repository"
          value={name}
          onChange={handleChange}
          placeholder="eg: faisalur-rehman"
        />
      </form>
      <table className="file-list">
        {forkUsers && <RepoDetails forkUsers={forkUsers} />}
      </table>
    </div>
  );
}

export default App;
