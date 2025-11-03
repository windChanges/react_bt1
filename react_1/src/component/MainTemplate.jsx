import React from 'react'
import { HeaderComponent } from './header/HeaderComponent'
import { NavigationHeaderComponent } from './header/NavigationHeaderComponent'
import { TitleProduct } from './product/TitleProduct'
import { Product } from './product/Product'
import { Footer } from './footer/Footer'
const MainTemplate = () => {
  return (
    <>
    <HeaderComponent></HeaderComponent>
    <NavigationHeaderComponent></NavigationHeaderComponent>
    <TitleProduct></TitleProduct>
    <Product></Product>
    <Footer></Footer>
    </>
  )
}

export default MainTemplate