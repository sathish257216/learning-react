import React from "react";
import UserClass from "./UserClass";
import { USER_API } from "../utils/constant";
import UserContext from "../utils/UserContext";

class AboutComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: []};
        console.log("Parent constructor");
    }

    async componentDidMount() {
        console.log("Parent Component did mount");
        const users = await fetch(USER_API);
        this.setState({users: await users.json()});
        //this.timer = setInterval(() => {console.log(' interval')}, 1000);
    }

    componentDidUpdate() {
        console.log("Parent Component did update");
    }

    componentWillUnmount() {
        // this.timer?.clearInterval();
        console.log("Parent Component will unmount");
    }

    render() {
        console.log("Parent Render");
        return (
            <div className="about-container">
                <UserContext.Consumer>
                    {({userName}) => <h2>{userName}, </h2>}
                </UserContext.Consumer>
                <h4>People work here</h4>
                {
                    this.state.users.map((user) => (
                        <UserClass user={user} />
                    ))

                }
            </div>
        )
    };
}

export default AboutComponent;