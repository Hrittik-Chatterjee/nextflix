'use client'
import contactStyles from '@/app/contactus/contact.module.css'
import { Mulish } from 'next/font/google';
import { useState } from 'react';

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})
const ContactForm = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        phone: '',
        message: ''
    })
    const [status, setStatus] = useState(null);

    function handleChange (e) {
        const name = e.target.name 
        const value = e.target.value
        
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('../api/contact', {
                method:'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username:user.username,
                    email:user.email,
                    phone:user.phone,
                    message:user.message
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus('success');
            } else {
                setStatus('error');
            }

        }catch (e) {
            console.log(e)
        }

    }


   
    return (
        <form className={contactStyles.contact_form} onSubmit={handleSubmit}>
            {/* username */}
            <div className={contactStyles.input_field}>

                <label htmlFor='username' className={contactStyles.label}>
                    Enter Your Name
                    <input type='text' name='username' id='username' placeholder='Enter Your Name' className={mulish.className}
                     value={user.username} onChange={handleChange} autoComplete='off' required/>
                </label>
            </div>
            {/* email */}
            <div className={contactStyles.input_field}>

                <label htmlFor='email' className={contactStyles.label}>
                    Enter Your Email
                    <input type='text' name='email' id='emal' placeholder='example@email.com' className={mulish.className} 
                    value={user.email} onChange={handleChange} autoComplete='off' required/>
                </label>
            </div>
            {/* phone number */}
            <div className={contactStyles.input_field}>

                <label htmlFor='phone' className={contactStyles.label}>
                    Enter Your Phone Number
                    <input type='number' name='phone' id='phone' placeholder='Enter Your Contact Number' className={mulish.className} 
                    value={user.phone} onChange={handleChange} autoComplete='off' required/>
                </label>
            </div>
            {/* message */}
            <div className={contactStyles.input_field}>

                <label htmlFor='message' className={contactStyles.label}>
                    Enter Your Message Here
                    <textarea rows={5} name='message' id='message' placeholder='Your Message Here' className={mulish.className} 
                    value={user.message} onChange={handleChange} autoComplete='off' required/>
                </label>
            </div>

            <div>
                 {status === 'success' && <p className={contactStyles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={contactStyles.error_msg}>There was an error submitting your message. Please try again.</p>}
                <button type='submit' className={mulish.className}>Send Message</button>
            </div>
        </form>
    );
};

export default ContactForm;