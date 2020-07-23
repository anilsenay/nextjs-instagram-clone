import Header from "../components/header";
import Layout from "../components/layout";
import Stories from "../components/stories";
import FeedItem from "../components/feed-item";
import HomeRightBar from "../components/home-right-bar";

export default function Home() {
  const feed = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Layout>
      <div className="homepage-feed lg:mr-8 flex flex-col ">
        <Stories />
        {feed.map((item) => {
          return <FeedItem data={item} key={item} />;
        })}
      </div>
      <HomeRightBar />
    </Layout>
  );
}
