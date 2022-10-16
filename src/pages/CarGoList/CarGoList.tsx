import React, { FC, useState } from 'react'
import { CollapsableItem, Input, Block } from '@dragonlorde/sapfiron-ui-kit'
import { Styled } from './styles/CarGoList.styled'
import { config } from './config'

const {
  CarGoListContainer,
  CarGoListNav,
  CarGoButtonList,
  CarGoLInk,
  CarGoButton,
  BlockRowContainer,
} = Styled

const CarGoList:FC = () => {
  const [list, setList] = useState([])
  const current = config.items.map((item: any) => (
    <Block
      color={item.color}
      text={item.text}
      labelText={item.labelText}
      span={item.span}
      link={item.link}
    />
  ))
  const end = config.items2.map((item: any) => (
    <Block
      color={item.color}
      text={item.text}
      labelText={item.labelText}
      span={item.span}
      link={item.link}
    />
  ))
  const delay = config.items3.map((item: any) => (
    <Block
      color={item.color}
      text={item.text}
      labelText={item.labelText}
      span={item.span}
      link={item.link}
    />
  ))
  return (
    <CarGoListContainer>
      <CarGoListNav>
        <CarGoButtonList>
          <Input placeholder="Поиск" />
          <CarGoButton onClick={() => {}}> Фильтр </CarGoButton>
        </CarGoButtonList>
        <CarGoLInk to="/cargo">
          Создать заявку
        </CarGoLInk>
      </CarGoListNav>
      <CollapsableItem titleContent="Текущие">
        <BlockRowContainer>
          {current}
        </BlockRowContainer>
      </CollapsableItem>
      <CollapsableItem titleContent="Завершенные" defaultOpened={false}>
        <BlockRowContainer>
          {end}
        </BlockRowContainer>
      </CollapsableItem>
      <CollapsableItem titleContent="В жидании" defaultOpened={false}>
        <BlockRowContainer>
          {delay}
        </BlockRowContainer>
      </CollapsableItem>
    </CarGoListContainer>
  )
}

export default CarGoList
