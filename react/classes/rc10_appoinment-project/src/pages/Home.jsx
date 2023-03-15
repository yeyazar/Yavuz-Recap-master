import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { doctorData } from "../helper/data";
import { appointmentData } from "../helper/data";

const Home = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [appointments, setAppointments] = useState(appointmentData);

  //! Mock data yerine API'den veri cekilseydi
  // const getAppointments = () =>{
  //   try {
  //     await {data} = await axios.get("url")
  //     setAppointments(data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(() => {
  //   getAppointments()
  // }, [])

  console.log(appointments);
  //  console.log(doctors);

  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors
        doctors={doctors}
        appointments={appointments}
        setAppointments={setAppointments}
      />
      <AppointmentList
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </main>
  );
};

export default Home;
