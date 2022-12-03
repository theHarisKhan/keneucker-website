export default function How(props) {
  return (
    <div className="how-section">
      <h2 className="bold">How</h2>

      {props?.availabilty}

      <div className="btn-container">
        {props?.button1}
        {props?.button2}
      </div>

      {props?.sponsor}
      
    </div>
  );
}
