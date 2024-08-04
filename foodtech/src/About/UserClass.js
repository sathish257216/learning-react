import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="user-card">
                <h3>{this.props.name}</h3>
                <h3>{this.props.location}</h3>
            </div>
        );
    }
}

export default UserClass;