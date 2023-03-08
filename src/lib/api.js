const FIREBASE_DOMAIN =
  "https://react-http-ec598-default-rtdb.europe-west1.firebasedatabase.app/";

  

export async function getAllProducts() {
  const response = await fetch(`${FIREBASE_DOMAIN}/products.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products.");
  }

  const transformedData = [];

  for (const key in data) {
    const productObj = {
      prodId: key,
      ...data[key],
    };

    transformedData.push(productObj);
  }

  return transformedData;
}

export async function getSingleProduct(productId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/products/${productId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch product.");
  }

  return data;
}
