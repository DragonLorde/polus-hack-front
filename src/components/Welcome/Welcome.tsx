import React, { FC } from 'react'
import { Logo, Typography } from '@dragonlorde/sapfiron-ui-kit'
import { Styled } from './styles/Welcome.styled'
import { WelcomeModel } from './model/Welcome.model'

const {
  WelcomeStyledContainer,
  WelcomeStyledWrapper,
} = Styled

const Welcome:FC<WelcomeModel> = ({
  text= 'Добро пожаловать в электронную среду управления ПОЛЮС',
}) => (
  <WelcomeStyledWrapper>
    <WelcomeStyledContainer>
      <Logo
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
