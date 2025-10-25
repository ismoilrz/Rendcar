// import { audi } from "./audiData";
import { useCar } from "../../CarContext";
import { Link, useNavigate } from "react-router-dom";
import { AllCars } from "../../constants/AllData";

const Audi = () => {

    const { setSelectedCar } = useCar();
  const navigate = useNavigate();

  const handleClick = (car) => {
    setSelectedCar(car);
    navigate("/assets");
  }

    return <>
                           <section className="lamboMain">
                               {
                                  AllCars.filter(item => item.make === "Audi").map((car, index) => {
                                       return (
                                               <div key={index} className="lamboCart">
                                                   <div onClick={() => handleClick(car)}>
                                                    <div className="lamboRecommend">
                                                       <img src={car.icon1} alt="icon" />
                                                       <p>{car.recommend}</p>
                                                   </div>
                                                   <div className="cartMain">
                                                       <img src={car.img} alt={car.title} />
                                                       <p>{car.title}</p>
                                                   </div>
                                                   </div>
                                                   <div className="cartMenu">
                                                       <div className="setMenu">
                                                               <img src={car.icon2} alt="icon" />
                                                               <p>{car.sold}</p>
                                                               <Link to={`assets/car?id=${car.key}`}><img src={car.icon3} alt="icon" /></Link>
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
}

export default Audi;