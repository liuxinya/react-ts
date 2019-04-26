
export interface NavStateObj {
    navList: NavListItemObj[];
} 
export interface NavListItemObj {
    id: number;
    name: string;
    [prop: string]: any;
}