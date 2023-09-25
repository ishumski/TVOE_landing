import FireIcon from "@/shared/components/icons/svgComponents/FireIcon";
import styles from './RunningLine.module.scss'

const RunningLine = () => {
    return (
        <div className={styles.wrapper} >
            <div className={styles.firstPart}>
                <FireIcon/>
                <p className={styles.text}>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
                <FireIcon/>
                <p className={styles.text}>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
            </div>
            <div className={styles.secondPart}>
                <FireIcon/>
                <p className={styles.text}>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
                <FireIcon/>
                <p className={styles.text}>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
            </div>
        </div>
    );
};

export default RunningLine;