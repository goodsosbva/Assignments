import {dbService, storageService} from "fbase";
import { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faPencilAlt} from '@fortawesome/free-solid-svg-icons';

const Kweet = ({ kweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newKweet, setNewKweet] = useState(kweetObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm("삭제할?")

        if (ok) {
            await dbService.doc(`kweets/${kweetObj.id}`).delete();
            if (kweetObj.attachmentUrl !== "") {
                await storageService.refFromURL(kweetObj.attachmentUrl).delete();
            }
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
        <div className="nweet">
            {editing ? (
                <>
                    <form onSubmit={onSubmit} className="container nweetEdit">
                        <input onChange={onChange} value={newKweet} required placeholder="Edit your kweet" autoFocus className="formInput" />
                        <input type="submit" value="Update Kweet" className="formBtn" />
                    </form>
                    <button onClick={toggleEditing} className="formBtn cancelBtn">Cancel</button>
                </>
            ): (
                <>
                    <h4>{kweetObj.text}</h4>
                    { kweetObj.attachmentUrl && (
                        <img src={kweetObj.attachmentUrl} width="50px" height="50px" alt="img" />
                    )}
                    { isOwner && (
                        <div className="nweet__actions">
                            <button onClick={onDeleteClick}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                            <button onClick={toggleEditing}>
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </button>
                        </div>
                    )}
                </>
                )
            }

        </div>
    )
}

export default Kweet;