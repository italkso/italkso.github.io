# Objective-C

Objective-C是 C语言的一个扩展集，采用了 SmallTalk的**消息结构**（messaging structure），属于动态运行时语言。

在Objective-C中，对象之间互相传递消息。这种动态绑定的消息结构，在运行时才会检查对象类型。接收一条消息后，究竟应执行什么代码，由运行期环境决定。一个类别不保证一定会回应收到的消息，如果类别收到了一个无法处理的消息，程序只会抛出异常，不会出错或崩溃。

- **对象（object）**：通过**对象**（building block，基本构造单元）存储并传递数据，每一个 Objective-C 对象都占据着某个内存区域。

- **消息传递（Messaging）**：在对象之间传递数据并执行任务的过程。
- **运行期环境（ runtime）**：应用程序开始运行后为其提供相关支持的代码，Runtime提供了一些使得对象之间能够传递消息的重要函数，且包含创建类实例所用的全部逻辑。

在 Objective-C 中，类声明和实现是分开的（接口部分+实现部分），方法调用（消息发送）采用方括号`[ ]`运算符。

属性：简化对成员变量的访问（通过 getter 和 setter 方法访问成员变量比较麻烦）。

#### 动态绑定

使用消息结构的语言，其运行时所执行的代码由运行环境决定，即不论是否多态，总在运行时才去查找所有执行的方法。编译器不关心接收消息的对象是什么类型，接收消息的对象问题也要在运行时处理，其过程叫**动态绑定**（dynamic binding）。Objective-C 天生即具备动态绑定能力，因为运行期才处理消息，允许发送未知消息给对象。

#### 运行期组件

运行期组件（runtime component）是一种与开发者编写的代码相链接的动态库（dynamic library），使用 Objective-C的面向对象特性的全部数据结构及函数都在运行期组件里面。运行期组件能将开发者编写的所有代码粘合起来。



## 2.Objective-C语言引入的基本特性



依次选择File -> New -> New Project，选择 macOS 下的命令行工具（Command Line Tool）后点击 Next 按钮，设置相应的项目选项，保存后会生成如下的代码。

使用#import 让编译器引入头文件

Objective-C使用头文件来包含结构体、符号常量和函数原型等元素的声明。使用`#import`导入头文件 ，可以保证同一个头文件仅被导入一次。导入头文件可以使用尖括号或引号：

- `#import <Foundation/Foundation.h>`：导入系统头文件
- `#import "MyHeaderFile.h”`：导入项目本地的头文件

导入头文件是头文件和源文件之间建立了依赖关系。由于依赖关系会传递，可能可导致重新编译的时间边长，也可能产生循环依赖。因此 Objective-C使用`@class`创建了一个前向引用，告诉编译器某个类的类名。因为编译器有时候只需要知道某个类的类名。

在 Objective-C中，类的源代码分为两部分：

- 接口（ClassA.h文件）：类为对象提供的特性描述，内容包括类的@interface 指令、公共 struct 定义、enum常量、#defines 和 extern 全局变量。

- 实现（ClassA.m文件）：使接口能够正常工作的代码，内容包括@implementation 指令、全局变量的定义、私有 struct 等。

| 文件扩展名 | 说明                                                   | 补充     |
| ---------- | ------------------------------------------------------ | -------- |
| `.h`       | 头文件（类、类型、函数和常数的声明）                   | 类的声明 |
| `.m`       | 源代码文件（Objective-C 代码和 C代码），m 代表 message | 类的实现 |
| `.mm`      | 源代码文件（Objective-C++代码）                        | 类的实现 |

### 框架

框架是一种把头文件、库、图片、声音等内容聚集在一个独立单元中的集合体。每个框架都是一个重要的技术集合，通常包含数十个甚至上百个头文件。通过在主头文件中使用#import，就可以访问框架内的所有功能。

Cocoa 由 Foundation 和 ApplicationKit（AppKit）组成，而 Cocoa Touch  Foundation 和 ApplicationKit（AppKit）组成。另外还有一些支持型框架，如 Core Animation 和 Core Image 等。

Foundation 框架处理的是用户界面之下的那些层（Layer）的特性，如数据结构和通信机制。通过查看 Headers目录，就可以知道 Foundation 框包含了哪些头文件。使用`#import <Foundation/Foundation.h>`来包含主头文件，就能获得整个集合。Xcode 会使用预编译头文件（一种经过压缩的、摘要形式的头文件）来加快读取速度。



