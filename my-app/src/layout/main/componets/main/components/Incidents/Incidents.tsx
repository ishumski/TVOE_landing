import NewsCard from "@/layout/main/componets/main/components/cards/NewsCard/NewsCard";
import {incidentData} from "@/layout/main/componets/main/utils/incidentData";
import IncidentsCard from "@/layout/main/componets/main/components/cards/IncidentsCard/IncidentsCard";
import styles from './Incidents.module.scss'

const Incidents = () => {
    return (
        <NewsCard title='Происшествия' cardStyles={styles.wrapper}>
            <div className={styles.container}>
                {
                    incidentData.map(({title, date}) =>
                        <IncidentsCard key={title} date={date} title={title}/>)
                }
            </div>
        </NewsCard>
    );
};

export default Incidents;