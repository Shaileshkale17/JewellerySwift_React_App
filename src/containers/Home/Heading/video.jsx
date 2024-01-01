import React from "react";
import "./video.css"
import Video_mp4 from "../../../assets/image_container/videos/Jewellery-Ads.mp4";
import Video_ogg from "../../../assets/image_container/videos/Kooheji-Jewellery-Ads.ogg";
function Video() {
  return (
    <div>
      <div className="video-container">
       

        <video controls muted loop playsInline autoPlay>
          <source src={Video_mp4} typeof="video/mp4" />
          <source src={Video_ogg} typeof="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div class="video-text">
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio
            libero earum itaque reiciendis delectus exercitationem dolorem
            laborum alias perferendis hic ipsum architecto modi quis nihil
            eveniet, iure eaque repellat vel nisi, quasi adipisci nostrum. Eos
            corporis laboriosam aut sunt explicabo voluptatem sed quisquam
            molestiae, est, dignissimos commodi consequatur deleniti.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
