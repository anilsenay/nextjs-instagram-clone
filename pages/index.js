import Header from "../components/header";
import Layout from "../components/layout";
import Stories from "../components/stories";
import FeedItem from "../components/feed-item";
import HomeRightBar from "../components/home-right-bar";

export default function Home() {
  const feed = [1, 2, 3, 4, 5, 6, 7];
  const data = {
    loginUser: {
      username: "anilsenay",
      image:
        "https://instagram.fsaw1-3.fna.fbcdn.net/v/t51.2885-19/s150x150/88129994_218553312873090_187843388282765312_n.jpg?_nc_ht=instagram.fsaw1-3.fna.fbcdn.net&_nc_ohc=siFEGZag29UAX9Sytdg&oh=56e1226fa0938ff569eb491980eb95a7&oe=5F4278CA",
    },
    stories: [
      {
        username: "testuser",
        image: "https://picsum.photos/id/237/200/200",
      },
      {
        username: "asafasaasc",
        image: "https://picsum.photos/id/236/200/200",
      },
      {
        username: "sadcasca",
        image: "https://picsum.photos/id/238/200/200",
      },
      {
        username: "sdsacasca",
        image: "https://picsum.photos/id/239/200/200",
      },
      {
        username: "xaxxsxa",
        image: "https://picsum.photos/id/227/200/200",
      },
      {
        username: "asd_sksc_s",
        image: "https://picsum.photos/id/229/200/200",
      },
      {
        username: "ascsama",
        image: "https://picsum.photos/id/247/200/200",
      },
      {
        username: "aaasccc",
        image: "https://picsum.photos/id/240/200/200",
      },
      {
        username: "anilsenay",
        image: "https://picsum.photos/id/257/200/200",
      },
      {
        username: "anilsenay1",
        image: "https://picsum.photos/id/256/200/200",
      },
      {
        username: "anilsenay2",
        image: "https://picsum.photos/id/267/200/200",
      },
      {
        username: "anilsenay3",
        image: "https://picsum.photos/id/266/200/200",
      },
    ],
  };
  return (
    <Layout user={data?.loginUser}>
      <div className="homepage-feed lg:mr-8 flex flex-col ">
        <Stories stories={data?.stories} />
        {feed.map((item) => {
          return <FeedItem data={item} key={item} />;
        })}
      </div>
      <HomeRightBar />
    </Layout>
  );
}
