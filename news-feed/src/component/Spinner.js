import React from "react";

const Spinner=()=> {
	
		return (
      <div style={{ width: '100px', margin: '0 auto' }}>
        <div className="spinner-border text-primary" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
      </div>
			
		);
	
}

export default Spinner
