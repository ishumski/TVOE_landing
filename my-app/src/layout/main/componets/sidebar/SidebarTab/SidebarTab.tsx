import styles from './SidebarTab.module.scss'
import {FC, ReactNode} from "react";
import Link from "next/link";

type TProps = {
    icon:ReactNode,
    title: string
}

const SidebarTab:FC<TProps> = ({icon, title}) => {
    return (
        <Link href='#' prefetch={false} className={styles.tab}>
            {icon}
            <p className={styles.title}>{title}</p>
        </Link>
    );
};

export default SidebarTab;