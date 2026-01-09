import React, { useState } from "react";
import "./sellCars.css";
import { Data3d } from "../../constants/3DData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import CustomTooltip from "../../components/Tooltip";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SellCarsPage = () => {
 
  const [selectedCar, setSelectedCar] = useState(Data3d[0]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [dragStart, setDragStart] = useState(null);

  const handleCarChange = (e) => {
    const key = parseInt(e.target.value);
    const car = Data3d.find((item) => item.key === key);
    if (car) {
      setSelectedCar(car);
      setCurrentFrame(0); 
    }
  };

  const handleMouseDown = (e) => setDragStart(e.clientX);
  const handleMouseUp = () => setDragStart(null);
  const handleMouseMove = (e) => {
    if (dragStart !== null) {
      const deltaX = e.clientX - dragStart;
      if (Math.abs(deltaX) > 50) {
        setCurrentFrame((prev) =>
          deltaX > 0 
            ? (prev === 0 ? selectedCar.frmes.length - 1 : prev - 1) 
            : (prev === selectedCar.frmes.length - 1 ? 0 : prev + 1)
        );
        setDragStart(e.clientX);
      }
    }
  };

  const today = new Date().toLocaleDateString("en-US", { weekday: "short" });

  return (
    <section className="sellCars container">
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
            {/* Dinamik ism */}
            <h1>{selectedCar.name}</h1>
            {/* Dinamik rasm */}
            <img src={selectedCar.frmes[currentFrame]} alt={selectedCar.name} className="car3d" />
          </div>
        </div>

        <div className="sellCarsDio">
          <h2>Tracking History</h2>
          <div className="millageDio">
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={selectedCar.weeklyMileage} margin={{ top: 20, right: 30 }}>
                <XAxis fontFamily="Roboto" fontSize={12} fontWeight={500} dataKey="day" />
                <YAxis ticks={[0, 5, 10, 15, 20, 25, 30]} fontFamily="Roboto" fontSize={12} fontWeight={500} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="km" radius={[30, 30, 0, 0]}>
                  {selectedCar.weeklyMileage.map((entry, index) => (
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

<div className="offersTop">
  <h2>Offers</h2>
  <div className="carSelectCon">
    <select 
      className="carSelect" 
      onChange={handleCarChange} 
      value={selectedCar.key <= 5 ? selectedCar.key : ""}
    >
      <option value="" disabled>New ▼</option>
      <option value="1">BMW</option>
      <option value="2">Lamborghini</option>
      <option value="3">Mercedes</option>
      <option value="4">Audi</option>
      <option value="5">Porsche</option>
    </select>

    <select 
      className="carSelect" 
      onChange={handleCarChange} 
      value={selectedCar.key > 5 ? selectedCar.key : ""}
    >
      <option value="6">BMW ▼</option>
      <option value="7">Lamborghini ▼</option>
      <option value="8">Mercedes ▼</option>
      <option value="9">Audi ▼</option>
      <option value="10">Porsche ▼</option>
    </select>
  </div>
</div>

      <div className="marketing">
        <div className="marketingUser">
          <h2>{selectedCar.marketing.user}</h2>
          <div className="avaragePrice">
            <p><span>{selectedCar.marketing.averagePrice}</span> average price</p>
          </div>
          <div className="marketAvarage">
            <p>market average <span>{selectedCar.marketing.marketAverage}</span></p>
          </div>
          <div className="arR"><span>→</span></div>
        </div>

        <div className="excellent">
          <CircularProgressbar
            value={selectedCar.marketing.excellentImpressionShareV}
            text={selectedCar.marketing.excellentImpressionShare}
            strokeWidth={18}
            styles={buildStyles({
              pathColor: "#70CF97",
              trailColor: "#F3F3F3",
              strokeLinecap: "butt",
              rotation: 1.5,
              textColor: "#242731",
              textSize: "18px",
            })}
          />
          <span>Excellent</span>
          <p>Impression Share</p>
        </div>

        <div className="desDio">
          <div className="diagramWrap">
            <div className="circle big">
              <CircularProgressbar
                value={selectedCar.marketing.desDioValue1}
                strokeWidth={5}
                styles={buildStyles({ pathColor: "#A162F7", trailColor: "#eee" })}
              />
            </div>
            <div className="circle middle">
              <CircularProgressbar
                value={selectedCar.marketing.desDioValue2}
                strokeWidth={6}
                styles={buildStyles({ pathColor: "#FF6370", trailColor: "#eee" })}
              />
            </div>
            <div className="circle small">
              <CircularProgressbar
                value={selectedCar.marketing.desDioValue3}
                text={selectedCar.marketing.decisionValue}
                strokeWidth={7}
                styles={buildStyles({ pathColor: "#F6CC0D", trailColor: "#eee" })}
              />
            </div>
          </div>
        </div>

        <div className="modelSpend">
          <div className="spendLogo">
            <img src={selectedCar.marketing.modelSpend.src1} alt="logo" />
          </div>
          <h5>{selectedCar.marketing.modelSpend.blue}</h5>
          <p>Model Spend</p>
        </div>

        <div className="notModelSpend">
          <div className="notSpendLogo">
            <img src={selectedCar.marketing.modelSpend.src2} alt="logo" />
          </div>
          <h5>{selectedCar.marketing.modelSpend.red}</h5>
          <p>Model Spend</p>
        </div>

        <div className="unitTurned">
          <div className="unitLogo">
            <img src={selectedCar.marketing.modelSpend.src3} alt="logo" />
          </div>
          <h5>{selectedCar.marketing.spendPerUnit}</h5>
          <p>Spend per Unit Turned</p>
        </div>
      </div>
    </section>
  );
};

export default SellCarsPage;