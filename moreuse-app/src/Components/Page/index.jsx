import { Menu } from "../Menu"
import { Topbar } from "../Topbar"

export const Page = (props) => {

  return (
    <>
      <Topbar />
      <div>
        { props.children }
      </div>
      <Menu />
    </>
  )
}
