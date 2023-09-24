import {newsLineData} from "@/layout/main/componets/main/utils/newsLineData";
import NewslineRow from "@/layout/main/componets/main/components/NewslineRow/NewslineRow";
import Advertising from "@/layout/main/componets/main/components/Advertising/Advertising";
import styles from "./NewsLine.module.scss";
import RunningLine from "@/layout/main/componets/main/components/RunningLine/RunningLine";

const NewsLine = () => {
    return (
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
    );
};

export default NewsLine;