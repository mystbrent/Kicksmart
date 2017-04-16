import React from 'react';
import app from '../app';
import GridList from '../dumb/GridList';
import Shoes from '../../models/Shoes';
import Loading from '../dumb/LoadingProgress';

export default class GridContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user : props.user,
            menShoes : undefined,
            femaleShoes : undefined,
            highRatingShoes : undefined,
            discountedShoes : undefined,
            trendingShoes : undefined,
            running : undefined,
            stepIn : undefined,
            boots : undefined,
            sandals : undefined,
            basketball : undefined,
            formal : undefined,
            inDoor : undefined,
        }

    }

    async retrieveShoes() {
        const service = app.service('/api/shoes');
        let allShoes = await service.find();
        allShoes = allShoes.map(shoes => new Shoes(shoes));
        const menShoes = await service.find({query : {gender : 'Men'}});
        const femaleShoes = await service.find({query : {gender : 'Women'}});
        const running = await service.find({query : {tags : 'Running'}});
        const stepIn = await service.find({query : {tags : 'Step-In'}});
        const inDoor = await service.find({query : {tags : 'In-Door'}});
        const boots = await service.find({query : {tags : 'Boots'}});
        const sandals = await service.find({query : {tags : 'Sandals'}});
        const basketball = await service.find({query : {tags : 'Basketball'}});
        const formal = await service.find({query : {tags : 'Formal'}});
        // const discountedShoes = await service.find({query : {promos : {$not : {$size : 0}}}});
        const discountedShoes = allShoes.filter(shoes => shoes.hasPromo());
        const highRatingShoes = allShoes.filter(shoes => shoes.hasReview() && shoes.hasGoodReviews());
        this.setState({menShoes, femaleShoes, highRatingShoes, discountedShoes,
                        running, stepIn, boots, sandals, basketball, formal, inDoor});
    }

    componentWillMount() {
        this.retrieveShoes();
        const service = app.service('/api/shoes');
        service.on('created' , newShoes => {
            this.setState({shoes : this.state.shoes.concat(newShoes)});
        });
        service.on('removed' , deletedShoes => {
            this.setState({shoes : this.state.shoes.filter(shoes => shoes.name === deletedShoes.name)});
        });
    }

    shoesAreRetrieved() {
        return this.state.menShoes && this.state.femaleShoes && this.state.highRatingShoes
            && this.state.discountedShoes && this.state.running && this.state.stepIn && 
            this.state.boots && this.state.sandals && this.state.basketball
             && this.state.formal && this.state.inDoor;
    }

    render() {
        return (
            <div>
            {(this.shoesAreRetrieved()) ?
                <div>
                    <GridList tilesData={this.state.menShoes} tag='Men '/>
                    <GridList tilesData={this.state.femaleShoes} tag='Women '/>
                    <GridList tilesData={this.state.highRatingShoes} tag='High Rated'/>
                    <GridList tilesData={this.state.discountedShoes} tag='Sale'/>
                    <GridList tilesData={this.state.running} tag='Running'/>
                    <GridList tilesData={this.state.inDoor} tag='Indoor'/>
                    <GridList tilesData={this.state.stepIn} tag='Step-In'/> 
                    <GridList tilesData={this.state.boots} tag='Boots'/>
                    <GridList tilesData={this.state.sandals} tag='Sandals'/>
                    <GridList tilesData={this.state.basketball} tag='Basketball'/>
                </div>
            : <Loading/>}
            </div>
        );
    }
}