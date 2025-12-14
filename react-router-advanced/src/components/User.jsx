import { useParams } from "react-router-dom";

function User() {
  const { username } = useParams();
  return <h2>User Profile for: {username}</h2>;
}

export default User;
