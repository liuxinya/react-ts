import { NavListItemObj } from "src/modules/components/nav/interface";

export interface NavListPropsObj {
    navList: NavListItemObj[];
    wbTypeChange: (e: NavListItemObj) => void;
    navInitedHandler?: (e: NavListItemObj) => void;
}
export interface NavListStateObj {
    activeItem: NavListItemObj;
    isShowPannel: boolean;
}