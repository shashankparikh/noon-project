import {combineReducers} from 'redux';

//import login from './source/reducers/loginReducer';
import getProductList from './reducer/getProductListReducer';
import cart from './reducer/cartReducer';


export default combineReducers({
  getProductList,
  cart
});
