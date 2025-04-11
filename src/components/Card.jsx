function Card(props) {
  return (
    <div
      style={{ backgroundColor: props.bgcolor }}
      className="p-10 rounded-md flex-grow transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <h1 className="text-2xl font-medium">{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
}

export default Card;
