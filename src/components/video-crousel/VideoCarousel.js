import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "./VideoCarousel.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function App() {   
  const [videos, setVideos] = useState(["", ""]);
  // useEffect(()=> {
  //   database?.collection("videos").onSnapshot(allVideos => {
  //     setVideos(allVideos?.docs?.map(video => ({
  //       uniqueId: video.id,
  //       data: video.data()?.videos
  //     }))[0].data)
  //   })
  // }, [])
  return (
    <div className="video_wrapper">
      <div className="container-w">
        <Swiper
          navigation={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          className="mySwiper"
        >
          {
            videos?.map((video, index, array) => 
              <SwiperSlide key={index} className="image_slider_change">
              <video className="video__ad" controls src={video} alt="" />
            </SwiperSlide>
              )
          }
        </Swiper>
      </div>
    </div>
  );
}
