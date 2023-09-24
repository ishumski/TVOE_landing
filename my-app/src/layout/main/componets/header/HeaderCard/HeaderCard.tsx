import React, {FC, ReactNode} from 'react';
import styles from './HeaderCard.module.scss'

type TProps = {
    icon: ReactNode,
    title: string
}

const HeaderCard:FC<TProps> = ({icon, title}) => {
    return (
        <div className={styles.wrapper}>
            {icon}
            <p className={styles.title}>{title}</p>
        </div>
    );
};

export default HeaderCard;