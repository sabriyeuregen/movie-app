import "./MovieCart.scss";
const MovieCart = (props) => {
  return (
    <div className="cart"> 
     <div className="cart__img">{props.link}</div> 
     <div className="cart__title">{props.title}</div> 
    </div>
  )
}

export default MovieCart;