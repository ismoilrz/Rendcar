import { useState } from "react";

import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";

import "./booking.css"

const DriwerPage = ({close, onAdd}) => {
    const [form, setForm] = useState({
        title: "",
        recommend: "",
        sold: "",
        hour: "",
        img: ""
    });

    // Inputlarni boshqarish
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    // Rasm yuklash
    const handleImage = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => {
            setForm(prev => ({ ...prev, img: reader.result }));
        };
        reader.readAsDataURL(file);
    };

    const handleAdd = () => {
        if (!form.title) return alert("Please enter car title"); 

        const newCar = { 
            key: Date.now(),
            icon1,
            icon2,
            icon3,
            icon4,
            title: form.title,
            img: form.img,
           
            recommend: form.recommend ? `${form.recommend}% Recommended` : "0% Recommended",
            sold: form.sold ? `${form.sold}k` : "0k Sold",
            hour: form.hour ? `$${form.hour}/h` : "$0/h"
        };

        onAdd(newCar);

        setForm({ title: "", recommend: "", sold: "", hour: "", img: "" });
    };

    const closeProfil = (e) => {
        e.stopPropagation();
    };

    return (
        <section className="driver" onClick={close}>
            <div className="driverMain" onClick={closeProfil}>
                <div className="driverAddCar">
                    <p>ADD CAR:</p>
                    <div className="driverBtns">
                        <button className="submit" onClick={handleAdd}>Submit</button>
                        <button className="exit" onClick={close}>X</button>
                    </div>
                </div>

                <div className="inputs">
                    <div className="inputsTxt">
                        <input name="title" type="text" placeholder="Car Name" value={form.title} onChange={handleChange} /> 
                        <input name="recommend" type="number" placeholder="Recommend %" value={form.recommend} onChange={handleChange} /> 
                        <input name="sold" type="number" placeholder="Sold in K" value={form.sold} onChange={handleChange} />
                        <input name="hour" type="number" placeholder="Price per hour" value={form.hour} onChange={handleChange} />
                    </div>

                    <div className="inputsImg">
                        {form.img && (
                            <div className="preview">
                                <img src={form.img} alt="preview" width={150} />
                            </div>
                        )}
                        <label htmlFor="upload" className="uploadBtn">Upload Image</label>
                        <input type="file" id="upload" accept="image/*" onChange={handleImage} />
                    </div>

                    {form.img && (
                        <div className="previewBig">
                            <img src={form.img} alt="preview" width={150} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default DriwerPage;
