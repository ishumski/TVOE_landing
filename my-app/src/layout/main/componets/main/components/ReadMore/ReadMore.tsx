import NewsCard from "@/layout/main/componets/main/components/cards/NewsCard/NewsCard";
import {readMoreData} from "@/layout/main/componets/main/utils/readMoreData";
import ReadMoreCard from "@/layout/main/componets/main/components/cards/ReadMoreCard/ReadMoreCard";
import styles from './ReadMore.module.scss'
const ReadMore = () => {
    return (
        <NewsCard title='Читать также' cardStyles={styles.wrapper}>
            <div className={styles.container}>
            {
                readMoreData.map(({tag, date, title})=>
                <ReadMoreCard key={title} title={title} date={date} tagText={tag} />   )
            }
            </div>
        </NewsCard>
    );
};

export default ReadMore;