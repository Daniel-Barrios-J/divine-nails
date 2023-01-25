//react, hooks, router
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

//libraries
import styled from 'styled-components';

//mui
import { Button } from '@mui/material';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

//styled-components
const NavHeader = styled.nav`
  width: 100vw;
  height: 60px;
  padding-right: 24px;
  display: flex;
  align-items:center;
  @media all and (max-width:600px) {
    justify-content: space-between;
  }
`
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 32px;
  width: 80%;
  @media all and (max-width: 600px){
    display: none;
  }
`
const LogoContaier = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  .logo {
    height: 60px;
  }
`
const MenuMobile = styled.div`
  width: 20%;
  height: 40px;
  display: grid;
  place-content: center;
  @media all and (min-width: 600px) {
    display: none;
  }
`

//custom styles mui
const customStylesMUIButtos = {
  padding: '8px 24px'
}
// array con los botones
const botonesNav = [
  {
    nombre: 'Servicios',
    path: '/servicios'
  },
  {
    nombre: 'Contacto',
    path: '/contacto'
  },
  {
    nombre: 'Promociones',
    path: '/promociones'
  },
  {
    nombre: 'Sucursal',
    path: 'sucursal'
  },
]

const Header = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItem = (path) => {
    setAnchorEl(null);
    navigate(path);
  };

  const navigate = useNavigate()
  return (
    <NavHeader>
      {/*el menu mobile se muestra muestra en viewport < 600px */}
      <MenuMobile  onClick={handleClick}>
        <MenuTwoToneIcon />
      </MenuMobile>
      <Menu
        id='menu-mobile'
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {
          botonesNav.map(boton => <MenuItem key={boton.nombre} onClick={()=>handleMenuItem(boton.path)} size='small' variant='outlined' sx={customStylesMUIButtos}>{boton.nombre}</MenuItem>)
        }
      </Menu>
      <LogoContaier className='header__logo-contaier' onClick={()=>navigate('/')}>
        <img className='logo' alt='logo-header' src='https://www.creativefabrica.com/wp-content/uploads/2021/12/05/Nail-studio-salon-logo-design-template-Graphics-21272605-1.png' />
      </LogoContaier>
      <ButtonsContainer className='header__buttons-contaier'>
        {
          botonesNav.map(boton => <Button key={boton.nombre} onClick={()=>handleMenuItem(boton.path)} size='small'>{boton.nombre}</Button>)
        }
      </ButtonsContainer>
    </NavHeader>
  );
}

export default Header;
