import { FC } from "react";
import ImageSlider from "../ImageSlider";
import { Link } from "react-router-dom";

interface Props {
  data: {
    id: number;
    authorId: number;
    authorName: string;
    title: string;
    subTitle: string;
    description: string;
    images: string[];
  };
}

const PostComponent: FC<Props> = ({ data }) => {
  return (
    <div className="bg-white px-8 py-4 rounded-lg shadow-lg">
      <ImageSlider images={data.images} />
      <div className="mt-8">
        <h1 className="font-bold text-3xl">
          <Link to={`/post/${data.id}`}>{data.title}</Link>
        </h1>
        <h3 className="text-[#303030]">Author: {" "}
        
        <Link className="font-bold" to={`/lecturer/${data.authorId}`}>{data.authorName}</Link>
        </h3>
        <h3 className="font-bold text-xl">{data.subTitle}</h3>
        <p className="text-md">
          {data.description.slice(0, 500) + "..."}{" "}
          <Link className="text-blue-700 font-bold" to={`/post/${data.id}`}>
            Read more
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PostComponent;
