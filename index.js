const Notification = (props) => {
  //  Write your code here.
  const { urlLink, msgTxt, className } = props;
  return (
    <div className={`${className}`}>
      <img className="icon" src={`${urlLink}`} />
      <p className="message">{msgTxt}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bgContainer">
    <h1 className="heading">Notifications</h1>
    <div className="buttonContainer">
      <Notification
        className="msgCardBlue"
        msgTxt="Information Message"
        urlLink="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="msgCardGreen"
        msgTxt="Success Message"
        urlLink="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="msgCardYellow"
        msgTxt="Warning Message"
        urlLink="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="msgCardRed"
        msgTxt="Error Message"
        urlLink="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
