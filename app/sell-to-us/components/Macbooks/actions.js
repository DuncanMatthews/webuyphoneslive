'use server';

export async function MacbookData() {
  const res = await fetch('/images/data/2023-10-24T19:02:19.811Z.json');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
