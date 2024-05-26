import { authService, dbService } from "fbase";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {Table} from 'antd';

const Profile = ({ userObj, refeshUser }) => {
    const navigate = useNavigate();
    const [datas, setDatas] = useState([]);
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

    const columns = [
        {
            title: 'Text',
            dataIndex: 'text',
            key: 'text',
        },
        {
            title: 'Created At',
            dataIndex: 'createAt',
            key: 'createAt',
        },
        // Add more columns as needed
    ];
    const onLogOutClick = () => {
        authService.signOut();
        navigate('/');
    };

    const onChane = (e) => {
        const {
            target: { value },
        } = e;
        setNewDisplayName(value);
    }

    const getMyKweets = async () => {

        try {
            const kweetsSnapshot = await dbService.collection('kweets')
                .where('createId', '==', userObj.uid)
                .orderBy('createAt', 'asc') // ensure this matches exactly with the indexed field
                .get();
            console.log(kweetsSnapshot.docs.map((doc) => doc.data()));
            const kweetsData = kweetsSnapshot.docs.map((doc) => ({
                ...doc.data(),
                key: doc.id,  // Use the document ID as the key
            }));
            setDatas(kweetsData)
        } catch (error) {
            console.error("Error fetching kweets: ", error);
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (userObj.displayName !== newDisplayName) {
            await userObj.updateProfile({displayName: newDisplayName});
        }
        refeshUser();
    }

    useEffect(() => {
        getMyKweets();
    }, []);

    return (
        <div className="container">
            <form onSubmit={onSubmit} className="profileForm">
                <input onChange={onChane} type="text" placeholder="Display name" value={newDisplayName} autoFocus className="formInput" />
                <input type="submit" value="Update Profile" className="formBtn" style={{ marginTop: 10}} />
            </form>
            <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>Log Out</span>
            <Table dataSource={datas} columns={columns} />;

        </div>
    )
}

export default Profile;
