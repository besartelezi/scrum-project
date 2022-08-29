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
    "image": 1,
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

### Get all themes => "/themes"

On Success:

```js
{
    "status": "success",
    "resultData": [
        {
            "id": 1,
            "theme_name": "Dragonball Z"
        },
        {
            "id": 2,
            "theme_name": "Naruto"
        },
        {
            "id": 3,
            "theme_name": "One piece"
        },
        {
            "id": 4,
            "theme_name": "Pokémon"
        },
        {
            "id": 5,
            "theme_name": "Hajime no Ippo"
        },
        {
            "id": 6,
            "theme_name": "Attack on titan"
        },
        {
            "id": 7,
            "theme_name": "DC"
        },
        {
            "id": 8,
            "theme_name": "Marvel"
        },
        {
            "id": 9,
            "theme_name": "Death note"
        },
        {
            "id": 10,
            "theme_name": "Black clover"
        },
        {
            "id": 11,
            "theme_name": "Chainsaw Man"
        },
        {
            "id": 12,
            "theme_name": "Jujutsu Kaisen"
        },
        {
            "id": 13,
            "theme_name": "Berserk"
        },
        {
            "id": 14,
            "theme_name": "Yakuza"
        },
        {
            "id": 15,
            "theme_name": "Elden ring"
        }
    ]
}
```

### Get all categories => "/categories"

On Success:

```js
{
    "status": "success",
        "resultData": [
        {
            "id": 1,
            "category": "Trading cards"
        },
        {
            "id": 2,
            "category": "Action figures"
        },
        {
            "id": 3,
            "category": "Plushies"
        },
        {
            "id": 4,
            "category": "Clothing"
        },
        {
            "id": 5,
            "category": "Manga"
        },
        {
            "id": 6,
            "category": "Light novels"
        },
        {
            "id": 7,
            "category": "Accessoires "
        }
    ]
}
```

### Get all products => "/products"

On Success:

```js
{
    "status": "success",
    "resultData": [
        {
            "id": "17",
            "product_name": "productName",
            "amount": 10,
            "price": 1000,
            "category_id": 2,
            "post_date": "2022-08-14T22:00:00.000Z",
            "users_id": 1,
            "theme_id": 4,
            "long_description": "long desc",
            "short_description": "short desc",
            "image": "http://res.cloudinary.com/dpchxrbum/image/upload/v1661438689/blog/2022-08-25T14:44:48.477Z.jpg"
        },
        {
            "id": "18",
            "product_name": "productName",
            "amount": 10,
            "price": 1000,
            "category_id": 2,
            "post_date": "2022-08-14T22:00:00.000Z",
            "users_id": 1,
            "theme_id": 4,
            "long_description": "long desc",
            "short_description": "short desc",
            "image": "http://res.cloudinary.com/dpchxrbum/image/upload/v1661438882/blog/2022-08-25T14:48:01.380Z.jpg"
        },
        {
            "id": "19",
            "product_name": "hey handsome",
            "amount": 10,
            "price": 1000,
            "category_id": 2,
            "post_date": "2022-08-14T22:00:00.000Z",
            "users_id": 1,
            "theme_id": 4,
            "long_description": "long desc",
            "short_description": "short desc",
            "image": "http://res.cloudinary.com/dpchxrbum/image/upload/v1661439308/project/2022-08-25T14:55:06.190Z.jpg"
        },
        {
            "id": "20",
            "product_name": "new product",
            "amount": 12,
            "price": 1000,
            "category_id": 2,
            "post_date": "2022-07-06T22:00:00.000Z",
            "users_id": 1,
            "theme_id": 5,
            "long_description": "loooooongdesc",
            "short_description": "shrtdsc",
            "image": "http://res.cloudinary.com/dpchxrbum/image/upload/v1661498665/project/2022-08-26T07:24:23.646Z.jpg"
        },
        {
            "id": "21",
            "product_name": "new product another",
            "amount": 12,
            "price": 1000,
            "category_id": 2,
            "post_date": "2022-07-06T22:00:00.000Z",
            "users_id": 1,
            "theme_id": 5,
            "long_description": "loooooongdesc",
            "short_description": "shrtdsc",
            "image": "http://res.cloudinary.com/dpchxrbum/image/upload/v1661500068/project/2022-08-26T07:47:47.588Z.jpg"
        },
        {
            "id": "22",
            "product_name": "new product another",
            "amount": 12,
            "price": 1000,
            "category_id": 2,
            "post_date": "2022-07-06T22:00:00.000Z",
            "users_id": 1,
            "theme_id": 5,
            "long_description": "loooooongdesc",
            "short_description": "shrtdsc",
            "image": "http://res.cloudinary.com/dpchxrbum/image/upload/v1661500883/project/2022-08-26T08:01:21.982Z.jpg"
        },
        {
            "id": "23",
            "product_name": "and another testhihi",
            "amount": 69,
            "price": 1337,
            "category_id": 3,
            "post_date": "2022-01-11T23:00:00.000Z",
            "users_id": 3,
            "theme_id": 3,
            "long_description": "longdesc",
            "short_description": "shortdesccccccc",
            "image": "http://res.cloudinary.com/dpchxrbum/image/upload/v1661517902/project/2022-08-26T12:45:00.726Z.png"
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
    "status": "success",
        "resultData": {
        "product_name": "ole",
            "amount": 1,
            "price": 30000,
            "long_description": "short",
            "short_description": "Long",
            "image": {
            "type": "Buffer",
                "data": [
                47
            ]
        }
    }
}
```

On Error:

```js
{
    "status": "failed, given information is not enough"
}
```

### Get product by name => "/products/byname/${name}"

On Success:

```js
{
    "status": "success",
    "resultData": [
        {
            "product_name": "hey handsome",
            "amount": 10,
            "price": 1000,
            "long_description": "long desc",
            "short_description": "short desc",
            "image": "http://res.cloudinary.com/dpchxrbum/image/upload/v1661439308/project/2022-08-25T14:55:06.190Z.jpg"
        }
    ]
}
```

On Error:

```js
{
    "status": "failed, given information is not enough"
}
```

### Get products by user ID => "/products/byuser/${id}"

On Success:

```js
{
    "status": "success",
        "resultData": [
        {
            "id": 3,
            "product_name": "ole",
            "amount": 1,
            "price": 30000,
            "post_date": "2022-08-22T22:00:00.000Z",
            "long_description": "short",
            "short_description": "Long",
            "image": {
                "type": "Buffer",
                "data": [
                    47
                ]
            }
        },
        {
            "id": 4,
            "product_name": "ola",
            "amount": 1,
            "price": 20000,
            "post_date": "2022-08-23T22:00:00.000Z",
            "long_description": "short",
            "short_description": "long",
            "image": {
                "type": "Buffer",
                "data": [
                    47
                ]
            }
        }
    ]
}
```

On Error:

```js
{
    "status": "failed, given information is not enough",
        "resultData": []
}
```

---

## PUT

### Update a specific product => "/products/${id}"

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
    "statusInfo": {
        "user": {
            "id": "1",
            "firstname": "testFirstName",
            "lastname": "testLastName",
            "email": "test@becode.org",
            "address": "testAddress"
        }
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMSJ9LCJpYXQiOjE2NjEzMzU0NjIsImV4cCI6MTY2MTMzOTA2Mn0.8p6WNJhjYvRZwdggVHOSBWTxpG7czffvWaUaDElJ9UE"
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
