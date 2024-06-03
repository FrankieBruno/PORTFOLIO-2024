import Layout from '@/Layout';
import ContactForm from '@/ContactForm';
import Link from "next/link";
import styles from '../styles/projects.module.scss';

export default function Projects() {
  return <Layout>
    <div className={styles.projects}>
      <div className={styles.projectsmedia}>
        <img
          src="/frankie/small.png"
          srcSet="
                    /frankie/smallx.png 381w,
                    /frankie/small.png 571w,
                    /frankie/medium.png 761w,
                    /frankie/large.png 1522w,
                    /frankie/largex.png 2283w,
                    /frankie/largexx.png 3044w"
          sizes="
                    (max-width: 600px) 50vw,
                    (max-width: 900px) 33vw,
                    (max-width: 1200px) 25vw,
                    20vw"
          className={styles.projectsfg}
          alt="Image of Frankie Bruno in foreground."
        />

        <img
          className={styles.projectsbg}
          src="/landscape/medium.jpg"
          srcSet={`
                    /landscape/smallx.jpg 601w,
                    /landscape/small.jpg 902w,
                    /landscape/medium.jpg 1202w,
                    /landscape/large.jpg 2404w,
                    /landscape/largex.jpg 3606w,
                    /landscape/largexx.jpg 4808w
                `}
          sizes={`
                    (min-width: 1600px) 1600px,
                    (min-width: 1200px) 1200px,
                    (min-width: 800px) 800px,
                    (min-width: 600px) 600px,
                    (min-width: 500px) 500px,
                    400px
                `}
          alt="Landscape image behind Frankie Bruno."
        />
      </div>

      <div className={styles.projectsintro}>
        <h1 className={styles.introheading}>
          Web Developer
          {/* <br /> */}
          &nbsp;based out of
          {/* <br /> */}
          &nbsp;New Orleans,
          {/* <br /> */}
          &nbsp;Louisiana
        </h1>
        <div className={styles.introcolumn}>

          {/* Skills */}
          <div className={styles.introlists}>
            <div className={styles.introlist}>
              <span className={styles.introlistheading}>Functional skills</span>
              <span className={styles.introlistitem}>☐ Full Stack Development</span>
              <span className={styles.introlistitem}>☐ Frontend Development</span>
              <span className={styles.introlistitem}>☐ Backend Development</span>
              <span className={styles.introlistitem}>☐ Database Management</span>
              <span className={styles.introlistitem}>☐ Crossbrowser Compatibility</span>
              <span className={styles.introlistitem}>☐ Crossplatform Compatibility</span>
              <span className={styles.introlistitem}>☐ Client Relationship Management</span>
            </div>

            <div className={`${styles.introlist} ${styles.technicallist}`}>
              <span className={styles.introlistheading}>Technical skills</span>

              <div className={styles.introlistitem}>
                <span className={styles.introsubheading}>Frontend Development:</span>
                <span className={styles.introsubvalue}>React, Django, Tailwind, HTML5,<br /> CSS, Bootstrap</span>
              </div>

              <div className={styles.introlistitem}>
                <span className={styles.introsubheading}>Backend Development:</span>
                <span className={styles.introsubvalue}>Javascript, Python, MySQL,<br /> Node.js, MongoDB </span>
              </div>

              <div className={styles.introlistitem}>
                <span className={styles.introsubheading}>Database Management:</span>
                <span className={styles.introsubvalue}>SQL,  PostgreSQL </span>
              </div>

              <div className={styles.introlistitem}>
                <span className={styles.introsubheading}>Development &amp; Testing:</span>
                <span className={styles.introsubvalue}>Postman, REST</span>
              </div>
            </div>
          </div>

          {/* Portfolio Projects */}
          <h2 className={styles.gridtitle}>Portfolio Projects</h2>

          <div className={styles.projectcolumn}>
            <div className={styles.projectsgrid}>
              <Link href='/projects/honeyrae' className={styles.project}>
                <img className={styles.projectimg} src="/projects/honeyrae/small.png" />
              </Link>
              <Link href='/projects/stickerstorm' className={styles.project}>
                <img className={styles.projectimg} src="/projects/stickerstorm/small.png" />
              </Link>
              <Link href='/projects/land' className={styles.project}>
                <img className={styles.projectimg} src="/projects/land/small.png" />
              </Link>

            </div>
          </div>
          
        </div>
        {/* <ContactForm /> */}

        <div className={styles.footerDiv}>Made by Frankie Bruno</div>
      </div>

    </div>
  </Layout>;
};
