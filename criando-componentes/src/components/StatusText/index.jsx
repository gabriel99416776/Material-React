function StatusText() {
  const status = false;
  return (

  <h2
  style={{
    color : status ? "#00ff00" : "#ff0000"
  }}
  >
  Current status: {status ? "ON" : "OFF"}
  </h2>

)
}

export default StatusText;
