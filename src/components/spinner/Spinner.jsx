import spinner from "../../assets/spinner.gif";
function Spinner() {
  return (
    <div style={{ width: "100vw", height: "100vh", margin: "auto" }}>
      <img
        src={spinner}
        alt="Loading..."
        style={{ height: "200px", width: "200px", marginTop: "25%" }}
      />
    </div>
  );
}

export default Spinner;
