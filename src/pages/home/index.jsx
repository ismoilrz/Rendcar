import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
// import { homeData } from "./homeData";
import { useCar } from "../../CarContext";
import { useNavigate } from "react-router-dom";
import { AllCars } from "../../constants/AllData";

const HomePage = () => {

       const { setSelectedCar } = useCar();
  const navigate = useNavigate();

  const handleClick = (car) => {
    setSelectedCar(car);
    navigate("/assets");
  }

  return (
    <>
      <section className="slider">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode ]}
          className="mySwiper homesSwiper">
          <SwiperSlide className="slide1"><Link to={"/lambo"}><img src="https://i.pinimg.com/originals/36/e9/1f/36e91f7d76c22d6cd013e099a3faef1f.png" alt="" /></Link></SwiperSlide>
          <SwiperSlide className="slide2"><Link to={"/bmw"}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png" alt="" /></Link></SwiperSlide>
          <SwiperSlide className="slide3"><Link to={"/merc"}><img src="https://static.tildacdn.com/tild6231-3532-4036-b965-323037303262/572-5724219_22-nov-m.png" alt="" /></Link></SwiperSlide>
          <SwiperSlide className="slide4"><Link to={"/porsche"}><img src="https://i.pinimg.com/originals/89/f4/c5/89f4c5a293fde6963a932bde2209372c.png" alt="" /></Link></SwiperSlide>
          <SwiperSlide className="slide5"><Link to={"/audi"}><img src="https://i.pinimg.com/originals/6a/75/66/6a7566b6e66d3bd5400892c2983cf1ef.png" alt="" /></Link></SwiperSlide>
        </Swiper>
      </section>

      <section className="homeCarts">
        
          {
            AllCars.filter(item => item.home === "home").map((car, index) => {
              return(
                <div key={index} className="homeCard" >
                   <div onClick={() => handleClick(car)}>
                     <div className="recommend">
                        <img src={car.icon1} alt="icon" />
                        <p>{car.recommend}</p>
                    </div>
                    <div className="cardMain">
                      <img src={car.img} alt={car.title} />
                      <p>{car.title}</p>
                    </div>
                   </div>
                    <div className="cardInfo">
                      <div className="cardDes">
                        <img src={car.icon2} alt="icon" />
                        <p>{car.sold}</p>
                       <Link to={`assets/car?id=${car.key}`}> <img src={car.icon3} alt="icon" /></Link>
                        <div className="modal">
                              <img src={car.icon4} alt="icon" />
                              <div className="condition">{car.condition}</div>
                        </div>
                      </div>
                        <p>{car.hour}</p>
                    </div>
                </div>
              )
            })
          }
      </section>

    </>
  );
};

export default HomePage;
