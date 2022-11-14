import PropTypes from "prop-types";
// import styles from "./Button.module.css";
import styled, {css} from "styled-components";

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;

  color: ${(props) => props.color || 'gray'};
  background: ${(props) => props.background || 'white'};
  
  ${(props)=>props.primary && css`
    color: white;
    background: navy;
    border-color: red;
  `}
`;
function Button({text, ...props}){
  return(
    <StyledButton {...props}>{text}</StyledButton>
  )
}
Button.propTypes = {
  text: PropTypes.string,
}
export default Button;