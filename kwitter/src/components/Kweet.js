import { dbService } from "fbase";
import { useState } from 'react';

const Kweet = ({ kweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newKweet, setNewKweet] = useState(kweetObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm("삭제할?")

        if (ok) {
            const data = await dbService.doc(`kweets/${kweetObj.id}`).delete();
            console.log(data);
        }
    }

    const toggleEditing = () => {
        setEditing((prev) => !prev);
    }

    const onChange = (e) => {
        const {
            target: { value },
        } = e;

        setNewKweet(value)
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await dbService.doc(`kweets/${kweetObj.id}`).update({ text: newKweet});
        setEditing(false);
    }
    return (
        <div>
            {editing ? (
                <>
                    <form onSubmit={onSubmit}>
                        <input onChange={onChange} value={newKweet} required />
                        <input type="submit" value="Update Kweet" />
                    </form>
                    <button onClick={toggleEditing}>Cancel</button>
                </>
            ): (
                <>
                    <h4>{kweetObj.text}</h4>
                    { isOwner && (
                        <>
                            <button onClick={onDeleteClick}>Delete Kweet</button>
                            <button onClick={toggleEditing}>Edit Kweet</button>
                        </>
                    )}
                </>
                )
            }

        </div>
    )
}

export default Kweet;