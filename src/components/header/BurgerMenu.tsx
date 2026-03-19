type BurgerMenuProps = {
  isOpen: boolean;
  setisOpen: (value: boolean) => void;
}

function BurgerMenu(props:BurgerMenuProps) {
  if(props.isOpen === false){
    return null
  }
  return (
    <div>
          <ul className={` z-100 fixed inset-0 bg-black/50 flex items-center justify-center gap-2.5 flex-col overflow-hidden`} onClick={()=>{props.setisOpen(false)}}>
            <li><a href="" className="text-white">Услуги</a></li>
            <li><a href="" className="text-white" >О нас</a></li>
            <li><a href="" className="text-white" >Отзывы</a></li>
            <li><a href="" className="text-white" >Blog</a></li>
            <li><a href="" className="text-white" >Контакты</a></li>
          </ul>
        </div>
  )
}


export default BurgerMenu