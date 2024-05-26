import { dbService, storageService } from "fbase";
import { useState, useEffect } from 'react';
import Kweet from "components/Kweet";
import KweetFactory from "../components/KweetFactory";
import { v4 as uuidv4 } from 'uuid';

const Home = ({ userObj }) => {
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
    }, [kweets]);

    return (
        <div className="container">
            <KweetFactory userObj={userObj} />
            <div style={{marginTop: 30}}>
            {kweets.map((data) => (
                    <Kweet
                        key={data.id}
                        kweetObj={data}
                        isOwner={data.createId === userObj.uid}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home;