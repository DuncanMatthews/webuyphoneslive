const Price = ({
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
    <p className="mb-0 text-sm font-light text-gray-500"> Starting at </p>
    <span suppressHydrationWarning={true} className={className}>
      {`${new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currencyCode,
        currencyDisplay: 'narrowSymbol'
      }).format(parseFloat(amount))}`}
    </span>
  </div>
);

export default Price;
