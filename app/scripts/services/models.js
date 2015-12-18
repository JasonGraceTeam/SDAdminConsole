'use strict';

/**
 * @ngdoc service
 * @name sdadminConsoleApp.models
 * @description
 * # models
 * Factory in the sdadminConsoleApp.
 */
 /* jshint ignore:start */
 
angular.module('sdadminConsoleApp')
.factory('models', function($rootScope,utilService,constants,$log, $q) {
  return {
    getProducts :function(productIds){
      var defered = $q.defer();
      var parameter = {method : constants.SERVICES.PRODUCT.METHOD.GET_PROD_LST,params:{prodIds:productIds}};
      utilService.invokeService(function(response){
          if (response.length>0) {
            defered.resolve({title:constants.TABLE_LIST.PRODUCTS,response:response});
          }
        },function(err){
          defered.reject(err);
        },constants.SERVICES.PRODUCT.PATH,parameter);
      return defered.promise;
    },
    updateProducts :function(product){
      var defered = $q.defer();
      var parameter = {method : constants.SERVICES.PRODUCT.METHOD.UPDATE_PROD,params:{product:product}};
      utilService.invokeService(function(response){
            defered.resolve({status:'success'});
        },function(err){
          defered.reject(err);
        },constants.SERVICES.PRODUCT.PATH,parameter);
      return defered.promise;
    },
    searchProducts :function(searchText){
      var defered = $q.defer();
      var parameter = {method : constants.SERVICES.PRODUCT.METHOD.GET_PROD_SEARCH,params:{searchText:searchText,currentIndex:1}};
      utilService.invokeService(function(response){
            defered.resolve({title:constants.TABLE_LIST.PRODUCTS,response:response});
        },function(err){
          defered.reject(err);
        },constants.SERVICES.PRODUCT.PATH,parameter);
      return defered.promise;
    },
    getReviews :function(productId){
      var defered = $q.defer();
      var reviewParam = {method : constants.SERVICES.REVIEW.METHOD.GET_REVW_FR_PROD_ID,params:{prodId:productId}};
      utilService.invokeService(function(response){
          if (response.length>0) {
              defered.resolve({title:constants.TABLE_LIST.REVIEWS,response:response});
          }else{
            defered.reject();
          }
        },function(err){
          defered.reject(err);
        },constants.SERVICES.REVIEW.PATH,reviewParam);
      return defered.promise;
    },
    updateReviews :function(product){
      var defered = $q.defer();
      var parameter = {method : constants.SERVICES.REVIEW.METHOD.UPDATE_REVIEW,params:{review:review}};
      utilService.invokeService(function(response){
            defered.resolve({status:'success'});
        },function(err){
          defered.reject(err);
        },constants.SERVICES.PRODUCT.PATH,parameter);
      return defered.promise;
    },
    getCategories :function(productId){
      var defered = $q.defer();
      var parameter = {method : constants.SERVICES.CATEGORY.METHOD.GET_CAT_LST,params:{currentIndex:1}};
      utilService.invokeService(function(response){
          if (response.length>0) {
              defered.resolve({title:constants.TABLE_LIST.CATEGORIES,response:response});
          }else{
            defered.reject();
          }
        },function(err){
          defered.reject(err);
        },constants.SERVICES.CATEGORY.PATH,parameter);
      return defered.promise;
    },
    updateCategories :function(category){
      var defered = $q.defer();
      var parameter = {method : constants.SERVICES.CATEGORY.METHOD.UPDATE_CATEGORY,params:{category:category}};
      utilService.invokeService(function(response){
            defered.resolve({status:'success'});
        },function(err){
          defered.reject(err);
        },constants.SERVICES.PRODUCT.PATH,parameter);
      return defered.promise;
    },  
  }
});
/*
  .factory('Address', function(constants,utilService){
  var Address = function(address,isPush){
    if (address) {
      this.address_id = address.address_id;
      this.userName = address.user_name;
      this.phno = address.phno;
      this.address1 = address.address1;
      this.address2 = address.address2;
      this.city = address.city;
      this.area = address.area;
      this.pincode = address.pincode;
      this.state = address.state;
      this.device_id = address.device_id;
      if(isPush) {
        this.addNewAddress(address);
      }
    }else{
      return this;
    }
  };
  Address.prototype.addNewAddress = function(address){
    var self = this;
    var addressParam = {method : constants.SERVICES.ADDRESS.METHOD.ADD_ADDRS_FR_DVS_ID,params:{address:address,deviceId:address.device_id}};
    utilService.invokeService(function(response){
      if (response) {
      self.address_id = response.addressId;
        return self;
      }else{
        utilService.showErrorAlert('E101');
      }
    },function(){
      //console.log('Error : Address \n ErrorMessage : ' + JSON.stringify(err));
      utilService.showErrorAlert('E101');
    },constants.SERVICES.ADDRESS.PATH,addressParam);
  };
  return Address;
})
.factory('AddressBook', function(Address,constants,utilService,$rootScope){
  var AddressBook = function(){
    this.AddressList = [];
    this.getAddressBook();
    return this;
  };  
  AddressBook.prototype.getAddressBook = function(){
    var self = this;
    var deviceId = utilService.getDeviceId();
    var addressParam = {method : constants.SERVICES.ADDRESS.METHOD.GET_ADDRS_FR_DVS_ID,params:{deviceId:deviceId}};
    utilService.invokeService(function(response){
      if (response.length>0) {
      for (var i = response.length - 1; i >= 0; i--) {
        self.AddressList.push(new Address(response[i]));
      }
      $rootScope.$broadcast('AddressLoaded');
      return self.AddressList;
    }else{
      self.AddressList = [];
    }
    },function(){
      //console.log('Error : Address \n ErrorMessage : ' + JSON.stringify(err));
      utilService.showErrorAlert('E101');
    },constants.SERVICES.ADDRESS.PATH,addressParam);
  };
  return AddressBook;
})
.factory('Review', function(){
  var Review = function(review){
    if (review) {
      this.id = review.review_id;
      this.author = review.author_name;
      this.title= review.title;
      this.description = review.description;
      this.rating = review.rating;
      this.productId = review.product_id;
      this.date = review.date;
      this.deviceId = review.device_id;
    }else{
      return this;
    }
  };
  return Review;
})
.factory('Reviews', function(Review,constants,utilService,$rootScope){
  var Reviews = function(prodId){
    this.ReviewList = [];
    if (prodId) {
      this.getReviewForProduct(prodId);
    }else{
      return this;
    }
  };  
  Reviews.prototype.getReviewForProduct = function(productId){
    var self = this;
    var reviewParam = {method : constants.SERVICES.REVIEW.METHOD.GET_REVW_FR_PROD_ID,params:{prodId:productId}};
    utilService.invokeService(function(response){
      if (response.length>0) {
      for (var i = response.length - 1; i >= 0; i--) {
        self.ReviewList.push(new Review(response[i]));
      }
      $rootScope.$broadcast('ProductReviewLoaded',{context:productId});
      return self.ReviewList;
    }else{
      self.ReviewList = [];
    }
    },function(err){
      utilService.showErrorAlert('E101');
      console.log('Error : REVIEW \n ErrorMessage : ' + JSON.stringify(err));
    },constants.SERVICES.REVIEW.PATH,reviewParam);
  };
  return Reviews;
})
.factory('Product', function($rootScope,utilService,constants,Reviews) {
  var Product = function(product){
    if (product && typeof product === 'object') {
      this.id = product.product_id;
      this.catId = product.category_id;
      this.name = product.name;
      this.avgRating = product.rating;
      this.image = JSON.parse(product.image);
      this.price = product.price || '0.00';
      this.inStock = product.in_stock;
      this.noOfReviews = new Reviews(product.product_id);
    }
    else{
      this.getProduct(product);
      return this;
    }
    this.getProductPrice = function() {
      return this.price || 0;
    };
  };
  Product.prototype.getProductID = function() {
    return this.id;
  };  
  Product.prototype.getProduct = function(productId) {
    var self = this;
    var parameter = {method : constants.SERVICES.PRODUCT.METHOD.GET_PROD_LST,params:{prodIds:[productId]}};
    utilService.invokeService(function(response){
      if (response.length>0) {
        self.id = response[0].product_id;
        self.catId = response[0].category_id;
        self.name = response[0].name;
        self.avgRating = response[0].rating;
        self.image = JSON.parse(response[0].image);
        self.price = response[0].price;
        self.inStock = response[0].in_stock;
        self.noOfReviews = new Reviews(response[0].product_id);
        self.nutritions = JSON.parse(response[0].nutrition_cont);
        self.ingredients = JSON.parse(response[0].ingredients);
        self.description = response[0].description;
        self.relatedProducts = response.relatedProducts;
        return self;
      }
    },function(err){
      utilService.showErrorAlert('E101');
      console.log('Error : Product \n ErrorMessage : ' + JSON.stringify(err));
    },constants.SERVICES.PRODUCT.PATH,parameter);
  };

  return Product;
})
.factory('Products', function(Product,constants,utilService,$rootScope) {
  var Products = function(Ids,isSearch){
    this.ProductList = [];
    if (!isSearch) {
      if (Array.isArray(Ids)) {
        this.getProductsForIds(Ids);
      }else{
        this.getProductsForCatId(Ids);
      }
    }else{
      this.getProductsForSearchText(Ids);

    }
  };
  Products.prototype.getProductsForIds = function(productIds){
    var self = this;
    var parameter = {method : constants.SERVICES.PRODUCT.METHOD.GET_PROD_LST,params:{prodIds:productIds}};
    utilService.invokeService(function(response){
      if (response.length>0) {
      for (var i = response.length - 1; i >= 0; i--) {
        self.ProductList.push(new Product(response[i]));
      }
      $rootScope.$broadcast('homeProductsLoaded');
      return self.ProductList;
    }else{
      self.ProductList=[];
    }
    },function(err){
      utilService.showErrorAlert('E101');
      console.log('Error : Product \n ErrorMessage : ' + JSON.stringify(err));
    },constants.SERVICES.PRODUCT.PATH,parameter);
  };
  Products.prototype.getProductsForCatId = function(catId){
    var self = this;
    var parameter = {method : constants.SERVICES.PRODUCT.METHOD.GET_PROD_LST_FR_CAT_ID,params:{currentIndex:1,catId:catId}};
    utilService.invokeService(function(response){
      if (response.length>0) {
        for (var i = response.length - 1; i >= 0; i--) {
          self.ProductList.push(new Product(response[i]));
        }
        $rootScope.$broadcast('categoryProductsLoaded');
        return self.ProductList;
      }else{
        self.ProductList=[];
      }
    },function(err){
      utilService.showErrorAlert('E101');
      console.log('Error : Product \n ErrorMessage : ' + JSON.stringify(err));
    },constants.SERVICES.PRODUCT.PATH,parameter);
  };
  Products.prototype.getProductsForSearchText = function(searchText){
    var self = this;
    var parameter = {method : constants.SERVICES.PRODUCT.METHOD.GET_PROD_SEARCH,params:{searchText:searchText,currentIndex:1}};
    utilService.invokeService(function(response){
      if (response.length>0) {
        for (var i = response.length - 1; i >= 0; i--) {
          self.ProductList.push(new Product(response[i]));
        }
        $rootScope.$broadcast('searchProductsLoaded');
        return self.ProductList;
      }else{
        self.ProductList=[];
      }
    },function(err){
      utilService.showErrorAlert('E101');
      console.log('Error : Product \n ErrorMessage : ' + JSON.stringify(err));
    },constants.SERVICES.PRODUCT.PATH,parameter);
  };
  return Products;
})
.factory('Category', function(){
  var Category = function(category){
    if (category) {
      this.id = category.category_id;
      this.name = category.name;
      this.image = category.image;
    }else{
      this.getCategory();
      return this;
    }
  };
  Category.prototype.getCategoryId = function(){
    return this.id;
  };
  return Category;
})
.factory('Categories', function(Category,utilService,constants){
  var Categories = function(){
    this.CategoryList = [];
    this.getCategories();
  };
  Categories.prototype.getCategories = function(){
    var self = this;
    var parameter = {method : constants.SERVICES.CATEGORY.METHOD.GET_CAT_LST,params:{currentIndex:1}};
    utilService.invokeService(function(response){
      if (response.length>0) {
      for (var i = response.length - 1; i >= 0; i--) {
        self.CategoryList.push(new Category(response[i]));
      }
      return self.CategoryList;
    }else{
      self.CategoryList=[];
    }
    },function(err){
      utilService.showErrorAlert('E101');
      console.log('Error : Category \n ErrorMessage : ' + JSON.stringify(err));
    },constants.SERVICES.CATEGORY.PATH,parameter);
  };  
  return Categories;
});
*/
/* jshint ignore:end */
