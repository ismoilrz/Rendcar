import { useCar } from "../../CarContext";
import "./assets.css"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";


const AssetsPage = () => {
  const { selectedCar } = useCar();

  if (!selectedCar) {
    return <div className="not">
                <div className="notShadow">
                    <div className="notAs">
                      <p>Hali mashina tanlanmadi !</p>
                    </div>
                </div>
           </div>;
  }

            return (
              <>
                        <section className="assetsMain">
                                  <div className="main">
                                    <div className="assetsImg">
                                      <h1>{selectedCar.title}</h1>
                                      <img src={selectedCar.img1} alt={selectedCar.title} />
                                    </div>

                                    <div className="assetsInfo">
                                      <div className="carPrice">
                                        <img src={selectedCar.icon5} alt="$" />
                                        <h1>{selectedCar.price}</h1>
                                      </div>

                                     <div className="description">
                                       <div className="userInfo">
                                          <div className="profile">
                                            <div className="userImage">
                                              <img src={selectedCar.userImg} alt="user" />
                                            </div>
                                            <div className="userName">
                                              <p>{selectedCar.name}</p>
                                              <p>Accound opening date: {selectedCar.date}</p>
                                            </div>
                                          </div>

                                          <div className="location">
                                            <img src={selectedCar.locIcon} alt="icon" />
                                            <p>{selectedCar.location}</p>
                                          </div>

                                          <div className="account">
                                            <div className="accound">
                                              <img src={selectedCar.accoundIcon} alt="icon" />
                                              <p>{selectedCar.account}</p>
                                            </div>
                                            <div className="visit">
                                              <p>Visit profile ⪢</p>
                                            </div>
                                          </div>

                                          <div className="contact">
                                          <div className="tel">
                                            <p>Contact:</p>
                                            <img src={selectedCar.telIcon} alt="icon" />
                                            <p>{selectedCar.contact}</p>
                                          </div>
                                          
                                          <div className="email">
                                            <div className="emailTxt">
                                              <img src={selectedCar.emailIcon} alt="icon" />
                                              <p>{selectedCar.email}</p>
                                            </div>
                                            <div className="sent">
                                              <p>Massage the seller ⪢</p>
                                            </div>
                                          </div>
                                      </div>
                                      </div>

                                      <div className="cardDec">
                                        <div className="cardDec1">
                                              <div className="carInfo">
                                                <img src={selectedCar.priceIcon} alt="$" />
                                                <p>Price: {selectedCar.price}</p>
                                              </div>
                                              <div className="carInfo">
                                                <img src={selectedCar.modelIcon} alt="icon" />
                                                <p>Make: {selectedCar.make}</p>
                                              </div>
                                              <div className="carInfo">
                                                <img src={selectedCar.modelIcon} alt="icon" />
                                                <p>Model: {selectedCar.model}</p>
                                              </div>
                                              <div className="carInfo">
                                                <img src={selectedCar.bodyIcon} alt="Suv" />
                                                <p>Body Type: {selectedCar.bodyType}</p>
                                              </div>
                                        </div>
                                        <div className="cardDec2">
                                              <div className="carInfo">
                                                <img src={selectedCar.dateIcon} alt="$" />
                                                <p>Registration: {selectedCar.registration}</p>
                                              </div>
                                              <div className="carInfo">
                                                <img src={selectedCar.fuelIcon} alt="$" />
                                                <p>Fuel Type: {selectedCar.fuel}</p>
                                              </div>
                                              <div className="carInfo">
                                                <img src={selectedCar.millageIcon} alt="$" />
                                                <p>Millage: {selectedCar.millage}</p>
                                              </div>
                                              <div className="carInfo">
                                                <img src={selectedCar.gearboxIcon} alt="$" />
                                                <p>Transmission: {selectedCar.transmission}</p>
                                              </div>
                                        </div>
                                      </div>
                                     </div>
                                    </div>
                                  </div>
                                </section>
                                
                                <section className="secSwiper">
                                       <Swiper
                                        slidesPerView={4}
                                        spaceBetween={30}
                                        pagination={{
                                          clickable: true,
                                        }}
                                        
                                        className="mySwiper heroSwiper">        

                                      {
                                        selectedCar.urusPics.map((item, index) => (
                                        <SwiperSlide className="key" key={index}><img src={item.url} alt="" /></SwiperSlide>

                                        ))
                                      }
                                        </Swiper>
                                </section>
                                
                                <section className="secSwiper2">
                                       <Swiper
                                        slidesPerView={4}
                                        spaceBetween={30}
                                        pagination={{
                                          clickable: true,
                                        }}
                                        className="mySwiper hero1Swiper">

                                            {
                                        selectedCar.urusPics1.map((item, index) => (
                                          <SwiperSlide className="key" key={index}><img src={item.url} alt="" /></SwiperSlide>

                                        )) 
                                      }
                                        </Swiper>
                                </section>
                                </>
                              );
                            };

         export default AssetsPage;
