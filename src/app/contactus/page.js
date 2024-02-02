/* eslint-disable react/no-unescaped-entities */
import contactStyles from './contact.module.css'
import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';

const page = () => {
    return (
        <>
            <div className={contactStyles.container}>
                <h1>Contact Us</h1>
                <ContactCard></ContactCard>
                <section className={contactStyles.contact_section}>
                    <h2>We'd love to hear <span>from you</span></h2>
                    <ContactForm></ContactForm>
                </section>
            </div>
        </>
    );
};

export default page;