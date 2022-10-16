import styled from 'styled-components'
import styleMixins from '../../../styles/styleMixins'

const { getSpacing } = styleMixins.offset

const CarGoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 16px;
`

const InputContainer = styled.div`
  margin-top: ${getSpacing(3)};
  display: flex;
  flex-wrap: wrap;
  max-width: max-content;
  width: 100%;
  gap: ${getSpacing(3)};
  padding: ${getSpacing(1)};
`

export const Styled = {
  CarGoContainer,
  InputContainer,
}
