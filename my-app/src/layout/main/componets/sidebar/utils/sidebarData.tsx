import NewslineIcon from "@/shared/components/icons/svgComponents/NewslineIcon";
import ExclamationPointIcon from "@/shared/components/icons/svgComponents/ExclamationPointIcon";
import AutoIcon from "@/shared/components/icons/svgComponents/AutoIcon";
import BagIcon from "@/shared/components/icons/svgComponents/BagIcon";
import DiagrammIcon from "@/shared/components/icons/svgComponents/DiagrammIcon";
import NotebookIcon from "@/shared/components/icons/svgComponents/NotebookIcon";
import DressIcon from "@/shared/components/icons/svgComponents/DressIcon";
import BallIcon from "@/shared/components/icons/svgComponents/BallIcon";
import StarIcon from "@/shared/components/icons/svgComponents/StarIcon";
import TentIcon from "@/shared/components/icons/svgComponents/TentIcon";
import ScheduleIcon from "@/shared/components/icons/svgComponents/ScheduleIcon";
import BookIcon from "@/shared/components/icons/svgComponents/BookIcon";
import HouseIcon from "@/shared/components/icons/svgComponents/HouseIcon";
import CircleFilledIcon from "@/shared/components/icons/svgComponents/CircleFilledIcon";
import MedicalBagIcon from "@/shared/components/icons/svgComponents/MedicalBagIcon";
import {ReactNode} from "react";

type TProps = {
    icon: ReactNode,
    title: string
}

export const sidebarData: TProps[] = [
    {
        icon: <NewslineIcon/>,
        title:'Лента'
    },
    {
        icon: <ExclamationPointIcon/>,
        title:'Происшествия'
    },
    {
        icon: <AutoIcon/>,
        title:'Авто'
    },
    {
        icon: <BagIcon/>,
        title:'Бизнес'
    },
    {
        icon: <MedicalBagIcon/>,
        title:'Здоровье'
    },
    {
        icon: <CircleFilledIcon/>,
        title:'Крипто'
    },
    {
        icon: <HouseIcon/>,
        title:'Недвижимость'
    },
    {
        icon: <BookIcon/>,
        title:'Образование'
    },
    {
        icon: <ScheduleIcon/>,
        title:'Политика'
    },
    {
        icon: <TentIcon/>,
        title:'Туризм'
    },
    {
        icon: <StarIcon/>,
        title:'Шоу-бизнес'
    },
    {
        icon: <BallIcon/>,
        title:'Спорт'
    },
    {
        icon: <DressIcon/>,
        title:'Стиль'
    },
    {
        icon: <NotebookIcon/>,
        title:'Наука и технологии'
    },
    {
        icon: <DiagrammIcon/>,
        title:'Экономика'
    },

]