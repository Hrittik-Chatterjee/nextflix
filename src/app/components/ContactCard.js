import Link from 'next/link';
import contactStyles from '@/app/contactus/contact.module.css'
import { MdEmail, MdForum, MdVoiceChat } from "react-icons/md";

const ContactCard = () => {
    return (
        <div className={contactStyles.section}>
            <div className={contactStyles.container}>
                <div className={contactStyles.grid}>
                    <div className={contactStyles.grid_card}>
                        <i><MdEmail/></i>
                        <h2>Email</h2>
                        <p>Monday to Friday Expeceted</p>
                        <p className={contactStyles.last_para}> Response Time: 72 hours</p>
                        <Link href="mailto:hrittik0chatterjee@gmail.com">Send Email <span>-&gt;</span></Link>
                    </div>

                    <div className={contactStyles.grid_card}>
                        <i><MdVoiceChat/></i>
                        <h2>Live Chat</h2>
                        <p>Weekdays: 24 hours</p>
                        <p className={contactStyles.last_para}> Weekends: 9 AM to 9 PM ET</p>
                        <Link href='/'>Chat Now <span>-&gt;</span></Link>
                    </div>

                    <div className={contactStyles.grid_card}>
                        <i><MdForum/></i>
                        <h2>Community Forum</h2>
                        <p>Monday to Friday Expeceted</p>
                        <p className={contactStyles.last_para}>Proffesionals Response Time: 72 hours</p>
                        <Link href='/' >Ask The Community <span>-&gt;</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;