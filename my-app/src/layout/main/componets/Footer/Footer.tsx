import styles from './Footer.module.scss'
import Link from "next/link";
import TelegramIcon from "@/shared/components/icons/svgComponents/TelegramIcon";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoWrapper}>
                    <h2 className={styles.logo}>ЛОГО</h2>
                    <p className={styles.copy}>© НАЗВАНИЕ 2023. Все права защищены</p>
                </div>
                <div className={styles.linksWrapper}>
                    <div className={styles.links}>
                        <Link href='#' className={styles.link}>Контакты</Link>
                        <Link href='#' className={styles.link}>Политика конфиденциальности</Link>
                        <Link href='#' className={styles.link}>Редакция</Link>
                        <Link href='#' className={styles.link}>Условия использования</Link>
                        <div/>
                        <Link href='#' className={styles.link}>Реклама</Link>
                    </div>
                    <div className={styles.contacts} >
                        По любым вопросам пишитe на {' '}
                        <Link href='mailto:privet@yandex.com' className={styles.mailTo} >
                            privet@yandex.com
                        </Link>
                        <div className={styles.telegram}>
                            <TelegramIcon/>
                            Подписаться
                        </div>
                    </div>

                </div>
                <button type='button' className={styles.addNewsButton}>Предложить новость</button>
            </div>
        </footer>
    );
};

export default Footer;