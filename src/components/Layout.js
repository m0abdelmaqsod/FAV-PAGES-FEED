import Navbar from "./Navbar";
import Sidebar_left from "./Sidebar_left";
import Sidebar_right from "./Sidebar_right";
import styles from '../styles/components/Layout/Layout.module.css';
import Link from "next/link";
import {HiArrowUp} from 'react-icons/hi'

const Layout = ({ children }) => {
    return (
        <>
            <div className={styles.layout}>
                <div className={styles.arrow_scroll}>
                    <Link href=''><HiArrowUp /></Link>
                </div>
                <Navbar />
                <Sidebar_left />
                <Sidebar_right />

                {children}
            </div>


        </>
    )
}

export default Layout