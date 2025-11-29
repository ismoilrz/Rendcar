import React, { useState } from "react";
import "./sellCars.css";
import { Data3d } from "../../constants/3DData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import CustomTooltip from "../../components/Tooltip";

const SellCarsPage = () => {
  const car = Data3d[0];
  const [currentFrame, setCurrentFrame] = useState(0);
  const [dragStart, setDragStart] = useState(null);

  const handleMouseDown = (e) => setDragStart(e.clientX);
  const handleMouseUp = () => setDragStart(null);
  const handleMouseMove = (e) => {
    if (dragStart !== null) {
      const deltaX = e.clientX - dragStart;
      if (Math.abs(deltaX) > 50) {
        setCurrentFrame((prev) =>
          deltaX > 0
            ? prev === 0
              ? car.frmes.length - 1
              : prev - 1
            : prev === car.frmes.length - 1
            ? 0
            : prev + 1
        );
        setDragStart(e.clientX);
      }
    }
  };

  const today = new Date().toLocaleDateString("en-US", { weekday: "short" });

  return (
    <section className="sellCars">
      <h1>Sell Cars</h1>
      <div className="sellCarsMain">
        <div
          className="sellCarsCar"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="sellCarsCarInfo">
            <h1>{car.name}</h1>
            <img src={car.frmes[currentFrame]} alt={car.name} className="car3d" />
          </div>
        </div>

        <div className="sellCarsDio">
          <h2>Tracking History</h2>
          <div className="millageDio">
            <ResponsiveContainer width="100%" height={320}>

              <BarChart data={car.weeklyMileage} margin={{ top: 20, right: 30 }}>

                <XAxis 
                fontFamily="Roboto" 
                fontSize={12} 
                fontWeight={500} 
                dataKey="day" />

                <YAxis 
                ticks={[0, 5, 10, 15, 20, 25, 30]} 
                fontFamily="Roboto" 
                fontSize={12} 
                fontWeight={500} />

                <Tooltip content={<CustomTooltip />} />
                <Bar 
                dataKey="km" 
                radius={[30, 30, 0, 0]}>

                  {car.weeklyMileage.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.day === today ? "#FF6370" : "rgba(255, 99, 112, 0.15)"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellCarsPage;