### NSLog 函数

相比 C语言的 printf()，NSLog 添加了时间戳、日期戳和自动换行符（`'\n'`）等。

NS 前缀来源于 Cocoa 的前身 NextStep，表明函数来自 Cocoa 工具包，用于避免名称冲突。由于 Cocoa 已经占用了 NS 前缀，所以自定义的任何变量和函数前不能使用 NS 前缀，以免混淆。

### @“字符串”

@符号是 Objective-C 在标准 C 语言基础上添加的特性之一，表明引号内的字符串应该作为 Cocoa的 NSString元素来处理。NSString 就是 Cocoa 中的字符串。见名知义是 Cocoa的多个优秀特性之一。大多数 Cocoa 元素的命名都很直接，名称可以反映它所实现的功能。



### 布尔类型

布尔类型是可以存储真值和假值的变量类型，可以用作变量、函数的参数和返回值等的类型。Objective-C提供的布尔类型（BOOL）具有 YES 和 NO 两个值。Objective-C 中的 BOOL 是一种对带符号的字符类型（signed char）的类型定义（typedef），通过 #define 指令把 YES 定义为 1，把 NO 定义为 0。因此，可以直接与 NO 比较，但不能把 BOOL 值和 YES 值直接进行比较。



```objc
#import <Foundation/Foundation.h>		// Import system header file

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        NSLog(@"Hello World"); 			
    }
    return 0;							
}//helloworld.m
```



## Basics

### Interface

Class Header(.h)

```objective-c
#import "AnyHeaderFile.h"				// Import local headfie of your project
@interface ClassName: SuperClass
    
    // define public properties
    // define public methods

@end
```

### Implementation

```objective-c
//	Class Implementation(.m)
@interface ClassName ()
	//	define private properties
	//	define private methods
@end

#import "YourClassName.h"
@implementation	{
    //	define private instance variables
}
    //	implement methods
@end
```

### Methods

```objective-c
//	Define methods - class methods
+ (type)doSomething;

//	Define dethods - instance methods
- (type)doSomething;
- (type)doSomethingWithA: (type)a;
- (type)dosomethingWithA: (type)a b:(type)b;

//	Implementate methods
- (type)doSomethingWithA: (type)a b:(type)b{
    //	do something with a and b
    return returnValue;
}

//	Calling a method after an Object has Created
ClassName *myObject = [[ClassName alloc] init];

[myObject doSomething];
[myObject doSomethingWithA:a];
[myObject dosomethingWithA:a b:b];
```

### Variables

```objective-c
//	Use int,float,double,BOOL, ClassName * or id to substitute type
type myVariables;
```

| Variable Types   | Description                                                  | Initialize |
| ---------------- | ------------------------------------------------------------ | ---------- |
| `int`            |                                                              | `0`        |
| `float` `double` |                                                              | `0.0`      |
| `BOOL`           | `YES`, `NO`                                                  | `NO`       |
| `ClassName *`    | `NSArray *`, `NSString*`...                                  | `nil`      |
| `id`             | **id** is a pointer to an instance of a class, and hold reference to any object | `nil`      |



### Properties

 Property automatically defines a private variable ( `type _propertyName;`), you can use the private variable directly with `_propertyName`.

 Property also automatically create a getter ( `-(type)propertyName;` ) and setter ( `-(void)setPropertyName: (type) name;`). You can use the getter / setter with `self.propertyName`.

```objective-c
//	Define properties
@property (attribute1, attribute2) type propertyName;

//	Two ways to use properties (dot syntax is recommended)
myObject.propertyName = a;		//	setter
b = myObject.propertyName;		//	getter

[myObject setPropertyName:a];	//set properties by dot syntax
b = [myObject PropertyName];	// get properties by dot syntax
```

| Attributes | Description                        |
| ---------- | ---------------------------------- |
| strong     | add reference to keep object alive |
| weak       | object can diappear, become nil    |
| assign     | normal assign, no reference        |
| copy       | make copy on assign                |
| atomic     | threadsafe                         |
| nonatomic  | non-threadsafe, better performance |
| readwrite  | create getter and setter (default) |
| readonly   | create just getter                 |



### Initializer

```objective-c
- (id)initWithParameter: (type) parameter {
    if ((self = [super init])) {
        _propertyName = parameter;
    }
    return self;
}
```

