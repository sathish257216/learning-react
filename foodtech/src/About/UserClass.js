import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 0, count2: 2 };
        console.log("Child constructor");
    }

    componentDidMount() {
        console.log("Child Component did mount");
    }

    render() {
        console.log("Child render");
        return (
            <div className="user-card">
                <div>
                    <h3>Name: {this.props.user.login}</h3>
                    <img src={this.props.user.avatar_url} alt="user-img"></img>
                </div>
            </div>
        );
    }
}

export default UserClass;