import UserInfo from './components/UserInfo'; // make sure the path is correct

function ProfilePage() {
  // We no longer pass props, because data will come from Context
  return <UserInfo />;
}

export default ProfilePage;
