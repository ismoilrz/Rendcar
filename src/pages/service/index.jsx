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
            <div className="boxWhite">
              <div></div>
              <p>Ready</p>
            </div>
            <div className="boxRed">
              <div></div>
              <p>Booked</p>
            </div>
            <div className="boxPur">
              <div></div>
              <p>Current Station</p>
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default ServicePage;