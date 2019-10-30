import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
      
        <img className="img-container" alt={props.name} src={props.image} onClick={() => props.checkImg(props.id)}  />
      
        // onClick={() => props.checkImg(props.id)}
        // onClick={function(event){ props.checkImg(props.id); props.count()}}
        
  );
}

export default FriendCard;
