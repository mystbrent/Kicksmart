import React from 'react';
import app from '../app';
import AddShoesForm from '../dumb/addShoes';
import { Redirect } from 'react-router-dom';

export default class AddShoesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            successful : false,            
            open : true,
            name : '',
            brand : '',
            gender : '',
            price : '',
            colors : [],
            shoesColors : [],
            sizes : [],
            shoesSizes : [],
            user : props.user,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addColorChip = this.addColorChip.bind(this);
        this.addSizeChip = this.addSizeChip.bind(this);
        this.deleteSizeChip = this.deleteSizeChip.bind(this);
        this.deleteColorChip = this.deleteColorChip.bind(this);
    }

    handleChange(event) {
        const field = event.target.name;
        this.setState({[field] : event.target.value});
    }

    handleClose() {
        this.setState({open : false});
    }

    async handleSubmit() {
        const service = app.service('/api/shoes');
        const data = {
            name : this.state.name,
            brand : this.state.brand,
            gender : this.state.gender,
            price : parseFloat(this.state.price),
            availableColors : this.state.shoesColors,
            availableSizes : this.state.shoesSizes,
            image : '/images/' + this.state.name + '.jpg',
            brandIcon : '/images/' + this.state.brand + '.jpg',
        };
        const query = await service.create(data);
        if (query) {
            this.setState({successful : true});
        }
    }

    addColorChip(data) {
        const value = data.split(':')[0];
        const qty = data.split(':')[1];
        const chip = {color : value, quantity : parseInt(qty)};
        this.state.shoesColors.push(chip);
        this.setState({colors : this.state.colors.concat(value)});
    }

    addSizeChip(data) {
        const value = data.split(':')[0];
        const qty = data.split(':')[1];
        const chip = {size : value, quantity : parseInt(qty)};
        this.state.shoesSizes.push(chip);
        this.setState({sizes : this.state.sizes.concat(value)});
    }

    async deleteColorChip(chip, index) {
        const remaining = this.state.colors.filter(obj => (obj !== chip));
        this.setState({colors : remaining});
        const shoesColors = this.state.shoesColors.filter(obj => (obj.color !== chip));
        await this.setState({shoesColors})
    }

    async deleteSizeChip(chip, index) {
        const remaining = this.state.sizes.filter(obj => (obj !== chip));
        this.setState({sizes : remaining});
        const shoesSizes = this.state.shoesSizes.filter(obj => (obj.color !== chip));
        await this.setState({shoesSizes})
    }
    render() {
        return (
            <div>
                {
                (this.state.successful) ?
                <Redirect to="/store" /> :
                <AddShoesForm
                state={this.state.open}
                name={this.state.name}
                brand={this.state.brand}
                gender={this.state.gender}
                close={this.handleClose}
                price={this.state.price}
                submit={this.handleSubmit}
                colors={this.state.colors}
                sizes={this.state.sizes}
                addColorChip={this.addColorChip}
                addSizeChip={this.addSizeChip}
                deleteColorChip={this.deleteColorChip}
                deleteSizeChip={this.deleteSizeChip}
                onChange={this.handleChange}
                />
                }
            </div>
        )
    }
}