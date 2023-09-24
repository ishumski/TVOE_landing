import React, {FC} from 'react';
import LikeIcon from "@/shared/components/icons/svgComponents/LikeIcon";
import AngryIcon from "@/shared/components/icons/svgComponents/AngryIcon";
import NaughtyIcon from "@/shared/components/icons/svgComponents/NaughtyIcon";
import CommentIcon from "@/shared/components/icons/svgComponents/CommentIcon";
import BookmarkIcon from "@/shared/components/icons/svgComponents/BookmarkIcon";
import styles from './ReadMoreCard.module.scss'

type TProps = {
    tagText: string,
    date: string,
    title: string
}

const ReadMoreCard: FC<TProps> = ({tagText, date, title}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <span className={styles.tag}>{tagText}</span>
                <span className={styles.date}>{date}</span>
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.footer}>
                <div className={styles.statistics}><LikeIcon/>23</div>
                <div className={styles.statistics}><AngryIcon/>23</div>
                <div className={styles.statistics}><NaughtyIcon/>23</div>
                <div className={styles.statistics}><CommentIcon/>7</div>
                <div className={styles.statistics}><BookmarkIcon/>14</div>
            </div>
        </div>
    );
};

export default ReadMoreCard;