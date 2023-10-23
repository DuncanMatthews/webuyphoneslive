import Link from 'next/link';

const products = [
  {
    title: 'MacBook Air 13"',
    description: '2020 - QWERTY - English',
    price: '633.99',
    rating: 4,
    imageUrl: '/images/categories/apple-computer.png'
  },
  {
    title: 'PlayStation 5',
    description: '825 GB - White',
    price: '473.00',
    rating: 4,
    imageUrl: '/images/categories/apple-computer.png'
  },
  {
    title: 'PlayStation 5',
    description: '825 GB - White',
    price: '473.00',
    rating: 4,
    imageUrl: '/images/categories/smartphone.png'
  }
  // ... add other products here
];

interface ProductProps {
  title: string;
  description: string;
  price: string;
  rating: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductProps> = ({ title, description, price, rating, imageUrl }) => (
  <div className="w-6/11 gap-4 space-x-3 p-2   ">
    <Link className="no-underline " href={imageUrl}>
      <div className="overflow-hidden rounded-lg bg-white no-underline shadow-md hover:shadow-xl  ">
        <img className="h-48 w-full object-contain pt-4 no-underline" src={imageUrl} alt={title} />
        <div className="p-4 ">
          <h3 className="mb-1 text-xl font-bold no-underline">{title}</h3>
          <p className="mb-1 text-gray-600">{description}</p>
          <div className="mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-yellow-500">
                {i < rating ? '★' : '☆'}
              </span>
            ))}
          </div>
          <div className="text-lg font-semibold">Starting at ${price}</div>
        </div>
      </div>
    </Link>
  </div>
);

export default ProductCard;
