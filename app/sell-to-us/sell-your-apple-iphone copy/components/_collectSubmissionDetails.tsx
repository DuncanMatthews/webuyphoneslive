import React, { useState } from 'react';

interface SellerInfo {
  name: string;
  email: string;
  phone: string;
}

const SellPhoneForm: React.FC = () => {
  const [seller, setSeller] = useState<SellerInfo>({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSeller((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here, you would typically send the data to your backend or API.
    console.log('Seller Info Submitted:', seller);
    alert('Thank you for selling your phone! We will be in touch soon.');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={seller.name}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={seller.email}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={seller.phone}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SellPhoneForm;
