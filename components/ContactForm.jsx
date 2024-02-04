import styles from "../styles/contactform.module.scss";

export default function ContactForm(){

    return <div className={styles.form}>
        <div className={styles.contacttext}>
            <span className={styles.greeting}>
                <span className={styles.bold}>Hi</span> Frankie, I&apos;m <span className={`${styles.bold} ${styles.underline}`}>A recruiter</span><br />
            </span>
            <span className={styles.offer}>
                How would you like to work at <span className={`${styles.bold} ${styles.underline}`}>Our Company</span>. We can schedule a meeting on <span className={`${styles.bold} ${styles.underline}`}>00/00/0000.</span><br />
            </span>

            <span className={styles.details}>
                Contact me on <span className={`${styles.bold} ${styles.underline}`}>recruiter@email.com</span> or call <span className={`${styles.bold} ${styles.underline}`}>000-000-000</span><br />
            </span>

            <div className={styles.actions}>
                <a className={styles.emaillink} href="mailto:frankiecyber@gmail.com">Send email</a> 
                <span className={styles.emaillinkinfo}>This goes to frankiecyber@gmail.com</span>
            </div>
        </div>
    </div>;
}