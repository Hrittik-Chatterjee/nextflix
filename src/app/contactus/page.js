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


            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50825.64371584244!2d-121.99273492093323!3d37.23340465235893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e34365377033f%3A0xef675301ac748ca6!2sLos%20Gatos%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1706888954630!5m2!1sen!2sbd" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" className={contactStyles.mapping}  referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    );
};

export default page;