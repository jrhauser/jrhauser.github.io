import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import RepoCard from "./repocard";

export default function RepoCards() {
  const octokit = new Octokit({
    auth: "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",
  });

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getRepos();
  });

  async function getRepos() {
    const reposList = await octokit.request("GET /users/{username}/repos", {
      username: "jrhauser",
    });
    setRepos(reposList.data);
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="grid grid-cols-2 gap-16 m-3">
      {repos.map((repo) => {
        return (
          <RepoCard
            name={repo.name}
            description={repo.description}
            language={repo.language}
            url={repo.html_url}
            created={formatDate(repo.created_at)}
          />
        );
      })}
    </div>
  );
}
