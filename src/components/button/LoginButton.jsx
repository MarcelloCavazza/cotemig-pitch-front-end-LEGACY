import Button from "./Button.style"

const LoginButton = ({children, primary}) => {
  return (
    <Button type="submit" primary={primary}>{children}</Button>
  )
}

export default LoginButton;