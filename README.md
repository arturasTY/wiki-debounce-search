# React Search using useDebounce Hook

[![](https://skillicons.dev/icons?i=vite,react,css)]()

This React search app is utilising [Wikipedia Api](https://www.mediawiki.org/wiki/API:Main_page) to fetch data for a given search term. To improve performance and user experience of this app and reduce the amount of redundant API calls this app is using a Debounce hook to search and retrieve data. When user types into the search field, the onChange event is triggered and useDebounce hook delays the function call by 1 second without any further input from the user.

![](https://user-images.githubusercontent.com/30295076/226648649-433ffdcc-c999-4b14-acaf-d35c37d04442.jpg)

![](https://user-images.githubusercontent.com/30295076/226879492-edb4034b-5dc0-4cf7-8d0a-ae29a9310339.jpg)

## 🔗 [Live Demo](https://arturasty.github.io/wiki-debounce-search/)

## ✅ Features:
* useDebounce Hook
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