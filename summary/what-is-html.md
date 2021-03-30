# HTML

## 1. Hyper Text Markup Language

**HTML ** is a **markup language** that tells web browsers how to **structure the web pages**. 

A HTML document consists of a serises of **elements**, which has some properties. 

````html
<!DOCTYPE html> 						
<html>
	<head>
		<meta charset="utf-8">
		<title>My Test Website</title>
	</head>
    
<body>
    <h1>Hello World</h1>
    	<p>This is a test website.</p>
    	<a href="https://developer.mozilla.org/en-US/" title="MDN Web Docs" target="_blank">MDN</a>
	</body>
</html>
````

Here’s the [anatomy of an HTML document](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#anatomy_of_an_html_document).

![img](bigpicture-images/element.png)

- **Nesting elements** : put elements inside other elements 

- **Empty elements** : some elements have no content, such as `<img/>` and `<br/>`

- **block elements**：`<p>`、`<ul> `or`<ol>`、`<nav>`、`<footer>`

- **in-line elements**：`<a>`

  

##  2. HTML Elements Used Frequently

### 2.1 HTML Text

- **Headings and paragraphs**

  ```html
  <!-- Use a single <h1> per page. -->
  <h1>Main heading</h1>				
  <h2>Subheading</h2>
  <h3>Sub-subheading</h3>
  
  <p>I am a paragraph.</p>
  ```

  Headings  ( `<h1>` - `<h6>` ) are used for [accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#text_content) and [other reasons such as SEO](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#why_do_we_need_structure).

-  **Lists**

  ```html
  <!-- Unordered Lists -->
  <ul>
    <li>C</li>
    <li>C++</li>
    <li>Objective-C</li>
    <li>Swift</li>
  </ul>
  
  <!-- Ordered Lists -->
  <ol>
    <li>Leran HTML</li>
    <li>Leran CSS</li>
    <li>Leran JavaScript</li>
    <li>Leran Frameworks</li>
  </ol>
  
  <!-- Defination -->
  <dl>	
      <dt>HTML</dt>
      	<dd>a markup language that tells web browsers how to structure the web pages</dd>
      	<dd>consists of a serises of elements</dd>
          		
      <dt>CSS</dt>
      	<dd>a style sheet language which you can use to selectively style HTML elements </dd>
      	<dd>mostly based on the box model</dd>
  
      <dt>JavaScript</dt>
      	<dd>a dynamic programming language that can adds interactivity to your website</dd>
  </dl>
  ```

  It is perfectly ok to nest one list inside another one.

  

-  **Emphasis & Importance**

  ```html
  <!-- Emphasis -->
  <p>I am <em>happy</em> you be here.</p>
  
  <!-- Strong importance -->
  <p>This liquid is <strong>highly toxic</strong>.</p>
  <p>I am counting on you. <strong>Do not</strong> be late!</p>
  ```

  Notes： use `<b>`, `<i>`, and `<u>` for bold, Italic, underline text respectively.

  

### 2.2 Hyperlinks

​		Almost any content can be made into a link, even [block-level elements](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#block_versus_inline_elements).

```html
<!-- Linking to an absolute URL -->
<a href="https://example.com">Website</a>
<a href="mailto:m.bluth@example.com">Email</a>
<a href="mailto:">Share via email</a>
<a href="tel:+123456789">Phone</a>
<a href="2017-annual-report.ppt">2017 Annual Report (PowerPoint)</a>

<!-- Linking to relative URLs -->
<a href="//example.com">Scheme-relative URL</a>
<a href="/en-US/docs/Web/HTML">Origin-relative URL</a>
<a href="./p">Directory-relative URL</a>

<!-- Linking to an element on the same page -->
<p><a href="#Section_further_down">
    Jump to the heading below
</a></p>
<h2 id="Section_further_down">Section further down</h2>
```

- **Attributes**
  - **href**  - **h**ypertext **ref**erence.

  - **title** - contains additional information about the link.

  - **URL & Path**
    - same directory - specify the filename.
    - moving down into subdirectories - go down into the subdirectories before indicating the file you want to link to.
    - moving back up into parent directories - use two dots （`..` ）

  - **Document Fragment** - link to a specific part of an HTML document ( assign an [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-id) attribute )


- **Link Best Practice**
  - Use clear link wording

  - Use relative links wherever possible

  - Linking to non-HTML resources — leave clear signposts

  - Use the `download` attribute when linking to a download

    

### 2.3 Images

```html
<img src="images/firefox-icon.png" loading="lazy" alt="My test image" />
```



## 3. HTML Elements List

- **Doctype**

  **`<!DOCTYPE html>`**

- **Main root **

  `<html>` - top-level element

- **Document metadata**

  - `<base>` - specifies the base URL to use for all *relative* URLs in a document
  - `<head>` - contains machine-readable information (metadata), like its [title](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title), [scripts](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script), and [style sheets](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)
  - `<link>` - specifies relationships between the current document and an external resource (CSS)
  - `<meta>` - if a metadata is not a base, link, script, style or title, use `<meta>`
  - `<style>`  - contains style information
  - `<title>` - defines the document's title that is shown in a Browser's title bar or a page's tab

- **Sectioning root**

  `<body>` - represents the content of an HTML document. (only one `<body>` in a document)

- **Content sectioning**

  `<address>`, `<article>`, `<aside>`, `<footer>`, `<header>`, `<h1> – <h6>`, `<main>`, `<nav>`, `<section>`

- **Text content (Important for [accessibility](https://developer.mozilla.org/en-US/docs/Glossary/Accessibility) and [SEO](https://developer.mozilla.org/en-US/docs/Glossary/SEO))**

  - `<blockquote>`, `<dd>`, `<dt>`,`<dl>`,`<div>`, `<figcaption>`, `<figure>`
  - `<ol>`,`<ul>`, `<li>`,`<p>`, `<pre>`, `<hr>`

- **Inline text semantics**

  - `<a>`, `<abbr>`, `<b>`, `<bdi>`, `<bdo>`, `<br>`, `<cite>`, `<code>`, `<data>`, `<dfn>`, `<i>`, `<kbd>`, 
  - `<mark>`, `<q>`, `<rb>`, `<rp>`, `<rt>`, `<rtc>`, `ruby`,  `<samp>`, `<small>`, `<span>`
  - `<strong>`, `<sub>`, `<sup>`, `<time>`, `<u>`, `<var>`, `<wbr>`

- **Image and multimedia**

  `<area>`, `<audio>`, `<img>`, `<map>`, `<track>`, `<video>`

- **Embedded content**

  `<embed>`, `<iframe>`, `<object>`, `<param>`, `<picture>`,  `<source>`,`<portal>`

- **SVG and MathML**

  - `<svg>` - a container that defines a new coordinate system and viewport
  - `<math>` - top-level element in MathML

- **Scripting**

  - `<script>` - embed executable code ( JavaScript code) or data
  - `<noscript>` - degrade if a script type is unsupported or if scripting is currently turned off
  - `<canvas>` - canvas scripting API or the WebGL API to draw graphics and animations

- **Demarcating edits**

  `<del>`,`<ins>`

- **Table content**

  `<caption>`, `<colgroup>`, `<col>`, `<table>`, `<tbody>`, `<thead>`,  `<td>`,  `<th>`, `<tr>`

- **Forms**

  - `<button>`, `<datalist>`, `<fieldset>`, `<form>`, `<label>`, `<legend>`, `<meter>`

  -  `<optgroup>`,  `<option>`, `<output>`,  `<progress>`, `<select>`, `<textarea>`

- **Interactive elements**

  `<details>`, `<dialog>`, `<menu>`, `<summary>`

- **Web Components**

  `<slot>`, `<template>`

  

**Reference**

[1] <https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics>

[2] <https://developer.mozilla.org/en-US/docs/Web/HTML/Element>

