import Layout from '@/Layout';
import ContactForm from '@/ContactForm';
import styles from '../styles/contact.module.scss';
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaPhone } from "react-icons/fa6";
import Footer from '@/Footer';


export default function Contact() {
  return <Layout>
    <div className={styles.contact}>
      <h1 className={styles.contactheading}>Contact me regarding opportunities</h1>


      <div className={styles.contactdetails}>
        <div className={styles.iconLine}>
          <SiGmail />
          <span className={styles.spanItem}>
            Email:
            <a className={styles.link} href="mailto:frankiecyber@gmail.com">frankiecyber@gmail.com</a>
          </span>
        </div>

        <div className={styles.iconLine}>
          <FaPhone />
          <span className={styles.spanItem}>
            Phone:
            <a className={styles.link} href="tel:504-275-6267">504-275-6267</a>
          </span>
        </div>

        <div className={styles.iconLine}>
          <FaLinkedin />
          <span className={styles.spanItem}>
            Linkedin:
            <a className={styles.link} href="https://www.linkedin.com/in/frankiebrunojr/">linkedin.com/frankiebrunojr</a>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  </Layout >;
}
