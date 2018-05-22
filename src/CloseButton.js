import React from "react";

const CloseButton = (props) => {
	const closeButtonStyle = {
		width: "60px",
		height: "60px",
		display: "block",
		padding: "10px",
		fill: "white",
		backgroundColor: "black",
		cursor: "pointer"
	};

	return (
		<div {...props} style={{...closeButtonStyle, ...props.style}}>
			<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
		</div>
	);
}

export default CloseButton;