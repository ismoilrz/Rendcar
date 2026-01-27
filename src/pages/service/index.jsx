import { useParams } from "react-router-dom";
import { AllCars } from "../../constants/AllData";
import "./service.css"

const ServicePage = () => {
  const { carId } = useParams();

  // Mashinani qidirish
  const car = carId ? AllCars.find((c) => String(c.key) === String(carId)) : null;

  // 1-HOLAT: Mashina tanlanmagan (Sidebar orqali kirilganda)
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
    {/* Chap tomondagi aylana (Circular Progress ko'rinishi) */}
    <div className="orderCircleCon">
      <div className="orderCircle">
        <p>Service Time</p>
        <strong>{car.service.serviseTime}</strong>
      </div>
      {/* Bu yerda o'sha rangli aylanani CSS border-top/left bilan yasaymiz */}
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

  {/* Jami hisob tugmasi (Dinamik hisoblangan) */}
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
      
      
    </section>
  );
};

export default ServicePage;