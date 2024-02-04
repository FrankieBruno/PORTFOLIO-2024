import { Bricolage_Grotesque } from 'next/font/google';
import "../styles/globals.css";

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800'] });

export default function Application({ Component, pageProps }) {
    return <main className={bricolageGrotesque.className}>
        <Component {...pageProps} />
    </main>;
};