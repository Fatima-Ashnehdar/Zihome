# Zihome API Documentation

Backend is implemented **inside Next.js** using App Router Route Handlers. Base path: `/api/v1`.

The frontend is **not connected** to these APIs yet — they are ready for integration or external clients.

## Quick links


| Resource     | URL                                      |
| ------------ | ---------------------------------------- |
| Swagger UI   | `http://localhost:3000/docs`             |
| OpenAPI JSON | `http://localhost:3000/api/docs/openapi` |
| Health check | `http://localhost:3000/api/health`       |


## Response format

**Success**

```json
{
  "success": true,
  "data": { },
  "meta": { "page": 1, "limit": 20, "total": 100, "totalPages": 5 }
}
```

`meta` is included only for paginated list endpoints.

**Error**

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": { }
  }
}
```

Common error codes: `VALIDATION_ERROR` (400), `UNAUTHORIZED` (401), `FORBIDDEN` (403), `NOT_FOUND` (404), `BAD_REQUEST` (400), `INTERNAL_ERROR` (500).

## Authentication

JWT access token (15 minutes) + refresh token (7 days).

**Send token via:**

- Header: `Authorization: Bearer <accessToken>`
- Cookie: `accessToken` (HttpOnly, set automatically on login/verify-code)

### Flow

1. `POST /auth/register` — send OTP to phone
2. `POST /auth/verify-code` — verify OTP → tokens + user
3. `POST /auth/change-password` — set password (after OTP or for existing user)
4. `POST /auth/login` — login with phone + password → tokens
5. `POST /auth/refresh` — body `{ "refreshToken": "..." }` → new access token
6. `POST /auth/logout` — clears cookie (auth required)
7. `GET /auth/me` — current user (auth required)

In development, OTP is logged to the server console: `[OTP] phone=... code=...`

### Seed users


| Role  | Phone         | Password    |
| ----- | ------------- | ----------- |
| Admin | `09123456789` | `Admin1234` |
| User  | `09126996755` | `User12345` |


---

## Endpoints

### Health


| Method | Path          | Auth | Description    |
| ------ | ------------- | ---- | -------------- |
| GET    | `/api/health` | No   | Service health |


---

### Auth — `/api/v1/auth`


| Method | Path               | Auth | Body                                         | Description              |
| ------ | ------------------ | ---- | -------------------------------------------- | ------------------------ |
| POST   | `/register`        | No   | `{ "phone": "09123456789" }`                 | Register phone, send OTP |
| POST   | `/verify-code`     | No   | `{ "phone", "code" }`                        | Verify OTP, issue tokens |
| POST   | `/change-password` | No   | `{ "phone", "password", "confirmPassword" }` | Set/update password      |
| POST   | `/login`           | No   | `{ "phone", "password" }`                    | Login with password      |
| POST   | `/refresh`         | No   | `{ "refreshToken" }`                         | Refresh access token     |
| POST   | `/logout`          | Yes  | —                                            | Logout (clears cookie)   |
| GET    | `/me`              | Yes  | —                                            | Current user profile     |


---

### Products — `/api/v1/products`


| Method | Path                      | Auth     | Description                           |
| ------ | ------------------------- | -------- | ------------------------------------- |
| GET    | `/products`               | No       | List products (paginated, filterable) |
| GET    | `/products/:id`           | No       | Product detail                        |
| GET    | `/products/:id/similar`   | No       | Similar products                      |
| POST   | `/products/:id/reviews`   | Optional | Add review                            |
| POST   | `/products/:id/questions` | No       | Ask question                          |


**List query params:** `page`, `limit`, `sort` (`decoration`  `latest`  `best-selling`  `buyers-recommendations`), `categoryId`, `brandId`, `minPrice`, `maxPrice`, `search`, `inStock`, `hasDiscount`, `hasColorOptions`, `hasWarranty`

**Product card shape:**

```json
{
  "id": "clx...",
  "name": "اجاق گاز تکنو",
  "model": "N-llTE ۲۰۳ alRllNKS",
  "score": "۴.۳",
  "photo": "/pictures/products/pic-37.png",
  "currentPrice": 3870000,
  "previousPrice": 5400000,
  "discount": "۳۰٪"
}
```

---

### Categories — `/api/v1/categories`


| Method | Path                       | Auth | Description                      |
| ------ | -------------------------- | ---- | -------------------------------- |
| GET    | `/categories`              | No   | List root categories             |
| GET    | `/categories/:id`          | No   | Category detail                  |
| GET    | `/categories/:id/products` | No   | Products in category (paginated) |


---

### Brands — `/api/v1/brands`


| Method | Path      | Auth | Description     |
| ------ | --------- | ---- | --------------- |
| GET    | `/brands` | No   | List all brands |


---

### Cart — `/api/v1/cart`


| Method | Path              | Auth | Body                                              | Description                |
| ------ | ----------------- | ---- | ------------------------------------------------- | -------------------------- |
| GET    | `/cart`           | Yes  | —                                                 | Cart items + price summary |
| DELETE | `/cart`           | Yes  | —                                                 | Clear cart                 |
| POST   | `/cart/items`     | Yes  | `{ productId, color?, quantity?, hasInsurance? }` | Add/update item            |
| PATCH  | `/cart/items/:id` | Yes  | `{ quantity?, hasInsurance? }`                    | Update item                |
| DELETE | `/cart/items/:id` | Yes  | —                                                 | Remove item                |


---

### Addresses — `/api/v1/addresses`


| Method | Path             | Auth | Body                                                       | Description         |
| ------ | ---------------- | ---- | ---------------------------------------------------------- | ------------------- |
| GET    | `/addresses`     | Yes  | —                                                          | List user addresses |
| POST   | `/addresses`     | Yes  | `{ city, address, postalCode, contactNumber, isDefault? }` | Create address      |
| PUT    | `/addresses/:id` | Yes  | same as create                                             | Update address      |
| DELETE | `/addresses/:id` | Yes  | —                                                          | Delete address      |


---

### Discounts — `/api/v1/discounts`


| Method | Path                  | Auth | Body                 | Description            |
| ------ | --------------------- | ---- | -------------------- | ---------------------- |
| POST   | `/discounts/validate` | Yes  | `{ code, subtotal }` | Validate discount code |


Seed code: `ZIHOME10` (10% off, min 1,000,000)

---

### Orders — `/api/v1/orders`


| Method | Path               | Auth | Body                                                                                       | Description      |
| ------ | ------------------ | ---- | ------------------------------------------------------------------------------------------ | ---------------- |
| GET    | `/orders`          | Yes  | —                                                                                          | List user orders |
| GET    | `/orders/:id`      | Yes  | —                                                                                          | Order detail     |
| POST   | `/orders/checkout` | Yes  | `{ addressId, shippingMethod, paymentMethod, shippingDay?, shippingTime?, discountCode? }` | Checkout cart    |


---

### Shipping — `/api/v1/shipping`


| Method | Path                | Auth | Query   | Description             |
| ------ | ------------------- | ---- | ------- | ----------------------- |
| GET    | `/shipping/options` | No   | —       | Shipping methods        |
| GET    | `/shipping/days`    | No   | —       | Available delivery days |
| GET    | `/shipping/times`   | No   | `dayId` | Time slots for a day    |


---

### Layout — `/api/v1/layout`


| Method | Path             | Auth | Description                  |
| ------ | ---------------- | ---- | ---------------------------- |
| GET    | `/layout/header` | No   | Header banners + link groups |
| GET    | `/layout/footer` | No   | Footer links + features      |


---

### Dashboard (Admin) — `/api/v1/dashboard`


| Method | Path                  | Auth  | Description           |
| ------ | --------------------- | ----- | --------------------- |
| GET    | `/dashboard/stats`    | Admin | Dashboard statistics  |
| GET    | `/dashboard/activity` | Admin | Recent order activity |


---

## Database tables


| Table                              | Purpose                       |
| ---------------------------------- | ----------------------------- |
| `User`                             | Users (phone, password, role) |
| `OtpCode`                          | OTP codes for registration    |
| `RefreshToken`                     | Refresh token storage         |
| `Category`                         | Product categories (tree)     |
| `Brand`                            | Product brands                |
| `Product`                          | Products                      |
| `ProductImage`                     | Product gallery               |
| `ProductSpecification`             | Key/value specs               |
| `ProductSimilar`                   | Similar product relations     |
| `Review`                           | Product reviews               |
| `Question`                         | Product Q&A                   |
| `InsuranceOption`                  | Product insurance             |
| `CartItem`                         | Shopping cart                 |
| `Address`                          | User addresses                |
| `DiscountCode`                     | Promo codes                   |
| `Order` / `OrderItem`              | Orders                        |
| `ShippingDay` / `ShippingTimeSlot` | Delivery scheduling           |
| `LayoutLinkGroup` / `LayoutLink`   | Header/footer nav             |
| `LayoutBanner`                     | Header banners                |
| `LayoutFeature`                    | Footer feature blocks         |


---

## Environment variables

Copy `.env.example` to `.env`:

```env
DATABASE_URL=postgresql://zihome:zihome_secret@localhost:5432/zihome?schema=public
JWT_SECRET=change-me-jwt-access-secret-min-32-chars
JWT_REFRESH_SECRET=change-me-jwt-refresh-secret-min-32-chars
SESSION_SECRET=change-me-session-secret-min-32-chars
OTP_EXPIRY_MINUTES=5
```

---

## Architecture

```
src/
├── app/api/          # Route Handlers (HTTP layer)
├── app/docs/         # Swagger UI page
└── server/
    ├── config/       # Env validation
    ├── db/           # Prisma client
    ├── http/         # withApi, auth middleware
    ├── lib/          # Errors, response, JWT, mappers
    ├── services/     # Business logic
    └── openapi/      # OpenAPI spec
prisma/
├── schema.prisma
├── seed.ts
└── migrations/
```

---

## Open decisions

1. **Payment gateway** — checkout creates `PENDING_PAYMENT` orders; no real payment integration yet.
2. **SMS provider** — OTP is console-logged in dev; production needs SMS integration.
3. **File uploads** — product images use static paths from seed; no upload API yet.
4. **Frontend integration** — deliberately not connected; mock data still used in UI.

