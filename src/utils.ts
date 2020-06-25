

export interface MenuItem {
    id: string,
    type: MenuEnum
}

export enum MenuEnum {
    Home,
    About,
    Skills,
    Portfolio,
    Blog,
    Contact
}

export const menus: MenuItem[] = [
    {id: 'home', type: MenuEnum.Home},
    {id: 'about', type: MenuEnum.About},
    {id: 'skills', type: MenuEnum.Skills},
    {id: 'portfolio', type: MenuEnum.Portfolio},
    {id: 'blog', type: MenuEnum.Blog},
    {id: 'contact', type: MenuEnum.Contact},
];

export const getMenuId = (menuEnum: MenuEnum): string =>
    menus.find(x => x.type === menuEnum)?.id || "";