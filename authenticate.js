/**
 * @api {} 
 * @apiVersion 0.0.1
 * @apiName Oauth 2
 * @apiGroup Authenticate
 * @apiPermission user
 * @apiParamExample {json} Authenticate
 	Authenticate

	Back-end use Oauth 2 to authenticate

	You should follow this document:

	'clientId' => The client ID assigned to you by the provider

	'clientSecret' => The client Secret

	'redirectUri' => 'http://yourapp.url/',

	'urlAuthorize' => 'http://visan-dev.herokuapp.com/oauth/authorize',

	'urlAccessToken' => 'http://visan-dev.herokuapp.com/oauth/token',

	'urlResourceOwnerDetails' => 'http://visan-dev.herokuapp.com/oauth/resource'

	ClientId and clientSecret: we will generate for you
 * 
 */
