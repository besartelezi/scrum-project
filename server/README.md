# Welcome to the BACKEND

# API Endpoints =>

# Products:

## POST:

### Create a Product => "/products"

1. Body example:

```js
{
    "product_name":"testProductName",
    "amount": 10,
    "price": 101,
    "category_id": 1,
    "post_date": "2022-08-23",
    "users_id": 1,
    "long_description": "testLongDesc",
    "short_description": "testShortDesc",
    "image": "testImg",
    "theme_id": 1
}
```

2. Headers example:

```js
{
    "Content-type": "application/json"
}
```

On Success:

```js
{
    "message": "Product created successfully"
}
```

On Error:

```js
TODO: HANDLE ERROR
```

---

## GET:

### Get all products => "/products"

On Success:

```js
{
    "response": [
        {
            "id": "1",
            "product_name": "testProductName",
            "amount": 10,
            "price": 101,
            "category_id": 1,
            "post_date": "2022-08-22T22:00:00.000Z",
            "users_id": 1,
            "image": {
                "type": "Buffer",
                "data": [
                    116,
                    101,
                    115,
                    116,
                    73,
                    109,
                    103
                ]
            },
            "theme_id": 1,
            "long_description": "testLongDesc",
            "short_description": "testShortDesc"
        },
        {
            "id": "2",
            "product_name": "testProductName2",
            "amount": 11,
            "price": 102,
            "category_id": 2,
            "post_date": "2022-08-23T22:00:00.000Z",
            "users_id": 2,
            "image": {
                "type": "Buffer",
                "data": [
                    116,
                    101,
                    115,
                    116,
                    73,
                    109,
                    103,
                    50
                ]
            },
            "theme_id": 2,
            "long_description": "testLongDesc2",
            "short_description": "testShortDesc2"
        }
    ]
}
```

On Error:

```js
TODO: HANDLE ERROR
```

### Get product by Id => "/products/byid/${id}"

On Success:

```js
{
    "response": {
        "product_name": "testProductName",
        "amount": 10,
        "price": 101,
        "long_description": "testLongDesc",
        "short_description": "testShortDesc",
        "image": {
            "type": "Buffer",
            "data": [
                116,
                101,
                115,
                116,
                73,
                109,
                103
            ]
        }
    }
}
```

On Error:

```js
TODO: HANDLE ERROR
```

### Get product by name => "/products/byname/${name}"

On Success:

```js
{
    "response": {
        "product_name": "testProductName",
        "amount": 10,
        "price": 101,
        "long_description": "testLongDesc",
        "short_description": "testShortDesc",
        "image": {
            "type": "Buffer",
            "data": [
                116,
                101,
                115,
                116,
                73,
                109,
                103
            ]
        }
    }
}
```

On Error:

```js
TODO: HANDLE ERROR
```

---

## PUT

### Update a specific product => "/product/${id}"

1. Body example:

```js
{
    "product_name":"testProductNameCHANGED",
    "amount": 99,
    "price": 1011,
    "category_id": 4,
    "post_date": "2022-08-22",
    "users_id": 1,
    "long_description": "testLongDescCHANGED",
    "short_description": "testShortDescCHANGED",
    "image": "testImgCHANGED",
    "theme_id": 3
}
```

2. Headers example:

```js
{
    "Content-type": "application/json"
}
```

On Success:

```js
{
    "message": "product updated successfully"
}
```

On Error:

```js
TODO: HANDLE ERROR
```

---

## DELETE

### Delete a specific product => "/products/${id}"

On Success:

```js
{
    "message": "product deleted successfully"
}
```

On Error:

```js
TODO: HANDLE ERROR
```

# Authentication

## POST

### Register a new user => "/auth/register"

1. Body example:

```js
{
    "firstname":"testFirstName",
    "lastname": "testLastName",
    "email": "test@becode.org",
    "username":"testUsername",
    "password":"testPassword",
	"confirmPassword":"testPassword",
    "address":"testAddress"
}
```

2. Headers example:

```js
{
    "Content-type": "application/json"
}
```

On Success:

```js
{
    "status": "Registered succesfully",
    "statusInfo": [],
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMSJ9LCJpYXQiOjE2NjEyNTE4OTAsImV4cCI6MTY2MTI1NTQ5MH0.4WY6dS6iQoIPxN_LJE0QL4QMmzInlGToYQOVJn1m4Ms"
}
```

On Error:

```js
{
    "status": "Unable to register",
    "statusInfo": [
        {
            "message": "All Fields are valid!"
        },
        {
            "message": "Email already exists"
        }
    ]
}
```

### Log in user => "/auth/login"

1. Body example:

```js
{
    "email": "test@becode.org",
    "password":"testPassword",
}
```

2. Headers example:

```js
{
    "Content-type": "application/json"
}
```

On Success:

```js
{
    "status": "Success!",
    "statusInfo": [],
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMSJ9LCJpYXQiOjE2NjEyNTIwODksImV4cCI6MTY2MTI1NTY4OX0.J4c2ZWATfwk-JJqPSovr0i-nzrmBHAojugZtl5Usn1s"
}
```

On Error:

```js
{
    "status": "Failed",
    "statusInfo": [
        {
            "message": "Password is incorrect"
        }
    ]
}
```

### Verify user => "/auth/verify"

1. Headers example:

```js
{
    "Content-type": "application/json",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMSJ9LCJpYXQiOjE2NjEyNTIwODksImV4cCI6MTY2MTI1NTY4OX0.J4c2ZWATfwk-JJqPSovr0i-nzrmBHAojugZtl5Usn1s"
}
```

On Success:

```js
true;
```

On Error:

```js
{
    "message": "Not Authorized"
}
```

---

# Dashboard / get logged in user Data

## GET

### Get user info => "/dashboard"

1. Headers example:

```js
{
    "Content-type": "application/json",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMSJ9LCJpYXQiOjE2NjEyNTIwODksImV4cCI6MTY2MTI1NTY4OX0.J4c2ZWATfwk-JJqPSovr0i-nzrmBHAojugZtl5Usn1s"
}
```

On Success:

```js
{
    "user": {
        "firstname": "testFirstName",
        "lastname": "testLastName",
        "email": "test@becode.org",
        "username": "testUsername",
        "address": "testAddress"
    }
}
```

On Error:

```js
{
    "message": "Not Authorized"
}
```
