import styled from 'styled-components'
import { YMaps, Map } from 'react-yandex-maps'

const MapStyled = styled.div`
  width: 100%;
  height: 840px;
`

const MapStyled2 = styled(Map)`
  width: 100%;
  height: 100%;
`

const MapCenter = styled(YMaps)`
  width: 100%;
  height: 100%;
`

const LeftContainer = styled.div`
  z-index: 100000;
  position: fixed;
  width: 10%;
  height: 100%;
`

const RightContainer = styled.div`
  width: 100%;
  height: 100%;
`

const AllContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const LableBox = styled.div`
  width: 260px;
  height: 411px;
  background: #373936;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  justify-content: center;
`

const TitleCont = styled.span`
  display: block;
  font-weight: 400;
  font-size: 26px;
  line-height: 21px;

  color: #FFFFFF;
`

export const Styled = {
  MapStyled,
  MapCenter,
  MapStyled2,
  LeftContainer,
  RightContainer,
  AllContainer,
  LableBox,
  TitleCont,
}

