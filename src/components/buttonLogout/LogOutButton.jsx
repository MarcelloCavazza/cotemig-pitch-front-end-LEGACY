import Button from "./ButtonLogOut.style"

const LogoutButton = ({ children, primary, onClick, style }) => {
  console.log(style)
  return (
    <Button onClick={onClick} style={{display: style.display}} primary={primary}>{children}</Button>
  )
}

export default LogoutButton;