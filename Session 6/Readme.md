## Ways of addding CSS

1. Inline CSS
2. Internal CSS
3. External CSS

### Inline CSS

- Inline CSS is used to apply a unique style to a single HTML element.
- To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.
- Example:
  <p style="color:blue;">This is a blue paragraph.</p>

### Internal CSS

- Internal CSS is used to define a style for a single HTML page.
- To use internal styles, add a <style> element to the <head> section of the HTML page. You can then write your CSS rules inside this <style> element.
Example:
```<head>
    <style>
      p {
        color: red;
      }
    </style>
  </head>
```
