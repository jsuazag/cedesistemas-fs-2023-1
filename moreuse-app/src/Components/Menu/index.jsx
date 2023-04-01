import {Link} from 'react-router-dom';

const OptionsMenu = [
  {
    name: "Inicio",
    path: "/"
  },
  {
    name: "Perfil",
    path: "/profile"
  },
  {
    name: "Mis prendas",
    path: "/my-clothes"
  }
]

export const Menu = () => {

  return (
    <section>
      <ul>
        {
          OptionsMenu.map((item, index) => (
              <Link key={index} to={item.path}><li>{item.name}</li></Link>
            )
          )
        }
      </ul>
    </section>
  )
}
