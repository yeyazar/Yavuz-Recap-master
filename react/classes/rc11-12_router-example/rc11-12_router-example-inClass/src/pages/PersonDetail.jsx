import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const PersonDetail = () => {
  const navigate = useNavigate();
  //   const { state: person } = useLocation();
  const { id } = useParams();
  // console.log(id);

  const [person, setPerson] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          setLoading(false);
          throw new Error("User can not be found");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setPerson(data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPerson();
  }, []);

  if (error) {
    return (
      <>
        <NotFound />
      </>
    );
  } else if (loading) {
    return (
      <div>
        <h1 className="text-center">Loading</h1>;
      </div>
    );
  } else {
    return (
      <div className="container text-center">
        <h3>
          {person?.first_name} {person?.last_name}
        </h3>
        <img className="rounded" src={person.avatar} alt="" />
        <p>{person?.email}</p>
        <button onClick={() => navigate("/")} className="btn btn-success me-3">
          Go Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
      </div>
    );
  }
};

export default PersonDetail;
