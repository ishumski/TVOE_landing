import {newsLineData} from "@/layout/main/componets/main/utils/newsLineData";
import {readMoreData} from "@/layout/main/componets/main/utils/readMoreData";
import {incidentData} from "@/layout/main/componets/main/utils/incidentData";
import NewslineRow from "@/shared/components/NewslineRow/NewslineRow";
import RunningLine from "@/shared/components/RunningLine/RunningLine";
import Advertising from "@/shared/components/Advertising/Advertising";
import ReadMoreCard from "@/layout/main/componets/main/components/cards/ReadMoreCard/ReadMoreCard";
import NewsCard from "@/shared/components/NewsCard/NewsCard";
import IncidentsCard from "@/layout/main/componets/main/components/cards/IncidentsCard/IncidentsCard";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.news}>
                <div className={styles.newsLine}>
                    <h1 className={styles.title}>Лента</h1>
                    <div className={styles.newsLineContainer}>
                        {
                            newsLineData.map(({title, time, tagText}) =>
                                <NewslineRow key={title} title={title} time={time} tagText={tagText}/>)
                        }
                    </div>
                    <RunningLine/>
                </div>
                <Advertising/>
            </div>
            <NewsCard title='Читать также' cardStyles={styles.wrapper}>
                <div className={styles.container}>
                    {
                        readMoreData.map(({tag, date, title})=>
                            <ReadMoreCard key={title} title={title} date={date} tagText={tag} />   )
                    }
                </div>
            </NewsCard>
            <NewsCard title='Происшествия' cardStyles={styles.accidents}>
                <div className={styles.container}>
                    {
                        incidentData.map(({title, date, src}) =>
                            <IncidentsCard
                                key={title}
                                date={date}
                                title={title}
                                image={src!}
                            />)
                    }
                </div>
            </NewsCard>
        </main>
    );
}
