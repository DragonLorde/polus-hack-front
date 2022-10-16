import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '@dragonlorde/sapfiron-ui-kit'

const CarGoListContainer = styled.div`
  margin: 10px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`

const CarGoListNav = styled.div`
  display: flex;
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
`

const CarGoButtonList = styled.div`
  display: flex;
  gap: 18px;
`

const CarGoButton = styled(Button)`
  background: #373936 !important;
  width: 102px;
  height: 50px !important;
`

const CarGoLInk = styled(Link)`
  width: 140px;
  height: 48px;
  background: #FF6C00;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BlockRowContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  gap: 16px;
  padding: 10px;
`

export const Styled = {
  CarGoListContainer,
  CarGoListNav,
  CarGoButtonList,
  CarGoLInk,
  CarGoButton,
  BlockRowContainer,
}
