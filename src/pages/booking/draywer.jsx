import { useState } from "react";

import "./booking.css"

const DriwerPage = ({close, onAdd}) => {
    const [form, setForm] = useState({
    title: "",
    recommend: "",
    sold: "",
    hour: "",
    img: ""
  });

   const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

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
    const newCar = { key: Date.now(), ...form };
    onAdd(newCar); 
    setForm({ title: "", recommend: "", sold: "", hour: "", img: "" });
  };

     const closeProfil = (e) => {
        e.stopPropagation()
    }



    return <>   
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
                           <input name="title" type="text" placeholder="Car Name" onChange={handleChange} /> 
                           <input name="recommend" type="text" placeholder="Recommend" onChange={handleChange} /> 
                           <input name="sold" type="text" placeholder="Sold" onChange={handleChange} />
                           <input name="hour" type="text" placeholder="Hour" onChange={handleChange} />
                           <input type="file" accept="image/*" onChange={handleImage} />

                            {form.img && (
        <div>
          <p>Preview:</p>
          <img src={form.img} alt="preview" width={150} />
        </div>
      )}
                        </div>
                    </div>
                </section>   
           </>
}

export default DriwerPage