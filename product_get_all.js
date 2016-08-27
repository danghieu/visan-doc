/**
 * @api {get} /wp-json/wc/v1/products/?access_token=:token Get All products
 * @apiVersion 0.0.1
 * @apiName GetAllProduct
 * @apiGroup Product
 * @apiPermission customer admin
 *
 * 
* @apiParamExample Success Response Example
 *[
  {
    "id": 165,
    "name": "Ship Your Idea",
    "slug": "ship-your-idea-4",
    "permalink": "https://example.com/product/ship-your-idea-4/",
    "date_created": "2016-05-31T23:50:56",
    "date_modified": "2016-06-02T23:11:41",
    "type": "variable",
    "status": "publish",
    "featured": false,
    "catalog_visibility": "visible",
    "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
    "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n",
    "sku": "",
    "price": "19.99",
    "regular_price": "",
    "sale_price": "",
    "date_on_sale_from": "",
    "date_on_sale_to": "",
    "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#82;&#36;</span>19,99</span>",
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
    "related_ids": [
      34,
      37,
      187,
      205,
      31
    ],
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
        "id": 166,
        "date_created": "2016-05-31T23:50:57",
        "date_modified": "2016-05-31T23:50:57",
        "src": "https://example.com/wp-content/uploads/2016/05/T_4_front.jpg",
        "name": "",
        "alt": "",
        "position": 0
      },
      {
        "id": 167,
        "date_created": "2016-05-31T23:50:57",
        "date_modified": "2016-05-31T23:50:57",
        "src": "https://example.com/wp-content/uploads/2016/05/T_4_back.jpg",
        "name": "",
        "alt": "",
        "position": 1
      },
      {
        "id": 168,
        "date_created": "2016-05-31T23:50:58",
        "date_modified": "2016-05-31T23:50:58",
        "src": "https://example.com/wp-content/uploads/2016/05/T_3_front.jpg",
        "name": "",
        "alt": "",
        "position": 2
      },
      {
        "id": 169,
        "date_created": "2016-05-31T23:50:59",
        "date_modified": "2016-05-31T23:50:59",
        "src": "https://example.com/wp-content/uploads/2016/05/T_3_back.jpg",
        "name": "",
        "alt": "",
        "position": 3
      }
    ],
    "attributes": [
      {
        "id": 6,
        "name": "Color",
        "position": 0,
        "visible": false,
        "variation": true,
        "options": [
          "Black",
          "Green"
        ]
      },
      {
        "id": 0,
        "name": "Size",
        "position": 1,
        "visible": true,
        "variation": true,
        "options": [
          "S",
          "M"
        ]
      }
    ],
    "default_attributes": [
      {
        "id": 6,
        "name": "Color",
        "option": "black"
      },
      {
        "id": 0,
        "name": "size",
        "option": "S"
      }
    ],
    "variations": [
      {
        "id": 170,
        "date_created": "2016-05-31T23:50:56",
        "date_modified": "2016-06-02T23:11:41",
        "permalink": "https://example.com/product/ship-your-idea-4/?attribute_pa_color=black&attribute_size=S",
        "sku": "",
        "price": "19.99",
        "regular_price": "19.99",
        "sale_price": "",
        "date_on_sale_from": "",
        "date_on_sale_to": "",
        "on_sale": false,
        "purchasable": true,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "in_stock": true,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "weight": "",
        "dimensions": {
          "length": "",
          "width": "",
          "height": ""
        },
        "shipping_class": "",
        "shipping_class_id": 0,
        "image": [
          {
            "id": 171,
            "date_created": "2016-05-31T23:51:01",
            "date_modified": "2016-05-31T23:51:01",
            "src": "https://example.com/wp-content/uploads/2016/05/T_4_front-1.jpg",
            "name": "",
            "alt": "",
            "position": 0
          }
        ],
        "attributes": [
          {
            "id": 6,
            "name": "Color",
            "option": "black"
          },
          {
            "id": 0,
            "name": "size",
            "option": "S"
          }
        ]
      },
      {
        "id": 172,
        "date_created": "2016-05-31T23:50:56",
        "date_modified": "2016-06-02T23:11:41",
        "permalink": "https://example.com/product/ship-your-idea-4/?attribute_pa_color=green&attribute_size=M",
        "sku": "",
        "price": "19.99",
        "regular_price": "19.99",
        "sale_price": "",
        "date_on_sale_from": "",
        "date_on_sale_to": "",
        "on_sale": false,
        "purchasable": true,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "in_stock": true,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "weight": "",
        "dimensions": {
          "length": "",
          "width": "",
          "height": ""
        },
        "shipping_class": "",
        "shipping_class_id": 0,
        "image": [
          {
            "id": 173,
            "date_created": "2016-05-31T23:51:03",
            "date_modified": "2016-05-31T23:51:03",
            "src": "https://example.com/wp-content/uploads/2016/05/T_3_front-1.jpg",
            "name": "",
            "alt": "",
            "position": 0
          }
        ],
        "attributes": [
          {
            "id": 6,
            "name": "Color",
            "option": "green"
          },
          {
            "id": 0,
            "name": "size",
            "option": "M"
          }
        ]
      }
    ],
    "grouped_products": [],
    "menu_order": 0,
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/wc/v1/products/165"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/wc/v1/products"
        }
      ]
    }
  },
  {
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
]
 *
 * @apiError NoAccessRight Only authenticated Customers and Admins can access the data.
 * 
 *
 * @apiUse NotFoundError
 */
 function GetAllProduct() { return; }
