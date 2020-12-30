import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            job: ''
        };
    }

    inputChange = (e) => {
        // this.setState({
        //     name: document.getElementById("name").value,
        //     job: document.getElementById("job").value
        // });
        this.setState({ [e.target.name]: [e.target.value] })
    }

    sendTable = (e) => {
        e.preventDefault();
        this.props.updateName({ ...this.state });
        this.setState({ name: "", job: "" });
    }

    render() {
        const { name, job } = this.state;
        console.log(this.props)
        return (
            <form onSubmit={this.sendTable}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.inputChange}
                    value={this.state.name}
                />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={this.state.job}
                    onChange={this.inputChange}
                />
                <h2>Name : {this.state.name}</h2>
                <h2>Job  : {this.state.job}</h2>
                <button type="submit">Submit
                </button>
            </form>
        );
    }
}

export default Form;
