export default function Reports({
  image,
  title,
  name,
  description,
  coordinates,

  ...rest
}) {
  return (
    <div className="report">
      <div >
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>
        Reported by: {name}
      </p>
      <p>
       {description}
      </p>
    </div>
  );
}
