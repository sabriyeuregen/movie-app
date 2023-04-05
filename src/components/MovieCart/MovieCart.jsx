import "./MovieCart.scss";
const MovieCart = (props) => {
  return (
    <div className="cart"> 
     <div className="cart__title">{props.title}</div> 
     <div className="cart__img">{props.image}</div> 
    </div>
  )
}

export default MovieCart;