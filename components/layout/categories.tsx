import React from 'react';

const TopSellers: React.FC = () => {
  const products = [
    {
      name: 'MacBooks',
      imageUrl: '<your-image-url-for-MacBooks>',
      description: 'How do like the apples?'
    },
    {
      name: 'iPhone',
      imageUrl: '<your-image-url-for-iPhone>',
      description: 'Bring home a smarter phone.'
    },
    {
      name: 'Samsung Galaxy',
      imageUrl: '<your-image-url-for-Samsung>',
      description: 'Intergalactic phones, at down to earth prices.'
    },
    {
      name: 'iPad',
      imageUrl: '<your-image-url-for-iPad>',
      description: "Those shows won't binge themselves, you know!"
    },
    {
      name: 'Apple Watch',
      imageUrl: '<your-image-url-for-Watch>',
      description: 'Time to upgrade that old Casio.'
    }
  ];

  return (
    <div className="align-center mb-10 justify-center">
      <div className="mb-3 flex  flex-row justify-center">
        <div className="mr-3 rounded border bg-white px-48 py-28 drop-shadow-sm	">Child 1</div>
        <div className="rounded border bg-white px-48 py-28 drop-shadow-sm	">Child 1</div>
      </div>
      <div className="flex flex-row  justify-center">
        <div className="mr-3 rounded border bg-white px-32 py-28 drop-shadow-sm	">Child 1</div>
        <div className="mr-3 rounded border bg-white px-32 py-28 drop-shadow-sm	">Child 1</div>
        <div className="rounded border bg-white px-32 py-28 drop-shadow-sm	">Child 1</div>
      </div>
    </div>
  );
};

export default TopSellers;
