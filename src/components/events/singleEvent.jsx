import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';

export default function SingleEvent({ data }) {
    const EmailInput = useRef();
    const router = useRouter();
    const [message, setMessage] = useState('');

    const submitEmail = async (event) => {
        event.preventDefault();
        const emailValue = EmailInput.current.value;
        const eventID = router?.query.id;

        const validRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(!emailValue.match(validRegex)) {
            setMessage('Please introduce a correct email address');
        }

        try {
            const response = await fetch('/api/emailsToNotify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: emailValue, eventID})
            });

            if(!response.ok) throw new Error(`Error: ${response.status}`);
            const data = await response.json();
            setMessage(data.message);
            EmailInput.current.value = '';

        }catch(error) {
            console.log(error, 'Error')
        }
    };

    return (
        <div className='single-event'>
            <Image className='single-event-img' alt={data?.alt} width={850} height={400} src={data?.image} />
            <h1>{data?.title}</h1>
            <p>{data?.description}</p>

            <form onSubmit={submitEmail} className='email-form'>
                <label>Submit Email to get Notifications!!</label>
                <br/>
                <input id='emailid' ref={EmailInput} type='email' placeholder='Enter Email' />
                <button type='submit'> Submit </button>
            </form>
            <p>{message}</p>
        </div>
    )
}
