import {useState} from 'react';
import AppRouter from "components/Router";
import {authService} from "fbase";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
    console.log(authService.currentUser);
    return (
        <>
            <AppRouter isLoggedIn={isLoggedIn} />
            <footer>&copy {new Date().getFullYear()} Kwitter</footer>
        </>
    );
}

export default App;
