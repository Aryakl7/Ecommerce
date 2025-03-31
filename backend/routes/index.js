const express = require('express');
const router = express.Router();

const userSignUpController = require('../controller/User/userSignUp');
const userSignInController = require('../controller/User/userSignIn');
const authToken = require('../middleware/authToken');
const userDetailsController = require('../controller/User/userDetails');
const userLogout = require('../controller/User/userLogout');
const allUsers = require('../controller/User/allUsers');
const updateUser = require('../controller/User/updateUser');
const UploadProductController = require('../controller/Product/uploadProduct');
const getProductController = require('../controller/Product/getProduct');
const updateProductController = require('../controller/Product/updateProduct');
const getCategoryProductOne = require('../controller/Product/getCategoryProductOne');
const getCategoryWiseProduct = require('../controller/Product/getCategoryWiseProduct');
const getProductDetails = require('../controller/Product/getProductDetails');
const addToCartController = require('../controller/User/addToCartController');
const countAddToCartProduct = require('../controller/User/countAddToCartProduct');
const addToCartViewProduct = require('../controller/User/addToCartViewProduct');
const updateAddToCartProduct = require('../controller/User/updateAddToCartProduct');
const deleteAddToCartProduct = require('../controller/User/deleteAddToCartProduct');
const searchProduct = require('../controller/Product/searchProduct');
const filterProductController = require('../controller/Product/filterProduct');

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/user-logout",userLogout);

//admin panel
router.get("/all-user",authToken,allUsers);
router.post("/update-user",authToken,updateUser);

//product
router.post("/upload-product",authToken,UploadProductController);
router.get("/get-product",getProductController);
router.post("/update-product",authToken,updateProductController);
router.get("/get-categoryProduct",getCategoryProductOne)
router.post("/category-product",getCategoryWiseProduct)
router.post("/product-details",getProductDetails)
router.get("/search",searchProduct)
router.post("/filter-product",filterProductController)

//user add to cart
router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)




module.exports = router;
