import {sidebarData} from "@/layout/main/componets/sidebar/utils/sidebarData";
import SidebarTab from "@/layout/main/componets/sidebar/SidebarTab/SidebarTab";
import styles from './Sidebar.module.scss'
const Sidebar = () => {
    return (
        <aside className={styles.aside}>
            {
                sidebarData.map(({icon, title})=> <SidebarTab key={title} icon={icon} title={title}/>)
            }
        </aside>
    );
};

export default Sidebar;