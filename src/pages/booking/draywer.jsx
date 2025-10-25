import "./booking.css"

const DriwerPage = ({close}) => {
     const closeProfil = (e) => {
        e.stopPropagation()
    }

    return <>   
                <section className="driver" onClick={close}>
                    <div className="driverMain" onClick={closeProfil}>
                        <div className="driverAddCar">
                            <p>ADD CAR:</p>
                            <div className="driverBtns">
                                <button className="submit">Submit</button>
                                <button className="exit" onClick={close}>X</button>
                            </div>
                        </div>
                    </div>
                </section>   
           </>
}

export default DriwerPage