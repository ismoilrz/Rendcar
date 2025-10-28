import { useState } from "react";
import { AllCars } from "../../constants/AllData";
import "./booking.css"
import DriwerPage from "./draywer";

const BookingPage = () => {
     const [open, setOpen] = useState(false)
     const [cars, setCars] = useState(AllCars);

     const openProfil = () => {
        setOpen(!open)
    }

    const close = () => {
        setOpen(!open)
    }

    const handleAddCar = (newCar) => {
    setCars(prev => [...prev, newCar]);
    close(); 
  }



    return <>
             <section className="booking">
                <div className="bookingMain">
                    <p>Create New Cars:</p>
                    <button onClick={openProfil} >New Car</button>
                </div>
             </section>
             <section className="bookingCards">
                {cars.map((item, index) => {
                    return (
                        <div className="bookingCard" key={index}>
                            <div className="bookingCrtRecommend">
                                <img src={item.icon1} alt="icon" />
                                <p>{item.recommend}</p>
                            </div>
                            <div className="bookingCrtMain">
                                <img src={item.img} alt="pick" />
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
                        </div>
                    )
                })}
             </section>

             {open && <DriwerPage close={close} onAdd={handleAddCar} />}
             </>
}

export default BookingPage;