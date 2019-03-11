import { NavListItemObj } from "src/modules/components/nav/interface";

export interface NavListPropsObj {
    navList: NavListItemObj[];
}
export interface NavListStateObj {
    activeItem: NavListItemObj;
    isShowPannel: boolean;
}