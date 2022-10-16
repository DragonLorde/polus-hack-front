import React, { FC } from 'react'
import { EosImg } from '@frontend-packages/russw-icon-kit'
import { Styled } from './styles/Welcome.styled'
import { WelcomeModel } from './model/Welcome.model'
import { Typography } from '../Typography'

const {
  WelcomeStyledContainer,
  WelcomeStyledWrapper,
} = Styled

const Welcome:FC<WelcomeModel> = ({
  text= 'Добро пожаловать в электронную образовательноую среду издательства «Русское слово»',
}) => (
  <WelcomeStyledWrapper>
    <WelcomeStyledContainer>
      <EosImg
        width={130}
        height={130}
      />
      <Typography type="default" color="#031A7A">
        {text}
      </Typography>
    </WelcomeStyledContainer>
  </WelcomeStyledWrapper>
)

export default Welcome
