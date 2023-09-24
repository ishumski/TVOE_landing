import styles from './SidebarTab.module.scss'
import {FC, ReactNode} from "react";

type TProps = {
    icon:ReactNode,
    title: string
}

const SidebarTab:FC<TProps> = ({icon, title}) => {
    return (
        <div className={styles.tab}>
            {icon}
            <p className={styles.title}>{title}</p>
        </div>
    );
};

export default SidebarTab;