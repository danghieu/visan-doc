/**
 * @api {get} /wp-json/wc/v1/orders/?access_token=:token Get All orders
 * @apiVersion 0.0.1
 * @apiName GetAllOrder
 * @apiGroup Order
 * @apiPermission admin
 
 * @apiError NoAccessRight Only authenticated Customers and Admins can access the data.
 * 
 * @apiParamExample Success Response Example
 [
  {
    "id": 154,
    "parent_id": 0,
    "status": "processing",
    "order_key": "wc_order_574cc02467274",
    "number": "154",
    "currency": "USD",
    "version": "2.6.0",
    "prices_include_tax": false,
    "date_created": "2016-05-30T22:35:16",
    "date_modified": "2016-05-30T22:35:16",
    "customer_id": 0,
    "discount_total": "0.00",
    "discount_tax": "0.00",
    "shipping_total": "10.00",
    "shipping_tax": "0.00",
    "cart_tax": "1.95",
    "total": "37.95",
    "total_tax": "1.95",
    "billing": {
      "first_name": "John",
      "last_name": "Doe",
      "company": "",
      "address_1": "969 Market",
      "address_2": "",
      "city": "San Francisco",
      "state": "CA",
      "postcode": "94103",
      "country": "US",
      "email": "john.doe@example.com",
      "phone": "(555) 555-5555"
    },
    "shipping": {
      "first_name": "John",
      "last_name": "Doe",
      "company": "",
      "address_1": "969 Market",
      "address_2": "",
      "city": "San Francisco",
      "state": "CA",
      "postcode": "94103",
      "country": "US"
    },
    "payment_method": "bacs",
    "payment_method_title": "bacs",
    "transaction_id": "",
    "customer_ip_address": "127.0.0.1",
    "customer_user_agent": "curl/7.47.0",
    "created_via": "rest-api",
    "customer_note": "",
    "date_completed": "2016-05-30T19:35:16",
    "date_paid": "2016-05-30 19:35:25",
    "cart_hash": "",
    "line_items": [
      {
        "id": 18,
        "name": "Woo Single #1",
        "sku": "",
        "product_id": 93,
        "variation_id": 0,
        "quantity": 2,
        "tax_class": "",
        "price": "3.00",
        "subtotal": "6.00",
        "subtotal_tax": "0.45",
        "total": "6.00",
        "total_tax": "0.45",
        "taxes": [
          {
            "id": 75,
            "total": 0.45,
            "subtotal": 0.45
          }
        ],
        "meta": []
      },
      {
        "id": 19,
        "name": "Ship Your Idea",
        "sku": "",
        "product_id": 22,
        "variation_id": 23,
        "quantity": 1,
        "tax_class": "",
        "price": "20.00",
        "subtotal": "20.00",
        "subtotal_tax": "1.50",
        "total": "20.00",
        "total_tax": "1.50",
        "taxes": [
          {
            "id": 75,
            "total": 1.5,
            "subtotal": 1.5
          }
        ],
        "meta": [
          {
            "key": "pa_color",
            "label": "Color",
            "value": "Black"
          }
        ]
      }
    ],
    "tax_lines": [
      {
        "id": 21,
        "rate_code": "US-CA-STATE TAX",
        "rate_id": "75",
        "label": "State Tax",
        "compound": false,
        "tax_total": "1.95",
        "shipping_tax_total": "0.00"
      }
    ],
    "shipping_lines": [
      {
        "id": 20,
        "method_title": "Flat Rate",
        "method_id": "flat_rate",
        "total": "10.00",
        "total_tax": "0.00",
        "taxes": []
      }
    ],
    "fee_lines": [],
    "coupon_lines": [],
    "refunds": [],
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/wc/v1/orders/154"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/wc/v1/orders"
        }
      ]
    }
  },
  {
    "id": 116,
    "parent_id": 0,
    "status": "processing",
    "order_key": "wc_order_5728e6e53d2a4",
    "number": "116",
    "currency": "USD",
    "version": "2.6.0",
    "prices_include_tax": false,
    "date_created": "2016-05-03T17:59:00",
    "date_modified": "2016-05-30T22:37:31",
    "customer_id": 1,
    "discount_total": "0.00",
    "discount_tax": "0.00",
    "shipping_total": "10.00",
    "shipping_tax": "0.00",
    "cart_tax": "0.00",
    "total": "14.00",
    "total_tax": "0.00",
    "billing": {
      "first_name": "John",
      "last_name": "Doe",
      "company": "",
      "address_1": "969 Market",
      "address_2": "",
      "city": "San Francisco",
      "state": "CA",
      "postcode": "94103",
      "country": "US",
      "email": "john.doe@claudiosmweb.com",
      "phone": "(555) 555-5555"
    },
    "shipping": {
      "first_name": "John",
      "last_name": "Doe",
      "company": "",
      "address_1": "969 Market",
      "address_2": "",
      "city": "San Francisco",
      "state": "CA",
      "postcode": "94103",
      "country": "US"
    },
    "payment_method": "bacs",
    "payment_method_title": "Direct Bank Transfer",
    "transaction_id": "",
    "customer_ip_address": "127.0.0.1",
    "customer_user_agent": "curl/7.47.0",
    "created_via": "",
    "customer_note": "",
    "date_completed": "2016-05-30T19:35:16",
    "date_paid": "2016-05-03 14:59:12",
    "cart_hash": "",
    "line_items": [
      {
        "id": 6,
        "name": "Woo Single #2",
        "sku": "12345",
        "product_id": 99,
        "variation_id": 0,
        "quantity": 2,
        "tax_class": "",
        "price": "2.00",
        "subtotal": "4.00",
        "subtotal_tax": "0.00",
        "total": "4.00",
        "total_tax": "0.00",
        "taxes": [],
        "meta": []
      }
    ],
    "tax_lines": [],
    "shipping_lines": [
      {
        "id": 7,
        "method_title": "Flat Rate",
        "method_id": "flat_rate",
        "total": "10.00",
        "total_tax": "0.00",
        "taxes": []
      }
    ],
    "fee_lines": [],
    "coupon_lines": [],
    "refunds": [],
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/wc/v1/orders/116"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/wc/v1/orders"
        }
      ],
      "customer": [
        {
          "href": "https://example.com/wp-json/wc/v1/customers/1"
        }
      ]
    }
  }
]
 * @apiUse NotFoundError
 */

 function GetAllOrder() { return; }