### Category

```c
typedef struct objc_category *Category;
```



### NSString

```objective-c
NSString *firstString = @"apple";
NSString *secondString = @"banana";
NSString *joinedString = [NSSring stringWithFormat: @"%@, %@ !"];
NSlog("%@", joinedString);

NSString *price = @"24.99";
float anotherString = [anotherString floatValue];
```

### NSArray

```objective-c
NSMutableArray *myArray = [@[firstString, secondString] mutableCopy];
[myAaray addObject:@"grape"];
NSLog(@"%d items!", [myAaray count]);
for (NSString *fruit in myArray) {
    NSLog(@"Fruit: %@", fruit)
}

NSString *grape = myArray[2];
```





## Block



## OOP

OOP is short for **Object-Oriented Programming**. The core concept of OOP is **indirection**. Variables, file name and command line arguments are three example of indirection.

- **class**
  - class、superclass / parentclass、subclass / childclass
- **object**
- **instance**
- **message**
- **method**
- **method selectors **: the name of a method at runtime
- **method dispatcher**
- **interface**
- **implementation**

```c
// Class
typedef struct objc_class *Class;

//	Ivar ( instance variable )
typedef struct objc_ivar *Ivar;

//	Method
typedef struct objc_method *Method;

//	SEL
// You must use the value returned from sel_registerName or the Objective-C 	       
// compiler directive @selector() When using selectors.
typedef struct objc_selector *SEL;
SEL sel_registerName(const char *str);

//	objc_method_description

struct objc_method_description {
    ...
};

//	objc_property_t
typedef struct objc_property *objc_property_t;

//	objc_super
struct objc_super {
    ...
};

//	id
typedef struct objc_object {
    ...
} id;
```

NSObject is the root class of most Objective-C class hierarchies.

### Inheritence

### Composition

### Category

### Protocal



## Memory Management

Objective-C是面向对象的C语言，C 和 C++语句均可出现在Objective-C代码中，可以调用 C 函数，也可通过 C++对象访问方法。

理解 C语言的内存模型（memory model），有助于理解Objective-C的内存模型和引用计数（reference count）机制的工作原理。指针是 C语言的精髓，也是理解内存模型的关键。Objective-C 中的指针是用来指示对象的，即所有对象都是指针的形式。

对栈和堆的内存管理不同。分配在栈上用于保存变量的内存则会在其栈帧弹出时自动清理。而对象所占内存总是分配在堆空间（heap space），分配在堆中的内存必须直接管理。Objective-C运行期环境将堆内存管理抽象成一套名为引用计数的内存管理架构。

### Pointer and Memory Model in C



### Heap Space



### Reference Count



## Framework

- **Cocoa** includes **Foundation** and **AppKit,** **Cocoa Touch** includes Foundation and**UIKit**.

- **CoreGrapgics**

- **CoreImage**

- **CoreAnimation**

  

### Foundation

- NSRange

```objc
//	NSRange
typedef struct _NSRange
{
    unsigned int location;
    unsigned int length;
} NSRange;

//	Create New NSRange
NSRange range = NSMakeRange(42, 5 );
```

- CGPoint, CGSize, CGRect

  ```objc
  struct CGPoint 
  {
      float x;
      float y;
  };//CGPoint
  
  struct CGSize
  {
    float width;
    float height;
  };//CGSize
  
  struct CGRect
  {
      CGPoint origin;
      CGSize size;
  };//CGRect
  ```

