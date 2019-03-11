export interface NavStateObj {
    navList: NavListItemObj[];
} 
export interface NavListItemObj {
    id: string;
    name: string;
    [prop: string]: any;
}