// import { useLocation } from "react-router-dom"
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { AllCars } from "../../../constants/AllData"
import "./car.css"


// const AssetsCar = () => {
//     let path = useLocation()
     
//     const result = AllCars.find(item => item.key == path.search.split("=")[1])

//     return (
//        <h1>
//          {result.title}
//        </h1>
//     )
// }
// export default AssetsCar

const CarDetails = () => {

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id"); 

  const car = AllCars.find(item => item.key === Number(id));

  const [mainImage, setMainImage] = useState(car?.color);

  if (!car) {
    return <div className="d">
                <h2>❌ Mashina topilmadi</h2>
           </div>;
  }

  return (
    <>
        <div className="car__title">
          <h1>{car.title}</h1>
        </div>
        <div className="colorsMenu">
            <div className="carDes">
                <div className="car__color">
                  <img key={mainImage} src={mainImage} alt="?" />
                </div>
                   <button className="apartment">Apartment</button>
            </div>
            <div className="colorMain">
                {
                  car.colors.map((item, index) => (
                    <div key={index} className="colorCon" onClick={() => setMainImage(item.url)}>
                        <img src={item.url} alt="pics"  />
                    </div>
                  ))
                }
            </div>
        </div>
    </>
  );
};

export default CarDetails;