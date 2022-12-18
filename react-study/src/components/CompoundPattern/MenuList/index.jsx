import React, {createContext} from 'react';

const MenuListContext = createContext();

const MenuList = (props) => {
    return (
        <MenuListContext.Provider value={null}>
            <div>
                {props.children}
            </div>
        </MenuListContext.Provider>
    )
};

const MainMenu = () => {
    return (
        <div>메인 메뉴</div>
    )
};

const SubMenu = () => {
    return (
        <div>서브 메뉴</div>
    )
}

MenuList.MainMenu = MainMenu;
MenuList.SubMenu = SubMenu;

export default MenuList;