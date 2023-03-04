export const getProductByCode = async (code) => {
    try {
      const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
  