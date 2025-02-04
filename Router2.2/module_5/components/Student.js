import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";

const Student = (props) => {
  const match = useRouteMatch();
  const Location = useLocation();
  const history = useHistory();
  const params = useParams();
  console.log(match);
  console.log(Location);
  console.log(history);
  console.log(params);
  return (
    <div>
      <h4>Student</h4>
    </div>
  );
};

export default Student;
