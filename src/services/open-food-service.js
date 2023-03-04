export const getProductByCode = async (code) => {
    try {
      const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`);
    
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  