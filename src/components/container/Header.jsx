//hooks, router
import { useState } from "react"
import { useNavigate } from "react-router-dom"

//libs
import styled from "styled-components"

//utils
import { menuItems } from "../../utils/menuItems"

//styled-componets
const HeaderContainer = styled.nav`
  width: 100%;
  height: 100%;
  background-color: #292828;
  display: flex;
  justify-content: space-between;
  .logo-container {
    width: 40%;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 12px 40px;
    img {
      cursor: pointer;
      height: 100%;
      border-radius: 50%;
    }
  }
  .menu-items-container {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 12px;
  }
  .menu-mobile-logo-container {
    display: none;
  }
  @media all and (max-width: 640px) {
    flex-direction: row-reverse;
    .logo-container {
      padding-right: 32px;
      justify-content: flex-end;
    }
    .menu-mobile-logo-container {
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 20px;
      img {
        height: 70%;
      }
    }
    .menu-items-container {
      background-color: #292828;
      padding: 16px;
      width: 40vw;
      height: 92vh;
      position: absolute;
      left: 0;
      transform: translateX(-100%);
      top: 10vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 32px;
      transition: all 0.3s;
    }
    .show-menu-mobile {
      transform: translateX(0);
    }
  }
`
const MenuItem = styled.button`
  height: 60%;
  width: 100px;
  color: #f0e6e6;
  background-color: transparent;
  border-radius: 6px;
  outline: none;
  border: none;
  border-bottom: solid 1px #86a8a8;
  cursor: pointer;
  @media all and (max-width: 640px) {
    height: 40px;
  }
`

//component
export default function Header() {

  const [menuMobile, setMenuMobile] = useState(false);
  
  const navigate = useNavigate()

  function handleMenuItem(path) {
    navigate(path);
    setMenuMobile(false);
  }

  return (
    <HeaderContainer>
      <div className="logo-container" onClick={()=>navigate('/')}>
        <img src="https://www.designevo.com/res/templates/thumb_small/nail-enamel-logo.webp" alt="logo" />
      </div>
      <div className={`menu-items-container ${menuMobile ? 'show-menu-mobile': ''}`}>
        {
          menuItems.map(item => <MenuItem key={item.name} onClick={()=>handleMenuItem(item.path)}>
            {item.name}
          </MenuItem>)
        }
      </div>
      <div className="menu-mobile-logo-container" onClick={()=>setMenuMobile(!menuMobile)}>
        <img alt="menu-icon" src="https://img.icons8.com/stickers/100/null/xbox-menu.png"/>
      </div>
    </HeaderContainer>
  )
}
