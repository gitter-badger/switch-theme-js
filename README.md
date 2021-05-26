# switch-theme-js
> Easily switch themes in your website

## Live demo
See [live demo](https://puneetgopinath.github.io/switch-theme-js/)

Click on "Dark theme" refresh the page, you see the page is default now set to dark theme.

## FAQs
These are the frequently asked questions:

### 1. What happens actually
This is a basic JS code, that stores the theme name in a cookie that stays for 10 days and adds the theme name to the class list of the body.

### 2. How to design a theme?
You need to know CSS for that.

1. Think of a cool theme name
2. To select the body in CSS, use `body.theme_name` where `theme_name` is your theme name
3. To add a button for user to switch the theme, use the html `a` tag e.g. `<a href="javascript:switchTheme('dark', 'white');">Dark theme</a>`
4. Add `onload="getTheme();"` to your `body` tag
5. That's all, test it out in your website, or submit a bug report for us to Analyse it.

### 3. Example html file
The [index.html](index.html) file shows an example.
