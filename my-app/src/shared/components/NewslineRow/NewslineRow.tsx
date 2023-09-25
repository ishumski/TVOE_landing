import styles from './NewslineRow.module.scss'
import LightningIcon from "@/shared/components/icons/svgComponents/LightningIcon";
import {FC} from "react";

type TProps = {
    title: string,
    time: string,
    tagText: string
}

const NewslineRow: FC<TProps> = (
    {
        title,
        time,
        tagText
    }) => {
    return (
        <div className={styles.wrapper}>
            <LightningIcon/>
            <div className={styles.news}>
                <p className={styles.title}>{title}</p>
                <div className={styles.info}>
                    <span className={styles.time}>{time}</span>
                    <div className={styles.tag}>{tagText}</div>
                </div>
            </div>
        </div>
    );
};

export default NewslineRow;