- #### NSString

  ```objective-c
  + (id) stringWithFormat: (NSString *) format, ...;
  
  - (NSUInteger) length;
  
  - (BOOL) isEqualToString: (NSString *) aString;
  
  /*Case Insensitive*/
  - (NSComparisonResult) compare: ( NSString *) aString;	
  
  /*
   *options: NSCaseInsensitiveSearch, NSLiteralSearch, NSNumericSearch (using bitwise-   	*OR)
   */
  - (NSComparisonResult) compare: ( NSString *) aString options: (NSStringCompareOptions) mask;	
  
  - (BOOL) hasPrefix: (NSString *) aString;
  - (BOOL) hasSuffix: (NSString *) aString;
  - (NSRange) rangeOfString: (NSString *) aString;
  ```

  ```objective-c
  /*Example*/
  NSString *distance;
  distance = [NSString stringWithFormat:@"Your distance is %d m, %d cm", 2,6];
  
  NSUInteger length = [distance length];
  ```

  #### NSMutableString

  ```objective-c
  // Defenition
  + (id) stringWithCapacity: (NSUInteger) capacity;
  - (void) appendString: (NSString *) aString;
  - (void) appendFormat: (NSString *) foramt, ...;
  - (void) deleteCharactersInRange: (NSRange) aRange;
  
  /*Example*/
  NSMutableString *string = [NSMutableString stringWithCapacity: 64];
  [string appendString:@"Hi,"];
  [string appendFormat:@"nice to meet you,%d", 42];
  
  ```

  

  #### NSArray, NSMutableArray, NSEnumerator and Fast Enumeration

  ```objective-c
  //	Create a new array (the latter is recommended)
  NSArray *array = [NSArray aarayWithObjects:@"a",@"b",@"c",nil];
  NSArray *array = @[@"a",@"b",@"c"]];
  id *myObject = array[2];
  
  //	Methods
  - (NSUInteger)count;
  - (id)objectAtIndex: (NSUInteger)index;
  - componentsSeparatedByString
  - componentsJoinedByString
      
  //	Create a new mutable array using the following class method
  + (id)arrayWithCapacity: (NSUInteger) numItems;
  - (void) addObject: (id) object;
  - (void) removeObjectAtIndex: (NSUInteger) index;
      
  //	Example
  NSString *string = @"apple,pineapple,orange,peal,peach";
  NSArray *chunks = [string componentSeperatedByString:@","];
  string = [chunks componentJoinedByString:@"-"];
  ```

  You can use `index`, `NSEnumerator` , `Fast Enumeration` and `Block` to  traverse a array.

  ```objective-c
  //	NSEnumerator
  - (NSEnumerator *)objectEnumerator;
  - NSEnumerator *firstEnumerator = [array objectEnumerator];
  - NSEnumerator *secondEnumerator = [array reverseObjectEnumerator];
  - (id) nextObject;
  
  //	Fast Enumeration (non-concurrent)
  for (NSString *string in array)
  {
      NSLog(@"The element of array %@", string);
  }
  
  //	Block (concurrent)
  - (void)enumerateObjectsUsingBlock:(void (^)(id obj, NSUInteger idx, BOOL *stop))block;
  [aaray enumerateObjectsUsingBlock:^(NSString *string, NSUInteger index, BOOL *stop){
      NSLog(@"The element of array %@", string);
  }];
  ```

  #### NSDictionary

  ```objective-c
  + (id) dictionaryWithObjectsAndKeys: (id)firstObject, ...);
  - (id) objectForKey: (id) aKey;
  + (id) dictionaryWithCapacity: (NSUInteger) numItems;
  - (void) setObjectForKey:(id)anObject forKey:(id)aKey;
  - (void) removeObjectForKey: (id)aKey;
  ```

  #### NSNumber

  ```objective-c
  // Boxing - Create a new NSNumber object - 1
  + (NSNumber *) numberWithInt: (int) value;
  + (NSNumber *) numberWithFloat: (float) value;
  + (NSNumber *) numberWithBool: (BOOL) value;
  + (NSNumber *) numberWithChar: (char) value;
  
  // Boxing - Create a new NSNumber object Using literal - 2
  NSNumber *number = @23;
  number = @23ul;
  number = @23ll;
  number = @1.2345f;
  number = @1.2345;
  number = @NO;
  number = @"H";
  
  // Unboxing
  - (int) intValue;
  ```

  #### NSValue

  

  #### NSNull

  ```objective-c
  + (NSNull *) null;
  ```

  

  

  ## 2.Data Type

  - **BOOL**

  ```c
  typedef bool BOOL;	//Defines YES as 1, NO as 0
  typedef signed char BOOL;	//	
  
  
  // True on all platforms
  - (bool)value {
      return 256;
  }
  
  if ([self value]) doStuff();
  ```

  `BOOL` is actually `char`, it does not behave in the same way as a C `_Bool` value or a C++ *bool* value.

  - **NSNumber**

  ```c
  //	iOS, macOS, Mac Catalyst, tvOS
  typedef long NSInteger;	
  typedef unsigned long NSUInteger;
  
  //	watchOS
  typedef int NSInteger;	
  typedef unsigned int NSUInteger;
  ```

  

  

### AppKit



### UIKit



保存、检索数据，分解数据，使用 KVC 间接处理数据