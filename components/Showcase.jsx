import Layout from "@/Layout";
import LinkIcon from "@/icons/LinkIcon";
import { Inter } from "next/font/google";

import GithubIcon from "@/icons/GithubIcon";

import styles from "../styles/showcase.module.scss";



const inter = Inter({ subsets: ['latin'], weight: ['600'] });

export default function Showcase({ name, description, repository, livesite }) {
    const imgsrc = `/projects/${name}`.toLowerCase().replace(/\s+/g, '');
    
    return <Layout>
        <div className={styles.projectwrapper}>
            <h1 className={styles.heading}>Project Showcase</h1>
            <div className={styles.projectcontent}>
                <div className={styles.projectdetails}>
                    <div className={styles.projectsummary}>
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
                    <div className={styles.projectaccess}>
                        <span className={styles.repositorylogin}>
                            USERNAME: frankiebruno <br />
                            PASSWORD: Archvile1991
                        </span>
                        <div className={`${styles.projectlinks} ${inter.className}`}>
                            <a href={repository} className={styles.repository} target="_blank" rel="noopener">
                                Repository 
                                <GithubIcon className={styles.githubicon} />
                            </a>
                            <a href={livesite} className={styles.livesite} target="_blank" rel="noopener">
                                Live Site 
                                <LinkIcon className={styles.linkicon} />
                            </a>
                            {/* <button href={livesite} className={styles.livesite}>Live Site <LinkIcon className={styles.linkicon} /></button> */}
                        </div>
                    </div>
                </div>
                <div className={styles.projectdisplay}>
                    <img
                        src={`${imgsrc}/large.png`}
                        srcSet={`
                            ${imgsrc}/small.png 410w,
                            ${imgsrc}/medium.png 820w,
                            ${imgsrc}/large.png 1230w`}
                        sizes="
                            (max-width: 600px) 80vw,
                            (max-width: 900px) 90vw,
                            (max-width: 1200px) 50vw,
                            50vw"
                        alt={`Image of ${name} promo.`}
                    /> 
                </div>
            </div>
        </div>
    </Layout>;
};