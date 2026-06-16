import { useState } from "react";

export default function LikeButton({ img, disc }) {
  let [likes, setLikes] = useState(0);

  let handleLikes = () => {
    setLikes((like) => like + 1);
  };

  let disLike = () => {
    setLikes((like) => like - 1);
  };
  return (
    <div className="likeButton">
      <img src={img} className="post-img" />
      <p>{disc}</p>
      <p>#Lovely #wonderful place</p>
      <p style={{ color: "red " }}>
        <i
          className="fa-solid fa-thumbs-down"
          onClick={disLike}
          style={{ color: "blue" }}
        ></i>
        &nbsp; &nbsp;
        {likes == 0 ? (
          <i className="fa-regular fa-heart" onClick={handleLikes}></i>
        ) : (
          <i className="fa-solid fa-heart" onClick={handleLikes}></i>
        )}
        &nbsp; &nbsp;
        {likes} &nbsp;
      </p>
    </div>
  );
}
