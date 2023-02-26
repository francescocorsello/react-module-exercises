import { useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function ShowGithubUser() {
  const { username } = useParams();

  return (
    <div>
      <GithubUser username={username} />
    </div>
  );
}