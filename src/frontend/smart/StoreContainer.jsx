import React from 'react';
import Store from '../dumb/Store';
import app from '../app';
import Shoes from '../../models/Shoes';
import { Route, Redirect } from 'react-router-dom';
import Loading from '../dumb/LoadingProgress';


export default class StoreContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue : '',
            shoes : [],
            selectValue : '',
            user : props.user,
            dataSource : [],
        }

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

     async handleChange(event) {
        // const field = event.target.name
        await this.setState({searchValue : event});
        await this.retrieveShoesWithCategory();
    }

     async handleSelectChange(event) {
        const category = event.target.innerText;
        await this.setState({selectValue : category});
        await this.retrieveShoesWithCategory();
        const dataSource = await this.getSuggestions(this.state.selectValue);
        await this.setState({searchValue : ''});        
        this.setState({dataSource});
    }

    async retrieveShoesWithCategory() {
        const service = app.service('/api/shop');
        const results = await this.findShoes(this.state.selectValue, this.state.searchValue);
        this.setState({shoes : results});
    }

    async getSuggestions(option) {
        const service = app.service('/api/shoes');
        let results = await service.find();
        if (option === 'Name') {
            results = results.map(doc => doc.name);
        }
        else if (option === 'Size') {
            const sizes = [];
            results.forEach(doc => {
                doc.availableSizes.forEach(res => {
                    if(!sizes.includes(res.size.toString())) {
                        sizes.push(res.size.toString());                        
                    }
                });
            });
            results = sizes;
        }
        else if (option === 'Color') {
            const colors = [];
            results.forEach(doc => {
                doc.availableColors.forEach(res => {
                    if(!colors.includes(res.color)) {
                        colors.push(res.color);                        
                    }
                });
            });
            results = colors;
        }
        else if (option === 'Brand') {
            const brands = [];
            results.forEach(doc => {
                if (!brands.includes(doc.brand)) {
                    brands.push(doc.brand);
                }
            });
            results = brands;            
        }
        return results;
    }

    async findShoes(option, object) {
        const service = app.service('/api/shoes');
        let results;
        if (option === 'All') {
            results = await service.find();
        }
        else if (option === 'Budget') {
            results = await service.find({query : {price : {$lte : parseFloat(object)}}});
        }
        else if (option === 'Size') {
            results = await service.find({query : {availableSizes : {$elemMatch : {size : parseInt(object)}}}});
        }
        else if (option === 'Color') {
            results = await service.find({query : {availableColors : {$elemMatch : {color : object}}}});
        }
        else {
            option = option.toLowerCase();
            results = await service.find({query : {[option] : {$regex : object, $options : 'i'}}});
        }
        results = results.map(shoes => new Shoes(shoes));
        return results;
    }


    async retrieveShoes() {
        const service = app.service('/api/shoes');
        let allShoes = await service.find();
        allShoes = allShoes.map(shoes => new Shoes(shoes));
        await this.setState({shoes : allShoes});
    }

    componentDidMount() {
        this.retrieveShoes();
        app.service('/api/shoes').on('created' , newShoes => {
            this.setState({shoes : this.state.shoes.concat(newShoes)});
        });
        app.service('/api/shoes').on('removed', deletedShoes => {
            this.setState({shoes : this.state.shoes.filter(shoes => deletedShoes.name !== shoes.name)});
        });
    }

    render() {
        return (
            <div> 
                {
                (this.state.shoes)  ? 
                <Store
                searchValue={this.state.searchValue}
                shoes={this.state.shoes}
                handleChange={this.handleChange}
                handleSelectChange={this.handleSelectChange}
                selectValue={this.state.selectValue}
                dataSource={this.state.dataSource}
                /> : <Loading />
                }
            </div>    
        )
    }
}