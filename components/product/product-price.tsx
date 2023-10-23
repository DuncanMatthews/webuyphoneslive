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
    <span suppressHydrationWarning={true} className={className}>
      {`${new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currencyCode,
        currencyDisplay: 'narrowSymbol'
      }).format(parseFloat(amount))}`}
    </span>
    <p className="mb-0 mt-1 text-sm font-light text-gray-500"> Before Trade-in </p>
  </div>
);

export default ProductPrice;
