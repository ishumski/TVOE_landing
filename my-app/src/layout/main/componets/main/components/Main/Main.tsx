import ReadMore from "@/layout/main/componets/main/components/ReadMore/ReadMore";
import Incidents from "@/layout/main/componets/main/components/Incidents/Incidents";
import NewsLine from "@/layout/main/componets/main/components/NewsLine/NewsLine";
import styles from './Main.module.scss'

const Main = () => {
    return (
        <main className={styles.main}>
            <NewsLine/>
            <ReadMore/>
            <Incidents/>
        </main>
    );
};

export default Main;