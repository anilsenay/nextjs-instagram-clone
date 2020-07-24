import Layout from "../components/layout";
import Stories from "../components/stories";
import FeedItem from "../components/feed-item";
import HomeRightBar from "../components/home-right-bar";
import { data } from "../static/example_data";
import Modal from "../components/modal";
import MoreModalItems from "../components/more-modal";

export default function Home() {
  return (
    <Layout user={data?.loginUser}>
      <MoreModalItems />
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
