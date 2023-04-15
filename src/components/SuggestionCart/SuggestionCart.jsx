import "./SuggestionCart.scss";
const SuggestionCart = (props) => {
  return (
    <div>
      <div>{props.link}</div>
      <div>{props.title}</div>
    </div>
  );
};

export default SuggestionCart;
