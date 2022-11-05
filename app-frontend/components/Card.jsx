const Card = (props) => (
  <div className="p-6 mt-6 text-left border w-196 rounded-xl  focus:text-indigo-600">
    {props.children}
  </div>
);

export default Card;
