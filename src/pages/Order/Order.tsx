import React, { FC } from 'react'
import { CollapsableItem, Input, Typography } from '@dragonlorde/sapfiron-ui-kit'
import { Styled } from './styles/CarGo.styled'

const {
  InputContainer,
  CarGoContainer,
} = Styled

const Order:FC = () => (
  <CarGoContainer>
    <Typography type="bold">
      Даныне заявки
      <br />
      <br />
    </Typography>
    <CollapsableItem titleContent="Данные ТС">
      <InputContainer>
        <Input value="Тип ТС" disabled />
        <Input value="Харкатеритиска ТС" disabled />
        <Input value="Наименование ТС" disabled />
        <Input value="Номер ТС" disabled />
      </InputContainer>
    </CollapsableItem>
    <CollapsableItem titleContent="Дата">
      <InputContainer>
        <Input value="25-05-2021" disabled />
        <Input value="12-30" disabled />
      </InputContainer>
    </CollapsableItem>
    <CollapsableItem titleContent="Доп данные">
      <InputContainer>
        <Input value="Экскаватор 12" disabled />
        <Input value="Опасная дорога" disabled />
      </InputContainer>
    </CollapsableItem>
  </CarGoContainer>
)

export default Order
