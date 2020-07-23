import Layout from "../components/layout";
import Stories from "../components/stories";
import FeedItem from "../components/feed-item";
import HomeRightBar from "../components/home-right-bar";
import { data } from "../static/example_data";

export default function Home() {
  const feed = [1, 2, 3, 4, 5, 6, 7];

  return (
    <Layout user={data?.loginUser}>
      <div className="homepage-feed lg:mr-8 flex flex-col ">
        <Stories stories={data?.stories} />
        {data?.feed.map((item) => {
          return <FeedItem data={item} key={item.pid} />;
        })}
      </div>
      <HomeRightBar data={data.suggestions} />
    </Layout>
  );
}
