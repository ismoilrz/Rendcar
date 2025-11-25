import { useState, useEffect } from "react";
import { AllCars } from "../../constants/AllData";
import "./booking.css";
import DriwerPage from "./draywer";

const BookingPage = () => {
  const savedCars = JSON.parse(localStorage.getItem("cars"));
  const [cars, setCars] = useState(savedCars || AllCars);
  const [open, setOpen] = useState(false);

  const openProfil = () => setOpen(true);
  const close = () => setOpen(false);

  // 🔹 Card qo'shish va alert bilan
  const handleAddCar = (newCar) => {
    setCars((prev) => [...prev, newCar]);
    close();
    alert(`✅ "${newCar.title}" car successfully added!`); // <-- ALERT BU YERDA
  };

  // 🔴 Cardni o'chirish
  const deleteCar = (key) => {
    const filteredCars = cars.filter((car) => car.key !== key);
    setCars(filteredCars);
    localStorage.setItem("cars", JSON.stringify(filteredCars));
  };

  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(cars));
  }, [cars]);

  return (
    <>
      <section className="booking">
        <div className="bookingMain">
          <p>Create New Cars:</p>
          <button onClick={openProfil}>New Car</button>
        </div>
      </section>

      <section className="bookingCards">
        {cars.map((item) => {
          return (
            <div className="bookingCard" key={item.key}>
              <div className="bookingCrtRecommend">
                <img src={item.icon1} alt="icon" />
                <p>{item.recommend}</p>
              </div>

              <div className="bookingCrtMain">
                <img src={item.img} alt="car" />
                <h1>{item.title}</h1>
              </div>

              <div className="bookingCrtMenu">
                <div className="crtMenuDes">
                  <img src={item.icon2} alt="icon" />
                  <p>{item.sold}</p>
                  <img src={item.icon3} alt="icon" />
                  <img src={item.icon4} alt="icon" />
                </div>
                <p>{item.hour}</p>
              </div>

              <button
                className="deleteBtn"
                onClick={() => deleteCar(item.key)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </section>

      {open && <DriwerPage close={close} onAdd={handleAddCar} />}
    </>
  );
};

export default BookingPage;
