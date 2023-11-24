import Image from 'next/image';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div>
      <Image
        src="/images/logos/WeBuyPhones-Logo.webp"
        height={150}
        width={150}
        alt="WeBuyPhones Logo"
      />
    </div>
  );
}
