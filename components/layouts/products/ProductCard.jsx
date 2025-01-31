import Link from "next/link";
const ProductCard = ({ item, title, price, stock, imageUrl, category }) => {
  return (
    <article className="card card-side md:card card-compact bg-base-100 w-80 md:w-80 shadow-xl">
      <figure>
        <img src={item.imageUrl} alt={item.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl xl:text-2xl">{item.title}</h2>
        <p className="font-bold xl:text-xl">${item.price} CLP</p>
        <p className="font-semibold">Stock: {item.stock}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{item.category}</div>
          <Link
            href={`/products/detail/${item.slug}`}
            className="flex flex-col btn btn-primary"
          >
            Ver más
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
