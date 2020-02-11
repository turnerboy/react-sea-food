import React from "react";

class AddFishForm extends React.Component {
	nameRef = React.createRef();
	priceRef = React.createRef();
	statusRef = React.createRef();
	descRef = React.createRef();
	imageRef = React.createRef();

	createFish = (event) => {
        event.preventDefault();

        const fishes = {
            name: this.nameRef.current.value, 
            price: parseFloat(this.priceRef.current.value), 
            status: Boolean(this.statusRef.current.value), 
            desc: this.descRef.current.value, 
            image: this.imageRef.current.value
        }

        console.log(fishes)
	};

	render() {
		return (
			<form className="fish-edit" onSubmit={this.createFish}>
				<input name="name" ref={this.nameRef} type="text" placeholder="Name" />
				<input name="price" ref={this.priceRef} type="text" placeholder="Price" />
				<select name="status" ref={this.statusRef}>
					<option value="true">Fresh xD</option>
					<option value="false">Sold Out xP</option>
				</select>
				<textarea
					name="desc"
					ref={this.descRef}
					type="text"
					placeholder="Description"
				></textarea>
				<input name="image" ref={this.imageRef} type="text" placeholder="Image" />
				<button type="submit">+ Add Fish</button>
			</form>
			// 1.name
			// 2.price
			// 3.status
			// 4.desc
			// 5.image
		);
	}
}

export default AddFishForm;
