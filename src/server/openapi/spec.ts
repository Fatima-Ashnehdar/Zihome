export const openApiDocument = {
  openapi: "3.0.3",
  info: {
    title: "Zihome API",
    description: "REST API for Zihome e-commerce platform (Next.js App Router)",
    version: "1.0.0",
  },
  servers: [{ url: "/api/v1", description: "Current host" }],
  components: {
    securitySchemes: {
      bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      cookieAuth: { type: "apiKey", in: "cookie", name: "accessToken" },
    },
    schemas: {
      ApiSuccess: {
        type: "object",
        properties: {
          success: { type: "boolean", example: true },
          data: { type: "object" },
          meta: {
            type: "object",
            properties: {
              page: { type: "integer" },
              limit: { type: "integer" },
              total: { type: "integer" },
              totalPages: { type: "integer" },
            },
          },
        },
      },
      ApiError: {
        type: "object",
        properties: {
          success: { type: "boolean", example: false },
          error: {
            type: "object",
            properties: {
              code: { type: "string" },
              message: { type: "string" },
              details: { type: "object" },
            },
          },
        },
      },
      ProductCard: {
        type: "object",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
          score: { type: "string", example: "۴.۳" },
          photo: { type: "string", example: "/pictures/products/pic-37.png" },
          currentPrice: { type: "integer" },
          previousPrice: { type: "integer" },
          model: { type: "string" },
          discount: { type: "string", example: "۳۰٪" },
        },
      },
    },
  },
  paths: {
    "/auth/register": {
      post: {
        tags: ["Auth"],
        summary: "Register phone and send OTP",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { type: "object", required: ["phone"], properties: { phone: { type: "string", example: "09123456789" } } },
            },
          },
        },
        responses: {
          "200": { description: "OTP sent", content: { "application/json": { schema: { $ref: "#/components/schemas/ApiSuccess" } } } },
          "400": { description: "Validation error", content: { "application/json": { schema: { $ref: "#/components/schemas/ApiError" } } } },
        },
      },
    },
    "/auth/verify-code": {
      post: {
        tags: ["Auth"],
        summary: "Verify OTP code",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["phone", "code"],
                properties: { phone: { type: "string" }, code: { type: "string", example: "123456" } },
              },
            },
          },
        },
        responses: { "200": { description: "Tokens issued" } },
      },
    },
    "/auth/login": {
      post: {
        tags: ["Auth"],
        summary: "Login with phone and password",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["phone", "password"],
                properties: { phone: { type: "string" }, password: { type: "string", example: "Admin1234" } },
              },
            },
          },
        },
        responses: { "200": { description: "Authenticated" }, "401": { description: "Invalid credentials" } },
      },
    },
    "/auth/me": {
      get: {
        tags: ["Auth"],
        summary: "Get current user",
        security: [{ bearerAuth: [] }, { cookieAuth: [] }],
        responses: { "200": { description: "User profile" }, "401": { description: "Unauthorized" } },
      },
    },
    "/products": {
      get: {
        tags: ["Products"],
        summary: "List products",
        parameters: [
          { name: "page", in: "query", schema: { type: "integer" } },
          { name: "limit", in: "query", schema: { type: "integer" } },
          { name: "sort", in: "query", schema: { type: "string", enum: ["decoration", "latest", "best-selling", "buyers-recommendations"] } },
          { name: "categoryId", in: "query", schema: { type: "string" } },
          { name: "brandId", in: "query", schema: { type: "string" } },
          { name: "minPrice", in: "query", schema: { type: "integer" } },
          { name: "maxPrice", in: "query", schema: { type: "integer" } },
          { name: "search", in: "query", schema: { type: "string" } },
          { name: "inStock", in: "query", schema: { type: "string", enum: ["true"] } },
          { name: "hasDiscount", in: "query", schema: { type: "string", enum: ["true"] } },
        ],
        responses: { "200": { description: "Paginated product list" } },
      },
    },
    "/products/{id}": {
      get: {
        tags: ["Products"],
        summary: "Product detail",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: { "200": { description: "Product detail" }, "404": { description: "Not found" } },
      },
    },
    "/categories": {
      get: { tags: ["Categories"], summary: "List categories", responses: { "200": { description: "Category list" } } },
    },
    "/cart": {
      get: {
        tags: ["Cart"],
        summary: "Get cart",
        security: [{ bearerAuth: [] }],
        responses: { "200": { description: "Cart with summary" }, "401": { description: "Unauthorized" } },
      },
    },
    "/orders/checkout": {
      post: {
        tags: ["Orders"],
        summary: "Checkout cart",
        security: [{ bearerAuth: [] }],
        responses: { "201": { description: "Order created" } },
      },
    },
    "/dashboard/stats": {
      get: {
        tags: ["Dashboard"],
        summary: "Admin dashboard stats",
        security: [{ bearerAuth: [] }],
        responses: { "200": { description: "Stats" }, "403": { description: "Forbidden" } },
      },
    },
  },
};
