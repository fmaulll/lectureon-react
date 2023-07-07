import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { LayoutContext } from "../../context/LayoutContext";
import { PostTypes } from "../../type";

const Home = () => {
  const { setLoading, setMessage, setStatus } = useContext(LayoutContext);
  const [data, setData] = useState<PostTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get("http://localhost:9000/api/post");

        if (result.status === 200) {
          setData(result.data);
        }
      } catch (error: any) {
        setMessage(
          "Log in failed! " +
            String(
              error.response.data.message ? error.response.data.message : error
            )
        );
        setStatus(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {data.map((post, index) => (
        <div key={index}>
          <img className="w-[125px]" src={post.image} alt={post.subTitle} />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Y0Vo8x8ww7A"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h1>{post.title}</h1>
          <h2>{post.authorName}</h2>
          <h3>{post.subTitle}</h3>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
