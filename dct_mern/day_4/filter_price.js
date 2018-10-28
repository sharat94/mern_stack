function findProductByPriceRange(a,b,c){
	a.filter(function(product){
		if (product.price > b && product.price < c)
		{
			return product;
		}
	});
}