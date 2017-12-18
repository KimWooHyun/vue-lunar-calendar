# Language Contributing  Guide.
How to adding language.<br/>
**Always add your items to the end of a list.** To be fair, the order is first-come-first-serve

## 1. Add to language `/src/lang.js`
```
,‘[country_name_short]’ : {
    'name': ‘[language_name]’,
    'days': [days_name_in_array],
    'solar': ‘[solar_name]’,
    'lunar': ‘[lunar_name]’,
    'leap' : ‘[leap_name]’,
    'solarShort': ‘[solar_name_short]’,
    'lunarShort': ‘[lunar_name_short]’
}
```
* [country_name_short] - **only English**
* [order] - translate

## 2. Run script
```
npm run build
npm run demo
```
if you run script `npm run start`


or using Yarn

```
yarn build
yarn demo
```
if you run script `yarn start`

## 3. Write README `README.md`
Add to language.