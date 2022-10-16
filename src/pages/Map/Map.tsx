import React, { FC } from 'react'
import {Button, Typography} from '@dragonlorde/sapfiron-ui-kit'
import { Styled } from './styles/Map.styled'

const {
  MapStyled,
  MapCenter,
  MapStyled2,
  LeftContainer,
  RightContainer,
  AllContainer,
  LableBox,
  TitleCont,
} = Styled

const MapContainer:FC = () => (
  <AllContainer>
    <LeftContainer>
      <LableBox>
        <TitleCont>
          Ул. Пушкинска. 15ю
        </TitleCont>
        <TitleCont>
          45.75 ||  87 / 56
        </TitleCont>
        <Button onClick={() => {}}> Создать заявку </Button>
      </LableBox>
    </LeftContainer>
    <RightContainer>
      <MapCenter>
        <MapStyled>
          <MapStyled2 defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
        </MapStyled>
      </MapCenter>
    </RightContainer>
  </AllContainer>
)

export default MapContainer
