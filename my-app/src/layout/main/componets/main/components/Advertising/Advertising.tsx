import styles from './Advertising.module.scss'
const Advertising = () => {
    return (
        <div className={styles.wrapper}>
            <a className={styles.header}>
                Ссылка на сайт <span className={styles.link}>реклама</span>
            </a>
            <div className={styles.main}>Реклама</div>
            <div className={styles.footer}>
                Текст длинного рекламного объявления
            </div>
        </div>
    );
};

export default Advertising;