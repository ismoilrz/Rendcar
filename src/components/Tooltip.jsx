const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length > 0) {
    return (
      <div style={{
        background: "#2B2945",
        color: "#fff",
        padding: "10px 15px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        fontFamily: "Roboto",
        fontSize: "12px",
        fontWeight: "700",
      }}>
        <p>{payload[0].payload.day}: {payload[0].value} km</p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip
