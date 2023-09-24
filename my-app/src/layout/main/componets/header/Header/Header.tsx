import React from 'react';
import HeaderCard from "@/layout/main/componets/header/HeaderCard/HeaderCard";
import CalendarIcon from "@/shared/components/icons/svgComponents/CalendarIcon";
import DollarIcon from "@/shared/components/icons/svgComponents/DollarIcon";
import EuroIcon from "@/shared/components/icons/svgComponents/EuroIcon";
import BitcoinIcon from "@/shared/components/icons/svgComponents/BitcoinIcon";
import SearchIcon from "@/shared/components/icons/svgComponents/SearchIcon";
import UserIcon from "@/shared/components/icons/svgComponents/UserIcon";
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>ЛОГО</div>
                <div className={styles.info}>
                    <div className={styles.finance}>
                        <HeaderCard icon={<CalendarIcon/>} title='ПН, 4.08.2023'/>
                        <HeaderCard icon={<DollarIcon/>} title='96.34'/>
                        <HeaderCard icon={<EuroIcon/>} title='104.61'/>
                        <HeaderCard icon={<BitcoinIcon/>} title='25.725'/>
                    </div>
                    <div className={styles.user} >
                        <SearchIcon/>
                        <UserIcon/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;