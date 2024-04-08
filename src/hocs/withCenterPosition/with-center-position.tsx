import {CenterPositionContainer} from './with-center-position-styled'

export const withCenterPosition = <P extends object>(Component: React.ComponentType<P>) => (props: P) => (
  <CenterPositionContainer>
    <Component {...props} />
  </CenterPositionContainer>
)
