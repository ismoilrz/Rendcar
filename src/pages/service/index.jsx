import { useParams } from "react-router-dom";
import { AllCars } from "../../constants/AllData";
import "./service.css"

import list1 from "../../assets/list1.svg"
import list2 from "../../assets/list2.svg"
import list3 from "../../assets/list3.svg"

const ServicePage = () => {
  const { carId } = useParams();

  const car = carId ? AllCars.find((c) => String(c.key) === String(carId)) : null;

  if (!carId) {
    return (
      <section className="services-page no-selection">
        <h1>Mashina tanlanmagan</h1>
        <p>Servis ma'lumotlarini ko'rish uchun oldin mashinani tanlang</p>
      </section>
    );
  }


  return (
    <section className="services-page container">
      <div className="serviceLeftCon">  
        <div className="stationCon">
          <h1>Service Station</h1>
          <div className="service">
            <div className="station-row">
              {["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"].map((id) => (
                <div 
                  key={id} 
                  className={`box ${id === car.service.station.current ? 
                    "current" : car.service.station.booked.includes(id) ?
                     "booked" : ""}`}>
                  {id}
                </div>
              ))}
            </div>

            <div className="station-row">
              {["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"].map((id) => (
                <div 
                  key={id} 
                  className={`box ${id === car.service.station.current ? 
                    "current" : car.service.station.booked.includes(id) ? 
                    "booked" : ""}`}>
                  {id}
                </div>
              ))}
            </div>
          </div>
          <div className="boxInfo">
            <div className="boxWhite"><div></div><p>Ready</p></div>
            <div className="boxRed"><div></div><p>Booked</p></div>
            <div className="boxPur"><div></div><p>Current Station</p></div>
          </div>
        </div>

              <div className="yourOrder">
                <div className="yourOrderDes">
                  <div className="orderMain">
                    <h3>Your Order</h3>
                    <div className="orderCircleCon">
                      <div className="orderCircle">
                        <p>Service Time</p>
                        <strong>{car.service.serviseTime}</strong>
                      </div>
                      <div className="circleDecoration"></div>
                    </div>
                  </div>

                    <div className="orderList">
                      <div className="orderItem">
                        <div className="dot green"></div>
                        <p>Brake fluid change</p>
                        <span className="priceTag">{car.service.prices.brakeFluid}</span>
                      </div>
                      <div className="orderItem">
                        <div className="dot red"></div>
                        <p>Diagnostics</p>
                        <span className="priceTag">{car.service.prices.diagnostics}</span>
                      </div>
                      <div className="orderItem">
                        <div className="dot purple"></div>
                        <p>External Washing</p>
                        <span className="priceTag">{car.service.prices.externalWash}</span>
                      </div>
                    </div>

                  </div>
                  <button className="payBtn">
                    Pay ${
                      parseInt(car.service.prices.brakeFluid.replace("$", "")) +
                      parseInt(car.service.prices.diagnostics.replace("$", "")) +
                      parseInt(car.service.prices.externalWash.replace("$", ""))
                    }
                  </button>
                              </div>

                      </div>

                      <div className="serviceRightCon">
                        <div className="serviceRequired">
                          <h3>Service Required</h3>
                          <div className="requiredList">
                            <div className="list1">
                              <div className="list1Icon">
                                <img src={list1} alt="icon" />
                              </div>
                                <div className="list1Title">
                                  <h5>Center Care</h5>
                                  <div className="list1Info">
                                    <span>Price : {car.service.serviceRequired.centerCare.price}</span>
                                    <p>Processing : {car.service.serviceRequired.centerCare.processing}</p>
                                  </div>
                                </div>
                            </div>

                            <div className="greenLine"></div>
                            
                            <div className="list1">
                              <div className="list2Icon">
                                <img src={list2} alt="icon" />
                              </div>
                                <div className="list1Title">
                                  <h5>Diagnostics</h5>
                                  <div className="list1Info">
                                    <span>Price : {car.service.serviceRequired.diagnostics.price}</span>
                                    <p>Processing : {car.service.serviceRequired.diagnostics.processing}</p>
                                  </div>
                                </div>
                            </div>

                            <div className="purLine"></div>

                            <div className="list1">
                              <div className="list3Icon">
                                <img src={list3} alt="icon" />
                              </div>
                                <div className="list1Title">
                                  <h5>Inner Cleaning</h5>
                                  <div className="list1Info">
                                    <span>Price : {car.service.serviceRequired.innerCleaning.price}</span>
                                    <p>Processing : {car.service.serviceRequired.innerCleaning.processing}</p>
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>

                        <div className="serviceSchedule">
                          <h3>Service Schedule</h3>
                          <div className="scheduleMain">
                            {car.service.serviceSchedule.map((item, i) => (
                              <div key={i} className="scheduleList">
                                <div className="schedulePin"></div>
                                <div className="scheduleTitle">
                                  <h5>{item.label}</h5>
                                  <div className="scheduleInfo">
                                    <p>{item.date}</p>
                                    <p>Fix Price : {item.price}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
      
      
    </section>
  );
};

export default ServicePage;


