import React from 'react'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import axios from 'axios';
import {useState} from 'react';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import './Reservation.css'
const Reservation = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");
    const [phone,setPhone] = useState("");
    const navigate = useNavigate();

    const handleReservation = async (e)=>{
        if (!/^[0-9]{10}$/.test(phone)) {
  toast.error("Phone number must be exactly 10 digits");
  return;
}
        e.preventDefault();
        try{
            const {data} = await axios.post("https://restaurant-backend-aapu.onrender.com/api/reservation/send",{firstName,lastName,email,phone,date,time},
            {headers: {
                "Content-Type":"application/json"
            },
        withCredentials: true});
        toast.success(data.message);
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setTime("");
        setDate("");
        }catch(error){
            toast.error(
  error.response?.data?.message || error.message
);
        }
    };

return (
    <section className='reservation' id = 'reservation'>
        <div className="container">
            <div className="banner">
                
            </div>
            <div className="reservation_form_box">
                <h1>Make a reservation</h1>
                <p>for futher question please call</p>
                <form>
                    <div>
                        <input type="text" placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>

                        <input type="text" placeholder='Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>

                        <input type="tel" placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)}></input>

                        <input type="date" placeholder='Date' value={date} onChange={(e)=>setDate(e.target.value)}></input>

                        <input type="time" placeholder='time' value={time} onChange={(e)=>setTime(e.target.value)}></input>

                        <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>

                        <button type="submit" onClick={handleReservation}>Reserve Now
                            <HiOutlineArrowNarrowRight />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
)
}

export default Reservation