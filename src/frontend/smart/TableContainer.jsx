import React from 'react';
import app from '../app';
import AdminView from '../dumb/adminView';
import Loading from '../dumb/LoadingProgress';

export default class AdminViewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collection : props.props.match.params.name.toLowerCase(),
            data : [],
            selectedData : [],
            user : props.user,
            properties : [],
        }
        this.handleRowSelect = this.handleRowSelect.bind(this);
    }

    handleRowSelect(row) {
        this.state.selectedData = this.state.selectedData.concat(row);
    }


    async retrieveData() {
        const url = '/api/' + this.state.collection;
        const service = app.service(url);
        const data = await service.find();
        const properties = Object.getOwnPropertyNames(data[0]);
        this.setState({properties});
        // console.log(data);
        this.setState({data});
    }
    
    componentWillMount() {
        this.retrieveData();
        app.service('/api/' + this.state.collection).on('created' , newData => {
            this.setState({data : this.state.data.concat(newData)});
        });
    }

    render() {
        return (
            (this.state.user && this.state.data && this.state.user.type === 'Admin') ?
            <AdminView
            data={this.state.data}
            properties={this.state.properties}
            />
            : <Loading />
        );
    }
}