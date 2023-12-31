const ProductPrice = ({
  amount,
  className,
  currencyCode = 'USD',
  currencyCodeClassName
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<'p'>) => (
  <div className="flex flex-col">
    <span
      suppressHydrationWarning={true}
      className={`${className} text-lg font-medium text-gray-900 `}
    >
      {`${new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currencyCode,
        currencyDisplay: 'narrowSymbol'
      }).format(parseFloat(amount))}`}
    </span>
    <p className="gray-400 mb-0 mt-1 text-sm font-light text-gray-500"> Before Trade-in </p>
  </div>
);

export default ProductPrice;
