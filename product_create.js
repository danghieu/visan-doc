
/**
 * @api {post} /wp-json/wc/v1/products?access_token=:token Add new Product
 * @apiVersion 0.0.1
 * @apiName PostProdcut
 * @apiGroup Product
 * @apiPermission admin
 *
 * @apiDescription In this case "apiErrorStructure" is defined and used.
 * Define blocks with params that will be used in several functions, so you dont have to rewrite them.
 *
 * @apiParam {string} token Token.
 * @apiParamExample Request Example
	{
	  "name": "Premium Quality",
	  "type": "simple",
	  "regular_price": "21.99",
	  "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
	  "short_description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
	  "categories": [
	    {
	      "id": 9
	    },
	    {
	      "id": 14
	    }
	  ],
	  "images": [
	    {
	      "src": "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg",
	      "position": 0
	    },
	    {
	      "src": "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg",
	      "position": 1
	    }
	  ]
	}














  
 * @apiParamExample Success Response Example
 *{
  "id": 162,
  "name": "Premium Quality",
  "slug": "premium-quality-3",
  "permalink": "https://example.com/product/premium-quality-3/",
  "date_created": "2016-05-31T23:40:07",
  "date_modified": "2016-05-31T23:40:07",
  "type": "simple",
  "status": "publish",
  "featured": false,
  "catalog_visibility": "visible",
  "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
  "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n",
  "sku": "",
  "price": "21.99",
  "regular_price": "21.99",
  "sale_price": "",
  "date_on_sale_from": "",
  "date_on_sale_to": "",
  "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#82;&#36;</span>21,99</span>",
  "on_sale": false,
  "purchasable": true,
  "total_sales": 0,
  "virtual": false,
  "downloadable": false,
  "downloads": [],
  "download_limit": -1,
  "download_expiry": -1,
  "download_type": "standard",
  "external_url": "",
  "button_text": "",
  "tax_status": "taxable",
  "tax_class": "",
  "manage_stock": false,
  "stock_quantity": null,
  "in_stock": true,
  "backorders": "no",
  "backorders_allowed": false,
  "backordered": false,
  "sold_individually": false,
  "weight": "",
  "dimensions": {
    "length": "",
    "width": "",
    "height": ""
  },
  "shipping_required": true,
  "shipping_taxable": true,
  "shipping_class": "",
  "shipping_class_id": 0,
  "reviews_allowed": true,
  "average_rating": "0.00",
  "rating_count": 0,
  "related_ids": [],
  "upsell_ids": [],
  "cross_sell_ids": [],
  "parent_id": 0,
  "purchase_note": "",
  "categories": [
    {
      "id": 9,
      "name": "Clothing",
      "slug": "clothing"
    },
    {
      "id": 14,
      "name": "T-shirts",
      "slug": "t-shirts"
    }
  ],
  "tags": [],
  "images": [
    {
      "id": 163,
      "date_created": "2016-05-31T23:40:07",
      "date_modified": "2016-05-31T23:40:07",
      "src": "https://example.com/wp-content/uploads/2016/05/T_2_front.jpg",
      "name": "",
      "alt": "",
      "position": 0
    },
    {
      "id": 164,
      "date_created": "2016-05-31T23:40:10",
      "date_modified": "2016-05-31T23:40:10",
      "src": "https://example.com/wp-content/uploads/2016/05/T_2_back.jpg",
      "name": "",
      "alt": "",
      "position": 1
    }
  ],
  "attributes": [],
  "default_attributes": [],
  "variations": [],
  "grouped_products": [],
  "menu_order": 0,
  "_links": {
    "self": [
      {
        "href": "https://example.com/wp-json/wc/v1/products/162"
      }
    ],
    "collection": [
      {
        "href": "https://example.com/wp-json/wc/v1/products"
      }
    ]
  }
}
 * @apiUse NotFoundError
 */

 function PostProdcut() { return; }
