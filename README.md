# React Search using useDebounce Hook

[![](https://skillicons.dev/icons?i=vite,react,css)]()

This React search app is utilizing [Wikipedia Api](https://www.mediawiki.org/wiki/API:Main_page) to fetch data for a given search term. To limit the number of function calls the app is using a Debounce hook to search the retrieve data. The call to the api is delayed by 1 second to reduce the number of requests and improve performance.

![](https://user-images.githubusercontent.com/30295076/226648649-433ffdcc-c999-4b14-acaf-d35c37d04442.jpg)

![](https://user-images.githubusercontent.com/30295076/226649612-f496162f-b4fc-4761-8c59-0cd5ebe660f5.jpg)

## 🔗 [Live Demo]()

## ✅ Features:
* Fetch data from the API
* Show view count and indicator
* Conditional Rendering

## ⚙️ How to use this repo:
```shell
    $ cd your-directory
    $ git clone https://github.com/arturasTY/wiki-debounce-search.git
    $ npm install
    $ npm run dev
```