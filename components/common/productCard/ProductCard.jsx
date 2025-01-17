"use client";
const ProductCard = ({ id, title, price, stock, imageUrl, category }) => {
  return (
    <article className="card card-side md:card card-compact bg-base-100 w-80 md:w-80 shadow-xl">
      <figure>
        <img src={imageUrl} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl xl:text-2xl">{title}</h2>
        <p className="font-bold xl:text-xl">${price} CLP</p>
        <p className="font-semibold">Stock: {stock}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{category}</div>
          <button id={id} className="btn btn-primary">
            Ver más
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
