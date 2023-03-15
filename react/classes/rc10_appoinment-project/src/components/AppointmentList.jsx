import Container from "react-bootstrap/Container";

const AppointmentList = ({ appointments, setAppointments }) => {
  //setAppointments([]);
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2">Appointment List</h3>

      {!appointments.length && <img src="./img/appointment.jpg" alt="" />}
    </Container>
  );
};

export default AppointmentList;
