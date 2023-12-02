import "./App.css";
import { useState, useEffect } from "react";
import Top from "./Top";
import ad from "./ad.png";

function Main() {
  const [image, setImage] = useState(true);

  const handleClick = () => {
    setImage(!image);
  };

  useEffect(() => {
    if (!image) {
      setImage(false);
    }
  }, [image]);

  return (
    <div>
      <Top />
      {image && <img src={ad} alt="광고 이미지"/>}
      <button onClick={handleClick}>{image ? "광고 없애기" : "광고 보이기"}</button>
    </div>
  );
}

export default Main;
