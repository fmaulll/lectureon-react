import axios from "axios";
import { useEffect, useState, useContext, Fragment } from "react";
import { LayoutContext } from "../../context/LayoutContext";
import { PostTypes } from "../../type";
import { url } from "../../helper";
import PostComponent from "../../components/PostComponent";

const Home = () => {
  const { setLoading, setMessage, setStatus } = useContext(LayoutContext);
  const [data, setData] = useState<PostTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(`${url}/post`);

        if (result.status === 200 && result.data) {
          const arr = result.data.map((item: any) => {
            return {
              ...item,
              images: JSON.parse(item.images) || [],
            };
          });
          setData(arr);
        }
      } catch (error: any) {
        setMessage("Failed to get content! " + String(error));
        setStatus(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="px-[500px] py-[30px]">
      {data.length > 0 ? (
        <Fragment>
          {data.map((post, index) => (
            <div key={index} className="mb-8">
              <PostComponent data={post} />
            </div>
          ))}
        </Fragment>
      ) : (
        "No Content"
      )}
    </div>
  );
};

export default Home;
