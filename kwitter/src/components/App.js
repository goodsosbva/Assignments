import { useEffect,useState } from 'react';
import AppRouter from "components/Router";
import {authService} from "fbase";

function App() {
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
    const [userObj, setUserObj] = useState(null);

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setUserObj({
                    uid: user.uid,
                    displayName: user.displayName,
                    updateProfile: (args) => user.updateProfile(args),
                });
            } else {
                setIsLoggedIn(false)
            }

            setInit(true);
        });
    })

    const refeshUser = () => {
        const user = authService.currentUser;
        setUserObj({
            uid: user.uid,
            displayName: user.displayName,
            updateProfile: (args) => user.updateProfile(args),
        })
    }

    return (
        <>
            {init ?   <AppRouter refeshUser={refeshUser} isLoggedIn={Boolean(userObj)} userObj={userObj} /> : 'initializing...'}
        </>
    );
}

export default App;
