import Header from "../components/header";
import Layout from "../components/layout";
import Stories from "../components/stories";
import FeedItem from "../components/feed-item";

export default function Home() {
  const feed = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Layout>
      <div className="homepage-container flex justify-center">
        <div className="homepage-feed flex">
          <Stories />
          {feed.map((item) => {
            <FeedItem data={item} />;
          })}
        </div>
        <div className="suggestions"></div>
      </div>
    </Layout>
  );
}
