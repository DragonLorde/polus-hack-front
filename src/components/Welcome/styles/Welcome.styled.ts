import styled from 'styled-components'
import styleMixins from '../../../styles/styleMixins'

const { getSpacing } = styleMixins.offset

const WelcomeStyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F2F5FA;
`

const WelcomeStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${getSpacing(3)};
  width: 600px;
  text-align: center;
`

export const Styled = {
  WelcomeStyledContainer,
  WelcomeStyledWrapper,
}
