import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCompound } from "../actions/compounds";

const AddCompound = () => {
	const initialCompoundState = {
		comp_id: null,
		comp_index: "",
		comp_material: "",
		comp_notation: "",
		comp_mol2: null,
		comp_components: "",
		comp_properties: "",
		comp_activities: "",
		comp_overallProperties: "",
		comp_overallActivities: ""
  };

	const [compound, setCompound] = useState(initialCompoundState);
	const [submitted, setSubmitted] = useState(false);

	const dispatch = useDispatch();

	const handleInputChange = event => {
		const { name, value } = event.target;
		setCompound({ ...compound, [name]: value });
	};

	const saveCompound = () => {
		const { title, description } = compound;

		dispatch(createCompound(title, description))
			.then(data => {
				setCompound({
					comp_index: data.comp_index,
					comp_material: data.comp_material,
					comp_notation: data.comp_notation,
					comp_mol2: data.comp_mol2,
					comp_components: data.comp_components,
					comp_properties: data.comp_properties,
					comp_activities: data.comp_activities,
					comp_overallProperties: data.comp_overallProperties,
					comp_overallActivities: data.comp_overallActivities
        			});
        			setSubmitted(true);

        			console.log(data);
      			})
			.catch(e => {
				console.log(e);
			});
	};

	const newCompound = () => {
		setCompound(initialCompoundState);
		setSubmitted(false);
	};

  return(
	<div className="submit-form">
	  {submitted ? (
		  <div>
			<h4>Compound data submitted succesfully!</h4>
			<button className="btn btn-success" onClick={newCompound}>Add</button>
		  </div>
	  ) : (
		  <div>
		  	<div className="form-group">
		  		<label htmlFor="comp_index">Compound Index</label>
		 		<input
		  			type="text"
		  			className="form-control"
		  			id="comp_index"
		  			required
		  			value={compound.comp_index}
		  			onChange={handleInputChange}
		  			name="comp_index"
		  		/>
		  	</div>

		  	<div className="form-group">
		  		<label htmlFor="comp_material">Compound Material</label>
		 		<input
		  			type="text"
		  			className="form-control"
		  			id="comp_material"
		  			required
		  			value={compound.comp_material}
		  			onChange={handleInputChange}
		  			name="comp_material"
		  		/>
		  	</div>

		  	<div className="form-group">
		  		<label htmlFor="comp_notation">Compound Notation</label>
		 		<input
		  			type="text"
		  			className="form-control"
		  			id="comp_notation"
		  			required
		  			value={compound.comp_notation}
		  			onChange={handleInputChange}
		  			name="comp_notation"
		  		/>
		  	</div>

			<div className="form-group">
				<label htmlFor="comp_mol2">Compound mol2</label>
		 		<input
		  			type="file"
		  			className="form-control"
		  			id="comp_mol2"
		  			value={compound.comp_index}
		  			onChange={handleInputChange}
		  			name="comp_index"
		  		/>
		  	</div>


		  	<button onClick={saveCompound} className="btn btn-success">Submit</button>
		  </div>
		)}
	  </div>
	);
};

export default AddCompound;
