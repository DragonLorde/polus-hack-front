import React, { FC, useEffect, useState } from 'react'
import { Typography } from '@frontend-packages/russw-ui-kit'
import { Link, useNavigate } from 'react-router-dom'
import { Styled } from './styles/NotFound.styled'

const {
  NotFoundWrapper,
  NotFoundContainer,
  StyledTitle,
} = Styled

const NotFound:FC = () => {
  const [seconds, setSeconds] = useState<number>(3)
  const nav = useNavigate()
  useEffect(() => {
    const timerID = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevState) => prevState - 1)
      } else {
        nav('/')
      }
    }, 1000)
    return () => {
      clearInterval(timerID)
    }
  }, [nav, seconds])
  return (
    <NotFoundWrapper>
      <NotFoundContainer>
        <StyledTitle>
          404
        </StyledTitle>
        <Typography type="bold">
          Ой, кажется вы попали не туда
        </Typography>
        <Typography type="default">
          Вы будете перенапрвлены на
          <Link to="/"> главную </Link>
          через
          {' '}
          { seconds }
        </Typography>
      </NotFoundContainer>
    </NotFoundWrapper>
  )
}

export default NotFound
