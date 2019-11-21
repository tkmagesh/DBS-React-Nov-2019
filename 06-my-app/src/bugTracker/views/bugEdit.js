import React , { useState } from 'react';

let BugEdit = ({ addNew }) => {
    let [newBugName, setNewBugName] = useState('');
    return (
        <section className="edit">
            <label htmlFor="">Bug Name :</label>
            <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
            <input type="button" value="Add New" onClick={() => addNew(newBugName)} />
        </section>
    )
}

export default BugEdit;