import { Link } from "react-router-dom";

const Home = function () {
  return (
    <>
      <h1>HOME</h1>

      <nav>
        <Link to="activo">activo</Link>
        <Link to="crear">crear</Link>
      </nav>
    </>
  );
};
export default Home;
