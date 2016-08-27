/**
 * @api {post} /wp/v2/users?access_token=:token Add new user
 * @apiVersion 0.0.1
 * @apiName PostUser
 * @apiGroup User
 * @apiPermission signupman
 * @apiParamExample {json} params
  	username
		Login name for the resource.
		Required: true

	name
		Display name for the resource.

	first_name
		First name for the resource.

	last_name
		Last name for the resource.

	email
		The email address for the resource.
		Required: true

	url
		URL of the resource.

	description
		Description of the resource.

	nickname
		The nickname for the resource.

	slug
		An alphanumeric identifier for the resource.

	roles
		Roles assigned to the resource.

	password
		Password for the resource (never included).
		Required: true

	capabilities
		All capabilities assigned to the resource.
 *
 */