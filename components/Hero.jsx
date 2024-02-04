import styles from "../styles/hero.module.scss";

export default function Hero(){
    return <div className={styles.hero}>
        <div className={styles.herotext}>
            <h1 className={styles.title}>Tech is the future <br /> &amp; my future!</h1>
            <p className={styles.blurb}>The Software Development and Cyber Security industries are my future.</p>
            <div className={styles.credentials}>
                <span className={styles.credentialslabel}>Credentials</span>
                <ul className={styles.credentialslist}>
                    <li>
                        <span className={styles.credentialname}>Cyber Security Analyst</span> 
                        <span className={styles.credentialdate}>Coursera Google certificate - Ongoing</span>
                    </li>
                    <li>
                        <span className={styles.credentialname}>Nashville Software School</span>
                        <span className={styles.credentialdate}>January 2023 - June 2023</span>
                    </li>
                    <li>
                        <span className={styles.credentialname}>University of Louisiana at Lafayette</span>
                        <span className={styles.credentialdate}>BA / General Studies | August 2017</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className={styles.heromedia}>
            <img 
                src="/frankie/medium.png"
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
                    (max-width: 1200px) 100vw,
                    20vw"
                className={styles.heromediafg}
                alt="Image of Frankie Bruno in foreground."
            />

            <img
                className={styles.heromediabg}
                src="/landscapeHalf/medium.jpg"
                srcSet="
                    /landscapeHalf/small.jpg 300w,
                    /landscapeHalf/smallx.jpg 600w,
                    /landscapeHalf/medium.jpg 900w,
                    /landscapeHalf/large.jpg 1200w,
                    /landscapeHalf/largex.jpg 1600w,
                    /landscapeHalf/largexx.jpg 2000w"
                sizes="
                    (max-width: 600px) 50vw,
                    (max-width: 900px) 33vw,
                    (max-width: 1200px) 25vw,
                    20vw"
                alt="Landscape image behind Frankie Bruno."
            />
        </div>
    </div>;
}