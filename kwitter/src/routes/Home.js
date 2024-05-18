import { dbService } from "fbase";
import { useState, useEffect } from 'react';
import Kweet from "components/Kweet";
const Home = ({ userObj }) => {
    const [kweet, setKweet] = useState('');
    const [kweets, setKweets] = useState([]);

    const getKeets = async () => {
        dbService.collection("kweets").onSnapshot((snapshot) => {
            const kweetArray = snapshot.docs.map((document) => ({
                ...document.data(),  // 실제 문서를 객체로 반환
                id: document.id,
            }));
            setKweets(kweetArray)
        })
    }

    useEffect( () => {
        const fetchData = async () => {
            await getKeets();
        };
        fetchData();
    }, [])

    useEffect(() => {
        console.log('kweets updated >> ', kweets);
    }, [kweets]);

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("kweets").add({
            text: kweet,
            createAt: Date.now(),
            createId: userObj.uid,
        });
        setKweet("");
    }

    const onChange = (event) => {
        event.preventDefault();
        const {
            target: { value },
        } = event;
        setKweet(value)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    value={kweet}
                    onChange={onChange}
                    type="text"
                    placeholder="what is your mind?"
                    maxLength={120}
                />
                <input type="submit" value="Kweet" />
            </form>
            <div>
                {kweets.map((data) => (
                    <Kweet
                        key={data.id}
                        kweetObj={data}
                        isOwner={data.createId === userObj.uid}
                    />
                ))}
            </div>
        </>
    )
}

export default Home;