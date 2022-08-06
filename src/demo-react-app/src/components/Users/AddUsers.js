import React from "react";

const AddUsers = props => {
    const addUserHandler = event => {
        event.preventDefault();
    }
    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username"/>
            <label htmlFor="age">Age (Years)</label>
            <input type="text" id="age"/>
            <button type="submit">Add User</button>
        </form>
    );
}

export default AddUsers;