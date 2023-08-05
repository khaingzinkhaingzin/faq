import React, { useState } from "react";

const Question = ({ question }) => {
    const [open, setOpen] = useState(false);
	return (
		<section>
			<div className={open ? 'opened' : 'closed'}>
				<h3>{question.title}</h3>
				<button onClick={() => setOpen(!open)}>{open ? '-' : '+'}</button>
			</div>
			{open && <p>{question.info}</p>}
		</section>
	);
};

export default Question;
