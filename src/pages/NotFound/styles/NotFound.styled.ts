import styled from 'styled-components'

const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

const StyledTitle = styled.h1`
  font-size: 126px;
  color: ${(props) => props.theme.colors.blue_600};
`

export const Styled = {
  NotFoundWrapper,
  NotFoundContainer,
  StyledTitle,
}
