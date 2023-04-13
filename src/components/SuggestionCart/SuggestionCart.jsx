import "./SuggestionCart.scss";
const SuggestionCart = (props) => {
  return (
    <div>
      <div>{props.id}</div>
      <div>{props.title}</div>
    </div>
  );
};

export default SuggestionCart;
