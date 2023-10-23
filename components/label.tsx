import clsx from 'clsx';
import Price from './product/product-price';

const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div
      className={clsx('absolute bottom-0  left-0 flex w-full px-4 pb-4 @container/label', {
        'lg:px-20 lg:pb-[35%]': position === 'center'
      })}
    >
      <div className="backdrop-blur-md-neutral-800   flex flex-col rounded-full p-1 text-xs font-semibold text-black dark:bg-black/70 dark:text-white">
        <h4 className="mr-4 line-clamp-2 p-1  text-base leading-none tracking-tight">{title}</h4>
        <div className="mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-yellow-500">
              {i < 5 ? '★' : '☆'}
            </span>
          ))}
        </div>
        <Price
          className=" mt-0 text-lg font-semibold text-black"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;
