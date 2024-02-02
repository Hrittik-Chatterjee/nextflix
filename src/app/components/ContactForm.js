import contactStyles from '@/app/contactus/contact.module.css'
import { Mulish } from 'next/font/google';

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})
const ContactForm = () => {
    return (
        <form className={contactStyles.contact_form}>
            {/* username */}
            <div className={contactStyles.input_field}>
               
                <label htmlFor='username' className={contactStyles.label}>
                Enter Your Name
                    <input type='text' name='username' id='username' placeholder='Enter Your Name' className={mulish.className}/>
                </label>
            </div>
            {/* email */}
            <div className={contactStyles.input_field}>
               
               <label htmlFor='email' className={contactStyles.label}>
               Enter Your Email
                   <input type='text' name='email' id='emal' placeholder='example@email.com' className={mulish.className}/>
               </label>
           </div>
            {/* phone number */}
           <div className={contactStyles.input_field}>
               
               <label htmlFor='phone' className={contactStyles.label}>
               Enter Your Phone Number
                   <input type='text' name='phone' id='phone' placeholder='Enter Your Contact Number' className={mulish.className}/>
               </label>
           </div>
            {/* messege */}
           <div className={contactStyles.input_field}>
               
               <label htmlFor='messege' className={contactStyles.label}>
               Enter Your Messege Here
                   <textarea rows={5} name='messege' id='messege' placeholder='Your Messege Here' className={mulish.className}/>
               </label>
           </div>

           <div>
                <button type='submit' className={mulish.className}>Send Messege</button>
           </div>
        </form>
    );
};

export default ContactForm;