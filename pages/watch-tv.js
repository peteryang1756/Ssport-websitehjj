// pages/admin.js
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Video from 'next-video';
import awesomeVideo from 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const AdminPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!session || session.user.role !== "admin") {
      router.push("/tv"); // Redirect if not authenticated or not an admin
    }
  }, [session, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session || session.user.role !== "admin") {
    return null; // Alternatively, return a "Not Authorized" message or page
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <p>Welcome, {session.user.email}!</p>
  <Video src={awesomeVideo} />;
    </div>
  );
};

export default AdminPage;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session || session.user.role !== "admin") {
    return {
      redirect: {
        destination: "/tv",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
