import React, {useState} from 'react';

const Form = ({title, handleClick}) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <div>
            <input
                type="text"
                value={email}
                placeholder="email"
                onChange={e=> setEmail(e.target.value)}
            />
            <input
                type="password"
                value={pass}
                placeholder="password"
                onChange={e=> setPass(e.target.value)}
            />

            <button onClick={()=> handleClick(email, pass)}>
                {title}
            </button>
        </div>
    );
};

export default Form;