// Import this at the top of your file
import { revalidatePath } from 'next/cache';
import PhoneModel from './utils/model/iphone';

export async function createIPhone(formData: FormData) {
  // You should replace this with the actual validation and parsing logic for iPhone data
  const iphoneData = {
    phoneModel: formData.get('phoneModel'),
    storage: formData.get('storage'),
    condition: formData.get('condition'),
    price: formData.get('price')
  };

  try {
    // Create a new iPhone document and save it to the database
    const newIPhone = new PhoneModel(iphoneData);
    await newIPhone.save();

    // Revalidate the path if necessary
    revalidatePath('/sell-to-us'); // replace with the actual path you want to revalidate

    return { message: `Added iPhone ${newIPhone._id}` };
  } catch (e) {
    console.error('Failed to create iPhone:', e);
    return { message: 'Failed to create iPhone' };
  }
}
