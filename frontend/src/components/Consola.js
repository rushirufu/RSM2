const Consola = function ({ stateName }) {
  return (
    <>
      <pre style={{ color: "red" }}>
        {JSON.stringify({ stateName }, null, 3)}
      </pre>
    </>
  );
};
export default Consola;
