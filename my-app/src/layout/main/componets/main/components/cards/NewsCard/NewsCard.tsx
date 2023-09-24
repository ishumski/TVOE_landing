import {FC, ReactNode} from "react";
import ChevronRightIcon from "@/shared/components/icons/svgComponents/ChevronRightIcon";
import styles from './NewsCard.module.scss'
import classNames from "classnames";


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
                <ChevronRightIcon/>
            </h2>
            {children}
        </section>
    );
};

export default NewsCard;