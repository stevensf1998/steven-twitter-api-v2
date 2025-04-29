# Virtual Twitter API v2

Strongly typed, full-featured, light, versatile yet powerful Twitter API v2 client for Node.js.

This is a fork of the original twitter-api-v2 library, modified to support only Virtual Twitter API v2 endpoints.

## Important Note

This is a modified version of the original twitter-api-v2 library that focuses exclusively on Virtual Twitter API v2 support, as v1.1 endpoints are no longer accessible in the current Twitter API structure.

## Highlights

✅ **Ready for Twitter API v2**

✅ **Light: No dependencies, 23kb minified+gzipped**

✅ **Bundled types for request parameters and responses**

✅ **Streaming support**

✅ **Pagination utils**

✅ **User-context authentication with OAuth2**

## How to use

Install it through your favorite package manager:

```bash
yarn add virtual-twitter-api-v2
# or
npm i virtual-twitter-api-v2
```

Here's a quick example of usage:

```ts
import { TwitterApi } from "virtual-twitter-api-v2";

// Instantiate with desired auth type (here's Bearer v2 auth)
const twitterClient = new TwitterApi({
  gameTwitterAccessToken: "<YOUR_APP_USER_TOKEN>",
});

// Tell typescript it's a readonly app
const readOnlyClient = twitterClient.readOnly;

// Play with the built in methods
const user = await readOnlyClient.v2.userByUsername("plhery");
await twitterClient.v2.tweet("Hello, this is a test.");
```

## Why?

Sometimes, you just want to quickly bootstrap an application using the Twitter API.
Even though there are a lot of libraries available on the JavaScript ecosystem, they usually just
provide wrappers around HTTP methods, and some of them are bloated with many dependencies.

`virtual-twitter-api-v2` is meant to provide full endpoint wrapping, from method name to response data,
using descriptive typings for read/write/DMs rights, request parameters and response payload.

A small feature comparison with other libs:

| Package        | API version(s) | Response typings | Pagination | Subdeps | Size (gzip) |                                                                                                                                       Install size |
| -------------- | -------------- | ---------------- | ---------- | ------- | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------: |
| twitter-api-v2 | v2             | ✅               | ✅         | 0       |      ~23 kB | [![twitter-api-v2 install size badge](https://badgen.net/packagephobia/install/twitter-api-v2)](https://packagephobia.com/result?p=twitter-api-v2) |
| twitter-v2     | v2             | ❌               | ❌         | 7       |     ~4.5 kB |             [![twitter-v2 install size badge](https://badgen.net/packagephobia/install/twitter-v2)](https://packagephobia.com/result?p=twitter-v2) |

## Features

Here's everything `virtual-twitter-api-v2` can do:

### Basics:

- Full support for **Twitter API v2**
- Make signed HTTP requests to Twitter with **OAuth2** (including user context OAuth2!) and **Basic** HTTP Authorization
- Helpers for numerous HTTP request methods (`GET`, `POST`, `PUT`, `DELETE` and `PATCH`),
  that handle query string parse & format, automatic body formatting and more
- High-class support for stream endpoints, with easy data consumption and auto-reconnect on stream errors

### Request helpers:

- Automatic paginator for endpoints like user and tweet timelines,
  allowing payload consumption with modern asynchronous iterators until your rate-limit is hit
- Convenient methods for authentication - generate auth links and ask for tokens to your users
- Dedicated methods that wrap API v2 endpoints, with **typed arguments** and fully **typed responses**
- Typed errors, meaningful error messages, and error enumerations

### Type-safe first:

- **Typings for tweet, user, media entities (and more) are bundled!**
- Type-safe wrapping of dedicated methods in 3 right level: _DM_/_Read-write_/_Read-only_ (just like Twitter API do!) -
  you can declare a read-only client - you will only see the methods associated with read-only endpoints

And last but not least, fully powered by native `Promise`s.
