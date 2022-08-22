const checkLogin = (users, setLoggedInUser, navigate) => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        setLoggedInUser(user);
        navigate(`/user/${user.id}`);
    } else {
        alert('Login failed');
    }
}

export default checkLogin