## 1.XML 基础

### 1.1 XML 的用途

XML (e**X**tensible **M**arkup **L**anguage）是W3C 的推荐标准，用于传输和存储数据，可存储、可搜索和可共享。使用 XML 你需要自行定义标签，XML具有自我描述性，可以在不中断应用程序的情况下进行扩展，且独立于软件和硬件。

XML 的用途如下：

- **把数据从 HTML 分离**

  将数据能够存储在独立的 XML 文件中，使用HTML/CSS 进行显示和布局。

- **简化数据共享**

  XML 数据以纯文本格式进行存储，提供了一种独立于软件和硬件的数据存储方法。

- **简化数据传输**

  以 XML 在互联网上的不兼容系统之间交换数据。

- **简化平台变更**

  XML 数据以文本格式存储，在不损失数据的情况下，更容易扩展或升级。

- **创建新的互联网语言**

  XHTML、RSS 等。

  

### 1.2 XML 语法及验证

#### XML 树结构

XML 文档中的元素形成了一棵文档树。这棵树从根部开始，并扩展到树的最底端。

#### XML 语法规则

```xml
<!-- XML declaration -->
<?xml version="1.0" encoding="UTF-8"?>

<bookstore>
    <book category="COOKING">
        <title lang="en">Everyday Italian</title>
        <author>Giada De Laurentiis</author>
        <year>2005</year>
        <price>30.00</price>
    </book>
    <book category="CHILDREN">
        <title lang="en">Harry Potter</title>
        <author>J K. Rowling</author>
        <year>2005</year>
        <price>29.99</price>
    </book>
    <book category="WEB">
        <title lang="en">Learning XML</title>
        <author>Erik T. Ray</author>
        <year>2003</year>
        <price>39.95</price>
    </book>
</bookstore>
```

- XML 文档必须有根元素，根元素是所有其他元素的父元素，所有的元素都可以有子元素。
- XML 声明文件的可选部分，如果存在需要放在文档的第一行
- 所有的 XML 元素都必须有一个关闭标签（声明不是 XML 文档本身的一部分，它没有关闭标签）
- XML 标签对大小写敏感
- XML 必须正确嵌套
- XML 属性值必须加引号（单引号和双引号均可）
- XML 文档中的空格不会被删减，会被保留
- XML 以 LF 存储换行
- 实体引用（`&lt;`代表`<`, `&gt;`代表`>`, `&amp;`代表`&`, `&apos;`代表`’`,  `&quot;`代表`"`）

#### XML 验证

- XML DTD：通过 DTD 验证的XML是合法（形式良好）的 XML。

  验证 XML 文档：

  ```xml
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <!DOCTYPE note
  [
  <!ELEMENT note (to,from,heading,body)>
  <!ELEMENT to (#PCDATA)>
  <!ELEMENT from (#PCDATA)>
  <!ELEMENT heading (#PCDATA)>
  <!ELEMENT body (#PCDATA)>
  ]>
  <note>
  	<to>Tove</to>
  	<from>Jani</from>
  	<heading>Reminder</heading>
  	<body>Don't forget me this weekend!</body>
  </note>
  ```

  

- XML Schema

  ```xml
  <xs:element name="note">
  
  <xs:complexType>
  <xs:sequence>
  <xs:element name="to" type="xs:string"/>
  <xs:element name="from" type="xs:string"/>
  <xs:element name="heading" type="xs:string"/>
  <xs:element name="body" type="xs:string"/>
  </xs:sequence>
  </xs:complexType>
  
  </xs:element>
  ```

  

### 1.3 XML 元素

XML 元素指的是从（且包括）开始标签直到（且包括）结束标签的部分。一个元素可以包含：文本、属性或其他元素。

XML 元素的名称应具有自我描述性，简单，避免 `- . :   `等字符。XML 文档经常有一个对应的数据库，其中的字段会对应 XML 文档中的元素，可以使用数据库的命名规则来命名 XML 文档中的元素。

XML的元素命名规则具体如下：

- 可以包含字母、数字以及其他的字符
- 不能以数字或者标点符号开始
- 不能以字母 xml、 XML和Xml 等开始
- 不能包含空格



### 1.4 XML 属性

属性（Attribute）提供有关元素的额外信息。属性值必须被引号包围，不过单引号和双引号均可使用。

属性不能包含多个值，不能包含树结构（元素可以），不易扩展。因此使用元素来描述数据，而仅仅使用属性来提供与数据无关的信息。

最佳实践：元数据（有关数据的数据）应当存储为属性，而数据本身应当存储为元素。



### 1.5 使用 XSLT 显示 XML

在没有任何有关如何显示数据的信息的情况下，大多数的浏览器都会仅仅把 XML 文档显示为源代码。

我们可以使用 CSS 或者 XSLT （W3C 推荐）来格式化 XML 文档。

**XSLT**（eXtensible Stylesheet Language Transformations ）是首选的 XML 样式表语言，它会在浏览器显示 XML 文件之前，先把它转换为 HTML 格式。

```xslt
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>My CD Collection</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Title</th>
      <th style="text-align:left">Artist</th>
    </tr>
    <xsl:for-each select="catalog/cd">
    <tr>
      <td><xsl:value-of select="title"/></td>
      <td><xsl:value-of select="artist"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
```



## XML  JavaScripts

- **所有现代浏览器都有内建的 XML 解析器** 

  XML 解析器把 XML 文档转换为 XML DOM 对象。 

- **现代的浏览器不允许跨域访问**

  网页以及它试图加载的 XML 文件，必须位于相同服务器（安全考虑）。

- **XML DOM**

  定义了访问和操作 XML 文档的标准方法。XML DOM 把 XML 文档作为树结构来查看。访问 XML DOM 对象并取回数据。

  创建、删除元素，获取元素或改变元素的值；创建新的属性，获取属性的值。

  # XML DOM 高级

- **在 HTML 页面中显示 XML 数据**

  

```javascript
//	Create a XMLHttpRequest Object
xmlhttp = new XMLHttpRequest();

//	Parse XML Document
if (window.XMLHttpRequest) {
	xmlhttp = new XMLHttpRequest();
}

xmlhttp.open("GET","books.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 

//	Parse XML String
txt="<bookstore><book>";
txt=txt+"<title>Everyday Italian</title>";
txt=txt+"<author>Giada De Laurentiis</author>";
txt=txt+"<year>2005</year>";
txt=txt+"</book></bookstore>";

if (window.DOMParser) {
	parser = new DOMParser();
	xmlDoc = parser.parseFromString(txt,"text/xml");
}
```



## 3. XML 进阶

- **XML命名空间**

  使用名称前缀避免元素命名冲突。命名空间是在元素的开始标签的 **xmlns 属性**中定义的。

  声明语法：`xmlns:*前缀*="*URI*"`。

- **XML 编码**
  - 始终使用编码属性，并且使用相同的编码
  - 确保编辑器使用什么编码，并且使用支持编码的编辑器
  - 为避免错误，需要规定 XML 编码，或者将 XML 文件存为 Unicode
- **服务器上的 XML**
  - 在服务器上存储 XML 文件
  - 通过 ASP 、PHP生成 XML
  - 从数据库生成 XML
  - 在服务器上通过 XSLT 转换 XML
  - 通过 ASP 把 XML 保存为文件
- **使用 XML 时应该尽量避免使用的技术**
  - Internet Explorer - XML 数据岛、行为

参考资料：[XML教程](https://www.runoob.com/xml/xml-tutorial.html)

