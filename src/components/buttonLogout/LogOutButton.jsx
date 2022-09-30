import Button from "./ButtonLogOut.style"

const LogoutButton = ({ children, primary, onClick, style }) => {
  console.log(style)
  return (
    <Button onClick={onClick} style={{display: style.isLogged ? style.display : 'none'}} primary={primary}>{children}</Button>
  )
}

export default LogoutButton;