import {FC, ReactNode} from "react";
import ChevronRightIcon from "@/shared/components/icons/svgComponents/ChevronRightIcon";
import classNames from "classnames";
import styles from './NewsCard.module.scss'


type TProps = {
    title: string,
    children: ReactNode,
    cardStyles?: string
}
const NewsCard:FC<TProps> = ({title, children, cardStyles}) => {
    return (
        <section className={classNames(styles.wrapper, cardStyles)}>
            <h2 className={styles.title} >
                {title}
                <ChevronRightIcon className={styles.iconWrapper}/>
            </h2>
            {children}
        </section>
    );
};

export default NewsCard;