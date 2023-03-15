import Msg from "./Msg";

const Person = ({ name, tel, img }) => {
  /* console.log(props); */

  /* Destructuring */
  /* const {name, tel, img} =props */
  return (
    <div>
      {/* Msg component is called */}
      <Msg name={name}/>
      <img style={{ width: "300px" }} src={img} alt="" />
      <p>tel is {tel}</p>
    </div>
  );
};

export default Person;
