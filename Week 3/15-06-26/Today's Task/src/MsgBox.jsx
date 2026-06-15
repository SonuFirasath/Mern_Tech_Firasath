export default function MessageBox({ userName, textColor }) {

    let style = {color : textColor}

  return (
    <>
      <div className="MessageBox">
        <h2 style={style}> {userName} </h2>
      </div>
    </>
  );
}
