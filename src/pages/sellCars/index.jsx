import React, { useState } from "react";
import "./sellCars.css";
import { Data3d } from "../../constants/3DData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import CustomTooltip from "../../components/Tooltip";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
          deltaX > 0 ? prev === 0 ? car.frmes.length - 1 : prev - 1 : prev === car.frmes.length - 1 ? 0 : prev + 1
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
                  <div className="offersTop">
                    <h2>Offers</h2>
                    <div className="carSelectCon">
                      <select className="carSelect">
                          <option value="" disabled selected>New ▼</option>
                          <option value="bmw">BMW</option>
                          <option value="lamborghini">Lamborghini</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                          <option value="porsche">Porsche</option>
                      </select>
                      <select className="carSelect">
                          <option value="bmw">BMW ▼</option>
                          <option value="lamborghini">Lamborghini ▼</option>
                          <option value="mercedes">Mercedes ▼</option>
                          <option value="audi">Audi ▼</option>
                          <option value="porsche">Porsche ▼</option>
                      </select>
                    </div>
                  </div>
                  <div className="marketing">
                    <div className="marketingUser">
                      <h2>{Data3d[0].marketing.user}</h2>
                      <div className="avaragePrice">
                        <p><span>{Data3d[0].marketing.averagePrice}</span> avarage price</p>
                      </div>
                      <div className="marketAvarage">
                        <p>market avarage <span>{Data3d[0].marketing.marketAverage}</span></p>
                      </div>
                      <div className="arR">
                        <span>→</span>
                      </div>
                    </div>
                    <div className="excellent">
                <CircularProgressbar
                    value={Data3d[0].marketing.excellentImpressionShareV}
                    text={Data3d[0].marketing.excellentImpressionShare}
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
                            value={Data3d[0].marketing.desDioValue1}
                            strokeWidth={5}
                            styles={buildStyles({
                              pathColor: "#A162F7",
                              trailColor: "#eee",
                            })}
                          />
                        </div>

                        <div className="circle middle">
                          <CircularProgressbar
                            value={Data3d[0].marketing.desDioValue2}
                            strokeWidth={6}
                            styles={buildStyles({
                              pathColor: "#FF6370",
                              trailColor: "#eee",
                            })}
                          />
                        </div>

                        <div className="circle small">
                          <CircularProgressbar
                            value={Data3d[0].marketing.desDioValue3}
                            text={Data3d[0].marketing.decisionValue}
                            strokeWidth={7}
                            styles={buildStyles({
                              pathColor: "#F6CC0D",
                              trailColor: "#eee",
                            })}
                          />
                        </div>
                      </div>
                    </div>
                          
                        <div className="modelSpend">
                          <div className="spendLogo">
                            <img src={Data3d[0].marketing.modelSpend.src1} alt="logo" />
                          </div>
                          <h5>{Data3d[0].marketing.modelSpend.blue}</h5>
                          <p>Model Spend</p>
                        </div>

                        <div className="notModelSpend">
                          <div className="notSpendLogo">
                            <img src={Data3d[0].marketing.modelSpend.src2} alt="logo" />
                          </div>
                          <h5>{Data3d[0].marketing.modelSpend.red}</h5>
                          <p>Model Spend</p>
                        </div>
                        <div className="unitTurned">
                          <div className="unitLogo">
                            <img src={Data3d[0].marketing.modelSpend.src3} alt="logo" />
                          </div>
                          <h5>{Data3d[0].marketing.spendPerUnit}</h5>
                          <p>Spend per Unit Turned</p>
                        </div>
                  </div>
                </section>
              );
            };

export default SellCarsPage;
