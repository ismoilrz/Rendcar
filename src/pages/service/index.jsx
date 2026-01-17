import { useParams, Link } from "react-router-dom";
import { AllCars } from "../../constants/AllData";

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
      <h1>{car.title}</h1>
      
      
    </section>
  );
};

export default ServicePage;