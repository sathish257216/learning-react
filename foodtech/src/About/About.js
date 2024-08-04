import User from "./User";
import UserClass from "./UserClass";

const AboutComponent = () => {
    return (
        <div className="about-container">
            <h2>People work here</h2>
            <User name="Sathish Kumar (Functional)" location="Troy"/>
            <UserClass name="Sathish Kumar (Class)" location="Troy"/>
        </div>
    )
}

export default AboutComponent;