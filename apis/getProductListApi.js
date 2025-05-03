import apiInstance from '../api';
import data from '../data.json';


// export const getProductListApi = async params => {
//   const Api = await apiInstance();
//   try {
//     const response = await Api.get('products').then(response => {
//       return response;
//     });
    
//     return response;
//   } catch (error) {
//     console.log('getCategoryListApi error => ', error);
//   }
// };


export const getProductListApi = async (page) => {

  try {
    const pageSize = 10;
    const endIndex = page * pageSize;
    const pagedProducts = data.products.slice((page-1)*10, endIndex);
return new Promise((resolve) => {
  setTimeout(() => {
    resolve({ data: { products: pagedProducts } });
  }, 300);
});
  } catch (error) {
    console.error('getProductListApi error:', error);
    throw error;
  }
}

