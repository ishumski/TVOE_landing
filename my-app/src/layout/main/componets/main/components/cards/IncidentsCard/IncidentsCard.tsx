import {FC} from "react";
import LikeIcon from "@/shared/components/icons/svgComponents/LikeIcon";
import AngryIcon from "@/shared/components/icons/svgComponents/AngryIcon";
import NaughtyIcon from "@/shared/components/icons/svgComponents/NaughtyIcon";
import CommentIcon from "@/shared/components/icons/svgComponents/CommentIcon";
import BookmarkIcon from "@/shared/components/icons/svgComponents/BookmarkIcon";
import styles from './IncidentsCard.module.scss'

type TProps = {
    date: string,
    title: string
}

const IncidentsCard: FC<TProps> = ({date, title}) => {
    return (
        <div className={styles.wrapper}>
            <div>IMAGE</div>
            <div className={styles.info}>
                <p className={styles.date}>{date}</p>
                <p className={styles.title}>{title}</p>
                <div className={styles.footer}>
                    <div className={styles.statistics}><LikeIcon/>23</div>
                    <div className={styles.statistics}><AngryIcon/>23</div>
                    <div className={styles.statistics}><NaughtyIcon/>23</div>
                    <div className={styles.statistics}><CommentIcon/>7</div>
                    <div className={styles.statistics}><BookmarkIcon/>14</div>
                </div>
            </div>
        </div>
    );
};

export default IncidentsCard;