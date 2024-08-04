const User = ({name, location}) => {
    return (
        <div class="user-card">
            <h3>{name}</h3>
            <h3>{location}</h3>
        </div>
    )
}

export default User;