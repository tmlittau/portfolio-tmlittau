import{w as me,b as ge}from"./paths.a334c485.js";const de="@riadh-adrani-theme",fe=e=>{localStorage.setItem(de,JSON.stringify(e))},ce=me(!1),ie=e=>ce.update(f=>{var h;const b=typeof e=="boolean"?e:!f;return fe(b),(h=document.querySelector(":root"))==null||h.setAttribute("data-theme",b?"dark":"light"),b}),We=()=>{const e=localStorage.getItem(de);e?ie(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?ie(!0):ie(!1)},oe=e=>`${ge}/logos/${e}`,o=(e,f)=>f?{dark:oe(f),light:oe(e)}:oe(e),y={AWS:o("aws.svg"),Bootstrap:o("bootstrap.svg"),C:o("c.svg"),Cpp:o("cpp.svg"),Celery:o("celery.svg"),Django:o("django.svg"),FastApi:o("fastapi"),Flask:o("flask.svg"),Go:o("go.svg"),Kafka:o("kafka.svg"),Neo4j:o("neo4j.svg"),Nginx:o("nginx.svg"),Numpy:o("numpy.svg"),Pandas:o("pandas.svg"),RabbitMQ:o("rabbitmq.svg"),Rust:o("rust.svg","rust-dark.png"),Scrapy:o("scrapy.png"),Selenium:o("selenium.svg"),Docker:o("docker.svg"),Kubernetes:o("kubernetees.svg"),Csharp:o("csharp.svg"),Xamarin:o("xamarin.svg"),TypeScript:o("ts.png"),VueJs:o("vue.png"),ReactJs:o("react.svg"),Dart:o("dart.png"),Kotlin:o("kotlin.png"),Python:o("python.png"),NodeJs:o("node.png"),Deno:o("deno.png","deno-dark.png"),Svelte:o("svelte.png"),ExpressJs:o("express.png"),JavaScript:o("js.png"),Fastify:o("fastify.svg","fastify-dark.png"),NestJs:o("nest.svg"),Quasar:o("quasar.svg"),SolidJs:o("solid.svg"),Electron:o("electron.png"),Flutter:o("flutter.svg"),Java:o("java.png"),AdonisJs:o("adonis.png"),Android:o("android.png"),Angular:o("angular.png"),PostgreSQL:o("postgres.png"),Firebase:o("firebase.png"),Sass:o("sass.png"),Unknown:o("no-img.svg"),MongoDB:o("mongodb.svg"),Redis:o("redis.svg"),Tailwind:o("tailwind.svg"),HTML:o("html.svg"),Premiere:o("premiere.svg"),Photoshop:o("photoshop.svg"),CSS:o("css.svg"),AfterEffects:o("after-effects.svg"),Illustrator:o("illustrator.svg"),Nuxt:o("nuxt.png"),Vite:o("vite.png"),Vitest:o("vitest.svg"),Jest:o("jest.png"),Unocss:o("unocss.svg"),Ruvy:o("ruvy.svg"),Postcss:o("postcss.svg")};let ue;ce.subscribe(e=>ue=e);const Ge=e=>typeof e=="string"?e:ue?e.dark:e.light,ye=[{degree:"Bachelor degree of Computer Science",description:"",location:"Tunisia",logo:y.Unknown,name:"",organization:"ISTIC",period:{from:new Date(2020,0,1),to:new Date(2022,5,1)},shortDescription:"",slug:"dummy-education-item",subjects:["C","Algorithm","Algebra","Python","C++","Java","English"]},{degree:"PhD of Computer Science",description:"",location:"USA",logo:y.Unknown,name:"",organization:"MIT",period:{from:new Date(2023,0,1)},shortDescription:"",slug:"dummy-education-item-2",subjects:["Assembly","Rust","Computer Architecture","Algorithms and Data structures"]}],ve=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`,be=`# Angular Web Framework

## Introduction
Angular is a popular web framework developed and maintained by Google. It is used for building dynamic and scalable web applications. In this guide, we will explore the key features and concepts of Angular.

## History
Angular was first released by Google in 2010 as AngularJS. It quickly gained popularity among developers due to its powerful features and ease of use. However, as web development evolved, AngularJS faced some limitations, leading to the development of Angular.

In 2016, Google released Angular 2, a complete rewrite of AngularJS. Angular 2 introduced a component-based architecture and improved performance. Since then, Angular has continued to evolve with regular updates and releases.

## Key Features
- TypeScript: Angular is built using TypeScript, a statically typed superset of JavaScript. TypeScript provides better tooling, type checking, and code organization.
- Component-based architecture: Angular follows a component-based architecture, where the application is divided into reusable and independent components.
- Dependency Injection: Angular provides a powerful dependency injection system, making it easier to manage dependencies and write testable code.
- Reactive programming: Angular leverages reactive programming with RxJS to handle asynchronous operations and manage data streams.
- Angular CLI: Angular CLI is a command-line interface that provides a set of tools for creating, building, and testing Angular applications.

## Conclusion
Angular is a mature and powerful web framework that offers a wide range of features and tools for building modern web applications. Its component-based architecture, dependency injection, and reactive programming capabilities make it a popular choice among developers. With regular updates and a strong community support, Angular continues to evolve and stay relevant in the ever-changing web development landscape.
`,we=`# C Programming Language

C is a general-purpose programming language that was developed in the early 1970s by Dennis Ritchie at Bell Labs. It is a high-level language known for its efficiency, portability, and low-level programming capabilities.

## Domains of Usage

C has influenced many other programming languages and is widely used in various domains, including:
- System programming
- Embedded systems
- Application development

## Origins and Standards

C was initially created to develop the Unix operating system, which played a significant role in its popularity. Over the years, C has evolved and standardized through various versions, with the most widely used being the ANSI C standard (C89/C90) and the ISO C standard (C99/C11).

## Features and Capabilities

C provides a rich set of features, including:
- Low-level memory manipulation
- Structured programming constructs
- A large standard library

It allows direct access to memory addresses, making it suitable for system-level programming. C also supports procedural programming paradigms, making it easy to organize code into reusable functions.

## Relevance and Popularity

Despite being a relatively old language, C remains relevant and widely used today. Its simplicity, efficiency, and close-to-the-hardware nature make it a popular choice for developing performance-critical applications and operating systems.

## Example

\`\`\`c
#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}
\`\`\`
`,Se=`# C++ Programming Language

## Introduction
C++ is a general-purpose programming language that was developed as an extension of the C programming language. It was designed to provide a higher level of abstraction and support for object-oriented programming.

## History
C++ was created by Bjarne Stroustrup in the early 1980s at Bell Labs. Stroustrup wanted to add features to the C language that would make it more suitable for large-scale software development. He introduced the concept of classes, which allowed for the implementation of object-oriented programming principles.

## Features
C++ combines the low-level capabilities of C with high-level abstractions, making it a powerful and versatile language. Some of its key features include:
- Object-oriented programming support
- Strong type checking
- Template metaprogramming
- Exception handling
- Standard Template Library (STL)
- Operator overloading
- Multiple inheritance

## Code Example
\`\`\`cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
\`\`\`

`,ke=`# Golang

## Introduction

Golang, also known as Go, is an open-source programming language developed by Google. It was designed to be efficient, reliable, and easy to use. Go combines the performance of a compiled language with the simplicity and readability of a dynamic language.

## History

Go was created by Robert Griesemer, Rob Pike, and Ken Thompson at Google in 2007. The initial development of Go started as an experiment to address the challenges faced by large-scale software development at Google. The team aimed to create a language that would be fast, productive, and scalable.

Go was officially announced to the public in November 2009, and the first stable version, Go 1, was released in March 2012. Since then, Go has gained popularity among developers for its simplicity, strong support for concurrency, and efficient execution.

## Key Features

Go offers several key features that make it a popular choice for building software:

### Simplicity

Go has a simple and minimalistic syntax, making it easy to read and write. It avoids unnecessary complexity and provides a clean and straightforward approach to programming.

### Concurrency

Go has built-in support for concurrency through goroutines and channels. Goroutines are lightweight threads that allow concurrent execution, while channels enable safe communication and synchronization between goroutines.

### Performance

Go is a compiled language that produces highly optimized machine code. It offers fast execution times and efficient memory management, making it suitable for building high-performance applications.

### Standard Library

Go comes with a rich standard library that provides a wide range of functionality, including networking, file I/O, encryption, and more. The standard library is well-documented and follows consistent design principles.

## Conclusion

Go is a powerful programming language that combines simplicity, performance, and concurrency. Its popularity continues to grow, and it is widely used in various domains, including web development, system programming, and cloud computing.

## Code Example

\`\`\`go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
\`\`\`
`,Me=`# JavaScript

## Introduction

JavaScript is a high-level, interpreted programming language that is primarily used for adding interactivity to web pages. It was created by Brendan Eich in 1995 and has since become one of the most popular programming languages in the world.

## History

JavaScript was originally developed by Brendan Eich at Netscape Communications Corporation. It was initially named "Mocha" and later renamed to "LiveScript" before finally settling on "JavaScript" to capitalize on the popularity of Java at the time.

In 1996, Netscape submitted JavaScript to the European Computer Manufacturers Association (ECMA) for standardization. This led to the creation of the ECMAScript standard, which is the official specification for the language. ECMAScript is often used interchangeably with JavaScript, although JavaScript is just one implementation of the ECMAScript standard.

Over the years, JavaScript has evolved significantly. The release of ECMAScript 6 (ES6) in 2015 introduced many new features and improvements to the language, making it more powerful and expressive. Since then, new versions of ECMAScript have been released regularly, with each version bringing new features and enhancements.

## Features

JavaScript is a versatile language with a wide range of features, including:

- Dynamic typing: JavaScript is dynamically typed, meaning that variables can hold values of any type and their types can change at runtime.
- Object-oriented programming: JavaScript supports object-oriented programming paradigms, allowing developers to create and manipulate objects.
- Functional programming: JavaScript also supports functional programming concepts, such as higher-order functions and closures.
- Asynchronous programming: JavaScript has built-in support for asynchronous programming using promises and async/await, making it well-suited for handling asynchronous tasks.

## Conclusion

JavaScript has come a long way since its inception and has become an essential language for web development. Its versatility, wide adoption, and continuous evolution make it a powerful tool for building interactive and dynamic web applications.

## Code Example

\`\`\`js
// Example code for sending JSON via POST request

const data = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com"
};

fetch("https://api.example.com/post", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(result => {
        console.log("Response:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });
\`\`\`
`,Ce=`# TypeScript

## Introduction

TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. It was developed by Microsoft and first released in October 2012. TypeScript adds optional static typing, classes, interfaces, and other features to JavaScript, making it a powerful tool for building large-scale applications.

## History

TypeScript was created by Anders Hejlsberg, the lead architect of C# and creator of Delphi and Turbo Pascal. Hejlsberg and his team at Microsoft developed TypeScript to address the challenges of building complex JavaScript applications. By adding static typing and advanced language features, TypeScript aimed to improve developer productivity, code maintainability, and tooling support.

## Key Features

- **Static Typing**: TypeScript introduces static typing, allowing developers to define types for variables, function parameters, and return values. This helps catch type-related errors during development and provides better tooling support.

- **Classes and Interfaces**: TypeScript supports object-oriented programming concepts like classes, interfaces, inheritance, and access modifiers. This enables developers to write more structured and maintainable code.

- **Type Inference**: TypeScript has a powerful type inference system that can automatically infer types based on the context. This reduces the need for explicit type annotations and makes the code more concise.

- **Advanced Tooling**: TypeScript provides rich tooling support, including code editors with intelligent autocompletion, refactoring, and error checking. It integrates well with popular IDEs like Visual Studio Code, enhancing the developer experience.

## Differences from JavaScript

While TypeScript is a superset of JavaScript, it introduces some key differences:

- **Static Typing**: TypeScript allows developers to define types, whereas JavaScript is dynamically typed. This helps catch type-related errors early and provides better code documentation.

- **Strict Null Checking**: TypeScript introduces strict null checking, which helps prevent null and undefined errors. In JavaScript, these values are often used unintentionally, leading to runtime errors.

- **ES6+ Support**: TypeScript supports the latest ECMAScript features, including arrow functions, classes, modules, and more. It can compile down to older JavaScript versions for compatibility.

- **Optional Static Typing**: TypeScript allows developers to gradually introduce static typing to existing JavaScript codebases. This means you can start using TypeScript in a JavaScript project without having to rewrite everything at once.

## Code Example

\`\`\`ts
// Import the necessary modules
import axios from 'axios';

// Define the JSON data
const jsonData = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com'
};

// Send the POST request
axios.post('/api/endpoint', jsonData)
    .then(response => {
        console.log('Request successful:', response.data);
    })
    .catch(error => {
        console.error('Request failed:', error);
    });
\`\`\``,De=`# Python

## Introduction
Python is a high-level, interpreted programming language known for its simplicity and readability. It was created by Guido van Rossum and first released in 1991. Python emphasizes code readability and has a design philosophy that emphasizes code readability, making it a popular choice for beginners and experienced developers alike.

## History
Python was conceived in the late 1980s by Guido van Rossum, a Dutch programmer. Guido wanted to create a language that was easy to learn and use, while still being powerful and expressive. He named it after the British comedy group Monty Python, as he was a fan of their work.

The first version of Python, Python 0.9.0, was released in February 1991. It was designed to be an easy-to-use scripting language, with a syntax that emphasized readability. Over the years, Python has evolved and gained popularity, becoming one of the most widely used programming languages in the world.

## Features
Python offers a wide range of features that make it a versatile and powerful programming language:

- **Simple and Readable Syntax:** Python's syntax is designed to be easy to read and understand, making it a great choice for beginners and experienced developers alike.
- **Dynamic Typing:** Python uses dynamic typing, which means that you don't need to declare the type of a variable before using it. This allows for more flexibility and faster development.
- **Large Standard Library:** Python comes with a large standard library that provides a wide range of modules and functions for various tasks, such as file handling, networking, and web development.
- **Cross-platform Compatibility:** Python is available on multiple platforms, including Windows, macOS, and Linux, making it a versatile choice for developing applications that can run on different operating systems.
- **Extensive Third-party Libraries:** Python has a vibrant ecosystem of third-party libraries and frameworks, such as NumPy, Pandas, and Django, which provide additional functionality and make it easier to develop complex applications.

## Conclusion
Python's simplicity, readability, and versatility have contributed to its widespread adoption and popularity among developers. Whether you're a beginner or an experienced programmer, Python offers a powerful and flexible platform for building a wide range of applications.

## Code Example

\`\`\`python
phrase = 'hello, world'

word_list = [word for word in phrase.split(', ')]

for word in word_list:
    print(word)
\`\`\`
`,Le=`# SQL (Structured Query Language)

SQL is a programming language used for managing and manipulating relational databases. It provides a standardized way to interact with databases, allowing users to store, retrieve, update, and delete data.

## History of SQL

SQL was first developed in the early 1970s by Donald D. Chamberlin and Raymond F. Boyce at IBM. It was initially called SEQUEL (Structured English Query Language) and was designed to manipulate and retrieve data from IBM's System R database management system.

In the late 1970s, the name was changed to SQL to avoid trademark conflicts. SQL gained popularity and became an ANSI (American National Standards Institute) standard in 1986. Since then, it has been widely adopted by database vendors and is now the de facto standard for relational databases.

## Key Features of SQL

SQL offers several key features that make it a powerful language for working with databases:

### 1. Data Definition Language (DDL)

DDL statements in SQL are used to define and manage the structure of databases. These statements allow users to create, modify, and delete database objects such as tables, indexes, and views.

### 2. Data Manipulation Language (DML)

DML statements in SQL are used to manipulate data within the database. Users can insert, update, and delete records in tables using DML statements.

### 3. Data Query Language (DQL)

DQL statements in SQL are used to retrieve data from the database. The SELECT statement is the most commonly used DQL statement, allowing users to query and retrieve specific data based on specified criteria.

### 4. Data Control Language (DCL)

DCL statements in SQL are used to control access to the database. These statements allow users to grant or revoke permissions on database objects, ensuring data security and integrity.

## Conclusion

SQL has revolutionized the way we interact with databases, providing a powerful and standardized language for managing and manipulating data. Its rich set of features and wide adoption make it an essential skill for anyone working with relational databases.
`,Te=`# PostgreSQL

## Introduction

PostgreSQL is a powerful open-source relational database management system (RDBMS) known for its robustness, scalability, and extensibility. It offers a wide range of features and is widely used in various applications, from small-scale projects to large enterprise systems.

## History

PostgreSQL, originally named POSTGRES, was developed at the University of California, Berkeley in the 1980s. It was created as a research project led by Professor Michael Stonebraker and his team. The goal was to build a database system that addressed the limitations of existing systems at the time.

In 1996, the project was renamed PostgreSQL to reflect its support for SQL (Structured Query Language). Since then, it has continued to evolve and gain popularity due to its adherence to SQL standards, advanced features, and active community support.

## Key Features

- **ACID Compliance**: PostgreSQL ensures Atomicity, Consistency, Isolation, and Durability, making it suitable for critical applications that require data integrity.

- **Extensibility**: It provides a flexible architecture that allows users to define custom data types, operators, and functions, enabling the development of specialized solutions.

- **Advanced Data Types**: PostgreSQL supports a wide range of data types, including arrays, JSON, XML, and geometric types, allowing for efficient storage and retrieval of complex data.

- **Concurrency Control**: It offers various mechanisms for managing concurrent access to the database, such as multi-version concurrency control (MVCC), which ensures high performance and data consistency.

- **Full Text Search**: PostgreSQL includes powerful full-text search capabilities, enabling efficient searching and indexing of textual data.

## Community and Ecosystem

PostgreSQL has a vibrant and active community of developers, users, and contributors. The community provides extensive documentation, tutorials, and forums for support. Additionally, there is a rich ecosystem of extensions, tools, and frameworks built around PostgreSQL, further enhancing its capabilities.

## Conclusion

PostgreSQL has emerged as a leading open-source RDBMS, offering a feature-rich and reliable solution for managing data. Its history of continuous development, adherence to standards, and strong community support make it a popular choice for a wide range of applications.
`,xe=`# Django Python Library

## Introduction
Django is a high-level Python web framework that enables rapid development of secure and scalable web applications. It follows the Model-View-Controller (MVC) architectural pattern and emphasizes the principle of "Don't Repeat Yourself" (DRY).

## History
Django was created by Adrian Holovaty and Simon Willison while working at the Lawrence Journal-World newspaper in 2003. It was initially developed to meet the newspaper's fast-paced deadlines and to simplify the process of building web applications. Django was released as an open-source project in July 2005 and has since gained widespread popularity in the Python community.

## Features
Django offers a wide range of features that make web development efficient and enjoyable. Some of its key features include:

### Object-Relational Mapping (ORM)
Django provides a powerful ORM that allows developers to interact with the database using Python objects. This abstraction layer simplifies database operations and eliminates the need to write raw SQL queries.

### URL Routing
Django's URL routing system allows developers to map URLs to specific views or functions. This makes it easy to create clean and user-friendly URLs for different pages of a web application.

### Template Engine
Django's template engine provides a convenient way to separate the presentation logic from the business logic. It allows developers to define reusable templates and dynamically render them with data.

### Authentication and Authorization
Django provides built-in authentication and authorization mechanisms, making it easy to handle user authentication, permissions, and access control.

### Admin Interface
Django's admin interface is a powerful tool that automatically generates a user-friendly interface for managing database records. It allows developers to quickly create, update, and delete records without writing custom code.

## Conclusion
Django has become one of the most popular web frameworks for Python due to its simplicity, scalability, and extensive feature set. It has been widely adopted by developers and organizations worldwide for building robust and secure web applications.
`,$e=`# PyTorch

## Introduction
PyTorch is an open-source machine learning library developed by Facebook's AI Research lab. It provides a flexible and efficient framework for building and training deep learning models.

## History
PyTorch was first released in October 2016 by Facebook. It was developed as a successor to Torch, a popular machine learning library in the Lua programming language. PyTorch was designed to address some of the limitations of Torch and provide a more Pythonic interface for deep learning.

## Features
- Dynamic computational graph: PyTorch uses a dynamic computational graph, which allows for more flexibility and easier debugging compared to static graph frameworks.
- GPU acceleration: PyTorch provides seamless integration with GPUs, enabling faster training and inference on large-scale datasets.
- Extensive ecosystem: PyTorch has a rich ecosystem of libraries and tools that support various tasks in machine learning, such as computer vision, natural language processing, and reinforcement learning.
- Easy debugging: PyTorch's dynamic nature makes it easier to debug and understand the behavior of the model during training.
- Pythonic interface: PyTorch provides a Pythonic interface that makes it easy to write and understand deep learning code.

## Getting Started
To get started with PyTorch, you can follow the official documentation and tutorials available on the PyTorch website. The documentation provides detailed explanations of the library's features and guides on how to use them effectively.

## Conclusion
PyTorch has gained popularity among researchers and practitioners due to its flexibility, ease of use, and extensive community support. It continues to evolve and improve, making it a powerful tool for building and training deep learning models.

## Code Example
Simple Example of a Multilayer Perceptron built in PyTorch.

\`\`\`python
import torch
import torch.nn as nn

# Define the MLP model
class MLP(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(MLP, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_size, output_size)

    def forward(self, x):
        x = self.fc1(x)
        x = self.relu(x)
        x = self.fc2(x)
        return x

# Create an instance of the MLP model
input_size = 10
hidden_size = 20
output_size = 2
model = MLP(input_size, hidden_size, output_size)

# Define the input data
input_data = torch.randn(1, input_size)

# Forward pass through the model
output = model(input_data)

# Print the output
print(output)
\`\`\``,He=`# Pandas Python Library

## Introduction
Pandas is a powerful open-source data manipulation and analysis library for Python. It provides data structures and functions to efficiently manipulate structured data, such as tabular data, time series, and more.

## History
Pandas was created by Wes McKinney while working at AQR Capital Management in 2008. McKinney developed the library to address the limitations of existing data analysis tools in Python. He wanted to create a tool that could handle large datasets and provide a flexible and intuitive way to work with data.

## Key Features
Pandas offers a wide range of features that make it a popular choice for data analysis tasks:

### Data Structures
Pandas provides two primary data structures: Series and DataFrame. A Series is a one-dimensional labeled array, while a DataFrame is a two-dimensional labeled data structure, similar to a table in a relational database.

### Data Manipulation
Pandas offers a rich set of functions for manipulating and transforming data. It provides methods for filtering, sorting, aggregating, merging, and reshaping data, making it easy to perform complex data operations.

### Missing Data Handling
Pandas provides robust tools for handling missing data. It allows you to easily identify, filter, and fill missing values in your datasets, ensuring that your analysis is not affected by incomplete or inconsistent data.

### Time Series Analysis
Pandas has extensive support for working with time series data. It provides functions for resampling, shifting, and rolling window calculations, making it easy to analyze and visualize time-based data.

### Integration with Other Libraries
Pandas seamlessly integrates with other popular Python libraries, such as NumPy, Matplotlib, and scikit-learn. This allows you to leverage the power of these libraries in conjunction with Pandas for advanced data analysis and visualization tasks.

## Conclusion
Pandas has become the go-to library for data manipulation and analysis in Python. Its intuitive syntax, powerful features, and extensive documentation make it a valuable tool for both beginners and experienced data scientists.
`,Pe=`# NumPy

## Introduction
NumPy is a powerful Python library for numerical computing. It provides support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays efficiently. NumPy is widely used in scientific computing, data analysis, and machine learning.

## History
NumPy was first created by Travis Olliphant in 2005 as an open-source project. It was initially inspired by the desire to have a more efficient way to perform numerical computations in Python. NumPy was designed to overcome the limitations of the built-in Python data structures and provide a high-performance alternative for numerical operations.

## Features
- Multi-dimensional array objects: NumPy provides a powerful \`ndarray\` object that allows efficient storage and manipulation of large arrays.
- Mathematical functions: NumPy includes a comprehensive collection of mathematical functions, such as trigonometric functions, exponential functions, and linear algebra operations.
- Broadcasting: NumPy supports broadcasting, which allows operations between arrays of different shapes and sizes.
- Integration with other libraries: NumPy seamlessly integrates with other popular Python libraries, such as SciPy, Pandas, and Matplotlib, making it a fundamental building block for scientific computing.
`,ze=`# Celery Python Library

Celery is a distributed task queue library for Python that allows you to run tasks asynchronously across multiple workers or machines. It is commonly used for handling background tasks, such as sending emails, processing data, or performing long-running computations.
`,Ie=`# CSS (Cascading Style Sheets)

## Introduction
CSS (Cascading Style Sheets) is a styling language used to describe the presentation of a document written in HTML (Hypertext Markup Language). It provides a way to control the appearance of web pages, including layout, colors, fonts, and other visual aspects.

## History
CSS was first proposed by Håkon Wium Lie in 1994, while he was working at CERN (European Organization for Nuclear Research). It was developed as a solution to the limitations of HTML in terms of styling and layout. The first CSS specification, CSS1, was released in 1996, followed by CSS2 in 1998 and CSS3 in 1999. Since then, CSS has undergone several updates and enhancements, with CSS3 being the latest major version.

## How CSS Works
CSS works by applying styles to HTML elements. It uses selectors to target specific elements and declarations to define the styles to be applied. Selectors can be based on element names, classes, IDs, attributes, and more. Declarations consist of a property and a value, specifying how the selected elements should be styled.

## CSS Syntax

\`\`\`css
/* Selects all paragraphs and sets the font color to red */
p {
    color: red;
}

/* Selects all headings with class "title" and sets the font size to 24px */
h1.title {
    font-size: 24px;
}

/* Selects all elements with the class "button" and sets the background color to blue */
.button {
    background-color: blue;
}
\`\`\``,Ae=`# HTML: Hypertext Markup Language

HTML (Hypertext Markup Language) is the standard markup language for creating web pages and applications. It provides the structure and content of a webpage, defining the elements and their relationships.

## History of HTML

HTML was first introduced by Tim Berners-Lee in 1991 as a means to share scientific information among researchers. The initial version, HTML 1.0, was a simple language with limited capabilities. Over the years, HTML has evolved through various versions, each introducing new features and improvements.

### HTML 2.0

HTML 2.0, released in 1995, introduced several new elements and attributes, including tables, image maps, and form elements. This version laid the foundation for more complex web page layouts and interactivity.

### HTML 3.2

HTML 3.2, released in 1997, brought significant enhancements to the language. It introduced support for frames, which allowed multiple web pages to be displayed within a single browser window. Additionally, new form elements and multimedia capabilities were introduced.

### HTML 4.01

HTML 4.01, released in 1999, further expanded the capabilities of HTML. It introduced support for cascading style sheets (CSS), which enabled developers to separate the presentation of a webpage from its structure. This version also introduced scripting support through JavaScript.

### HTML5

HTML5, the latest major version of HTML, was released in 2014. It introduced a wide range of new features and improvements, including semantic elements, multimedia support, canvas for drawing graphics, and enhanced form controls. HTML5 also introduced the concept of web APIs, allowing web applications to access device-specific features.

## Conclusion

HTML has come a long way since its inception, evolving into a powerful and versatile language for creating web pages and applications. Its continuous development and adoption of new standards have played a crucial role in shaping the modern web.

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
\`\`\``,je=`# Tailwind CSS Framework

## Introduction
Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. It provides a set of pre-defined utility classes that you can use to style your HTML elements.

## History
Tailwind CSS was created by Adam Wathan, Jonathan Reinink, David Hemphill, and Steve Schoger. It was first released in November 2017 and has gained popularity among developers due to its unique approach to styling.

## Key Features
- **Utility-First Approach**: Tailwind CSS focuses on providing a wide range of utility classes that you can apply directly to your HTML elements, allowing for rapid prototyping and customization.
- **Responsive Design**: Tailwind CSS includes responsive utility classes that make it easy to create responsive layouts for different screen sizes.
- **Customization**: Tailwind CSS is highly customizable. You can configure the framework to include only the utility classes you need, reducing the overall file size.
- **Developer Experience**: Tailwind CSS provides a comprehensive set of documentation and resources, making it easy for developers to get started and learn the framework.

## Getting Started
To start using Tailwind CSS in your project, you can follow these steps:

1. Install Tailwind CSS using a package manager like npm or yarn.
2. Include the Tailwind CSS stylesheet in your HTML file.
3. Start using the utility classes provided by Tailwind CSS in your HTML elements.

## Example Usage
Here's an example of how you can use Tailwind CSS classes to style a button:

\`\`\`html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Click me
</button>
\`\`\``,Ee=`# Docker

## Introduction

Docker is an open-source platform that allows developers to automate the deployment and management of applications using containerization. It provides a lightweight and portable environment for running software, making it easier to build, ship, and run applications across different environments.

## History

Docker was first introduced by Solomon Hykes and his team at dotCloud in 2013. It was initially developed as an internal project to solve the problem of deploying applications in a consistent and reproducible manner. The project gained popularity quickly and was open-sourced in March 2013.

## Key Concepts

### Containers

Containers are the fundamental building blocks of Docker. They are lightweight, isolated environments that encapsulate an application and its dependencies. Containers provide a consistent and reproducible environment, ensuring that the application runs the same way across different systems.

### Images

Images are the templates used to create containers. They contain everything needed to run an application, including the code, runtime, libraries, and system tools. Docker images are stored in a registry and can be easily shared and distributed.

### Dockerfile

A Dockerfile is a text file that contains instructions for building a Docker image. It specifies the base image, the dependencies, and the commands to run when the image is created. Dockerfiles allow developers to define the environment and configuration of their applications in a declarative way.

## Benefits of Docker

- **Portability**: Docker allows applications to run consistently across different environments, from development to production.

- **Isolation**: Containers provide a high level of isolation, ensuring that applications do not interfere with each other.

- **Scalability**: Docker makes it easy to scale applications horizontally by running multiple instances of containers.

- **Efficiency**: Docker's lightweight architecture and efficient resource utilization make it an ideal choice for deploying and managing applications.

## Conclusion

Docker has revolutionized the way applications are built, shipped, and run. Its containerization technology has made it easier for developers to create and deploy applications in a consistent and reproducible manner. With its growing ecosystem and community support, Docker continues to be a popular choice for modern application development and deployment.
`,Oe=`# Redis

## Introduction

Redis is an open-source, in-memory data structure store that can be used as a database, cache, and message broker. It is known for its high performance, scalability, and versatility. Redis supports various data structures such as strings, lists, sets, hashes, and more, making it a popular choice for many applications.

## History

Redis was created by Salvatore Sanfilippo, also known as "antirez," in 2009. Salvatore initially developed Redis as a personal project to solve specific problems he encountered while working on a startup. He wanted a simple and efficient way to handle real-time data processing and caching.

Redis gained popularity quickly due to its simplicity and performance. It became widely adopted by developers and organizations looking for a fast and reliable data store. Over the years, Redis has evolved and added new features, making it even more powerful and flexible.

## Features

Redis offers several key features that make it a preferred choice for many use cases:

- **In-Memory Data Storage**: Redis stores data in memory, allowing for extremely fast read and write operations.

- **Data Structures**: Redis supports various data structures such as strings, lists, sets, hashes, sorted sets, and more. This flexibility enables developers to model their data efficiently.

- **Persistence**: Redis provides options for data persistence, allowing data to be saved to disk and loaded back into memory when needed.

- **Pub/Sub Messaging**: Redis supports publish/subscribe messaging, enabling real-time communication between different components of an application.

- **Replication and High Availability**: Redis supports replication, allowing data to be replicated across multiple nodes for increased availability and fault tolerance.

- **Lua Scripting**: Redis allows developers to write Lua scripts that can be executed on the server, enabling complex operations and transactions.

## Conclusion

Redis has become a popular choice for developers and organizations looking for a fast, scalable, and versatile data store. Its simplicity, performance, and rich feature set make it suitable for a wide range of use cases, from caching to real-time analytics. Whether you're building a small application or a large-scale system, Redis can be a valuable tool in your software stack.
`,S=e=>e,pe=[S({slug:"python",color:"yellow",description:De,logo:y.Python,name:"Python"}),S({slug:"c",color:"blue",description:we,logo:y.C,name:"C"}),S({slug:"cpp",color:"blue",description:Se,logo:y.Cpp,name:"C++"}),S({slug:"go",color:"blue",description:ke,logo:y.Go,name:"Golang"}),S({slug:"sql",color:"blue",description:Le,logo:y.Unknown,name:"SQL"}),S({slug:"postgres",color:"blue",description:Te,logo:y.PostgreSQL,name:"PostgreSQL"}),S({slug:"django",color:"green",description:xe,logo:y.Django,name:"Django"}),S({slug:"pytorch",color:"red",description:$e,logo:y.Unknown,name:"Pytorch"}),S({slug:"pandas",color:"red",description:He,logo:y.Pandas,name:"Pandas"}),S({slug:"numpy",color:"red",description:Pe,logo:y.Numpy,name:"Numpy"}),S({slug:"celery",color:"green",description:ze,logo:y.Celery,name:"Celery"}),S({slug:"css",color:"blue",description:Ie,logo:y.CSS,name:"CSS"}),S({slug:"html",color:"orange",description:Ae,logo:y.HTML,name:"HTML"}),S({slug:"javascript",color:"yellow",description:Me,logo:y.JavaScript,name:"Javascript"}),S({slug:"svelte",color:"orange",description:ve,logo:y.Svelte,name:"Svelte"}),S({slug:"angular",color:"red",description:be,logo:y.Angular,name:"Angular"}),S({slug:"ts",color:"blue",description:Ce,logo:y.TypeScript,name:"Typescript"}),S({slug:"tailwind",color:"blue",description:je,logo:y.Tailwind,name:"Tailwind"}),S({slug:"docker",color:"blue",description:Ee,logo:y.Docker,name:"Docker"}),S({slug:"redis",color:"red",description:Oe,logo:y.Redis,name:"Redis"})],q=(...e)=>pe.filter(f=>e.includes(f.slug));var Q=(e=>(e.GitHub="github",e.StackOverflow="stackoverflow",e.Twitter="twitter",e.Linkedin="linkedin",e.Email="email",e.Facebook="facebook",e.Youtube="youtube",e))(Q||{}),ee=(e=>(e.FullTime="Full-time",e.PartTime="Part-time",e.SelfEmployed="Self-employed",e.Freelance="Freelance",e.Contract="Contract",e.Internship="Internship",e))(ee||{});const Re=[{slug:"open-sourcer",company:"Self-employed",description:"Creating awesome tools for developers.",contract:ee.SelfEmployed,type:"Software Development",location:"Home",period:{from:new Date},skills:q("ts","js"),name:"Open Source Developer",color:"red",links:[],logo:y.Unknown,shortDescription:""},{slug:"software-freelance",company:"Self-employed",description:"Creating awesome applications for customers.",contract:ee.Freelance,type:"Software Development",location:"Home",period:{from:new Date},skills:q("svelte","ts","sass","css","html","js"),name:"Freelancer",color:"blue",links:[],logo:y.Unknown,shortDescription:""},{slug:"software-freelance-junior",company:"Self-employed",description:"Creating awesome applications for customers.",contract:ee.Freelance,type:"Software Development",location:"Home",period:{from:new Date(2022,0,1),to:new Date},skills:q("css","html","js"),name:"Junior Freelancer",color:"green",links:[],logo:y.Unknown,shortDescription:""}],Je=[{slug:"slick-portfolio-angular",color:"#5e95e3",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!",shortDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:y.Unknown,name:"Slick Portfolio",period:{from:new Date},skills:q("angular","ts","tailwind"),type:"Website Template"},{slug:"slick-portfolio-svelte",color:"#ff3e00",description:"A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",shortDescription:"A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:y.Svelte,name:"Slick Portfolio",period:{from:new Date},skills:q("svelte","ts","tailwind","sass"),type:"Website Template",screenshots:[{label:"screen 1",src:"https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{label:"2",src:"https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{label:"3",src:"https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"4",src:"https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"5",src:"https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"6",src:"https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}]}];var he=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},se={},Fe={get exports(){return se},set exports(e){se=e}};(function(e,f){(function(b,h){e.exports=h()})(he,function(){var b=1e3,h=6e4,k=36e5,D="millisecond",L="second",j="minute",R="hour",z="day",J="week",H="month",F="quarter",P="year",I="date",N="Invalid Date",K=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,O=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ae={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var a=["th","st","nd","rd"],n=s%100;return"["+s+(a[(n-20)%10]||a[n]||a[0])+"]"}},E=function(s,a,n){var r=String(s);return!r||r.length>=a?s:""+Array(a+1-r.length).join(n)+s},Z={s:E,z:function(s){var a=-s.utcOffset(),n=Math.abs(a),r=Math.floor(n/60),t=n%60;return(a<=0?"+":"-")+E(r,2,"0")+":"+E(t,2,"0")},m:function s(a,n){if(a.date()<n.date())return-s(n,a);var r=12*(n.year()-a.year())+(n.month()-a.month()),t=a.clone().add(r,H),c=n-t<0,u=a.clone().add(r+(c?-1:1),H);return+(-(r+(n-t)/(c?t-u:u-t))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:H,y:P,w:J,d:z,D:I,h:R,m:j,s:L,ms:D,Q:F}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},Y="en",m={};m[Y]=ae;var l="$isDayjsObject",i=function(s){return s instanceof M||!(!s||!s[l])},g=function s(a,n,r){var t;if(!a)return Y;if(typeof a=="string"){var c=a.toLowerCase();m[c]&&(t=c),n&&(m[c]=n,t=c);var u=a.split("-");if(!t&&u.length>1)return s(u[0])}else{var v=a.name;m[v]=a,t=v}return!r&&t&&(Y=t),t||!r&&Y},p=function(s,a){if(i(s))return s.clone();var n=typeof a=="object"?a:{};return n.date=s,n.args=arguments,new M(n)},d=Z;d.l=g,d.i=i,d.w=function(s,a){return p(s,{locale:a.$L,utc:a.$u,x:a.$x,$offset:a.$offset})};var M=function(){function s(n){this.$L=g(n.locale,null,!0),this.parse(n),this.$x=this.$x||n.x||{},this[l]=!0}var a=s.prototype;return a.parse=function(n){this.$d=function(r){var t=r.date,c=r.utc;if(t===null)return new Date(NaN);if(d.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var u=t.match(K);if(u){var v=u[2]-1||0,w=(u[7]||"0").substring(0,3);return c?new Date(Date.UTC(u[1],v,u[3]||1,u[4]||0,u[5]||0,u[6]||0,w)):new Date(u[1],v,u[3]||1,u[4]||0,u[5]||0,u[6]||0,w)}}return new Date(t)}(n),this.init()},a.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},a.$utils=function(){return d},a.isValid=function(){return this.$d.toString()!==N},a.isSame=function(n,r){var t=p(n);return this.startOf(r)<=t&&t<=this.endOf(r)},a.isAfter=function(n,r){return p(n)<this.startOf(r)},a.isBefore=function(n,r){return this.endOf(r)<p(n)},a.$g=function(n,r,t){return d.u(n)?this[r]:this.set(t,n)},a.unix=function(){return Math.floor(this.valueOf()/1e3)},a.valueOf=function(){return this.$d.getTime()},a.startOf=function(n,r){var t=this,c=!!d.u(r)||r,u=d.p(n),v=function(G,$){var _=d.w(t.$u?Date.UTC(t.$y,$,G):new Date(t.$y,$,G),t);return c?_:_.endOf(z)},w=function(G,$){return d.w(t.toDate()[G].apply(t.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice($)),t)},C=this.$W,x=this.$M,A=this.$D,B="set"+(this.$u?"UTC":"");switch(u){case P:return c?v(1,0):v(31,11);case H:return c?v(1,x):v(0,x+1);case J:var W=this.$locale().weekStart||0,U=(C<W?C+7:C)-W;return v(c?A-U:A+(6-U),x);case z:case I:return w(B+"Hours",0);case R:return w(B+"Minutes",1);case j:return w(B+"Seconds",2);case L:return w(B+"Milliseconds",3);default:return this.clone()}},a.endOf=function(n){return this.startOf(n,!1)},a.$set=function(n,r){var t,c=d.p(n),u="set"+(this.$u?"UTC":""),v=(t={},t[z]=u+"Date",t[I]=u+"Date",t[H]=u+"Month",t[P]=u+"FullYear",t[R]=u+"Hours",t[j]=u+"Minutes",t[L]=u+"Seconds",t[D]=u+"Milliseconds",t)[c],w=c===z?this.$D+(r-this.$W):r;if(c===H||c===P){var C=this.clone().set(I,1);C.$d[v](w),C.init(),this.$d=C.set(I,Math.min(this.$D,C.daysInMonth())).$d}else v&&this.$d[v](w);return this.init(),this},a.set=function(n,r){return this.clone().$set(n,r)},a.get=function(n){return this[d.p(n)]()},a.add=function(n,r){var t,c=this;n=Number(n);var u=d.p(r),v=function(x){var A=p(c);return d.w(A.date(A.date()+Math.round(x*n)),c)};if(u===H)return this.set(H,this.$M+n);if(u===P)return this.set(P,this.$y+n);if(u===z)return v(1);if(u===J)return v(7);var w=(t={},t[j]=h,t[R]=k,t[L]=b,t)[u]||1,C=this.$d.getTime()+n*w;return d.w(C,this)},a.subtract=function(n,r){return this.add(-1*n,r)},a.format=function(n){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||N;var c=n||"YYYY-MM-DDTHH:mm:ssZ",u=d.z(this),v=this.$H,w=this.$m,C=this.$M,x=t.weekdays,A=t.months,B=t.meridiem,W=function($,_,V,X){return $&&($[_]||$(r,c))||V[_].slice(0,X)},U=function($){return d.s(v%12||12,$,"0")},G=B||function($,_,V){var X=$<12?"AM":"PM";return V?X.toLowerCase():X};return c.replace(O,function($,_){return _||function(V){switch(V){case"YY":return String(r.$y).slice(-2);case"YYYY":return d.s(r.$y,4,"0");case"M":return C+1;case"MM":return d.s(C+1,2,"0");case"MMM":return W(t.monthsShort,C,A,3);case"MMMM":return W(A,C);case"D":return r.$D;case"DD":return d.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return W(t.weekdaysMin,r.$W,x,2);case"ddd":return W(t.weekdaysShort,r.$W,x,3);case"dddd":return x[r.$W];case"H":return String(v);case"HH":return d.s(v,2,"0");case"h":return U(1);case"hh":return U(2);case"a":return G(v,w,!0);case"A":return G(v,w,!1);case"m":return String(w);case"mm":return d.s(w,2,"0");case"s":return String(r.$s);case"ss":return d.s(r.$s,2,"0");case"SSS":return d.s(r.$ms,3,"0");case"Z":return u}return null}($)||u.replace(":","")})},a.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},a.diff=function(n,r,t){var c,u=this,v=d.p(r),w=p(n),C=(w.utcOffset()-this.utcOffset())*h,x=this-w,A=function(){return d.m(u,w)};switch(v){case P:c=A()/12;break;case H:c=A();break;case F:c=A()/3;break;case J:c=(x-C)/6048e5;break;case z:c=(x-C)/864e5;break;case R:c=x/k;break;case j:c=x/h;break;case L:c=x/b;break;default:c=x}return t?c:d.a(c)},a.daysInMonth=function(){return this.endOf(H).$D},a.$locale=function(){return m[this.$L]},a.locale=function(n,r){if(!n)return this.$L;var t=this.clone(),c=g(n,r,!0);return c&&(t.$L=c),t},a.clone=function(){return d.w(this.$d,this)},a.toDate=function(){return new Date(this.valueOf())},a.toJSON=function(){return this.isValid()?this.toISOString():null},a.toISOString=function(){return this.$d.toISOString()},a.toString=function(){return this.$d.toUTCString()},s}(),T=M.prototype;return p.prototype=T,[["$ms",D],["$s",L],["$m",j],["$H",R],["$W",z],["$M",H],["$y",P],["$D",I]].forEach(function(s){T[s[1]]=function(a){return this.$g(a,s[0],s[1])}}),p.extend=function(s,a){return s.$i||(s(a,M,p),s.$i=!0),p},p.locale=g,p.isDayjs=i,p.unix=function(s){return p(1e3*s)},p.en=m[Y],p.Ls=m,p.p={},p})})(Fe);const ne=se;var re={},Ne={get exports(){return re},set exports(e){re=e}};(function(e,f){(function(b,h){e.exports=h()})(he,function(){var b,h,k=1e3,D=6e4,L=36e5,j=864e5,R=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,z=31536e6,J=2628e6,H=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,F={years:z,months:J,days:j,hours:L,minutes:D,seconds:k,milliseconds:1,weeks:6048e5},P=function(m){return m instanceof Z},I=function(m,l,i){return new Z(m,i,l.$l)},N=function(m){return h.p(m)+"s"},K=function(m){return m<0},O=function(m){return K(m)?Math.ceil(m):Math.floor(m)},ae=function(m){return Math.abs(m)},E=function(m,l){return m?K(m)?{negative:!0,format:""+ae(m)+l}:{negative:!1,format:""+m+l}:{negative:!1,format:""}},Z=function(){function m(i,g,p){var d=this;if(this.$d={},this.$l=p,i===void 0&&(this.$ms=0,this.parseFromMilliseconds()),g)return I(i*F[N(g)],this);if(typeof i=="number")return this.$ms=i,this.parseFromMilliseconds(),this;if(typeof i=="object")return Object.keys(i).forEach(function(s){d.$d[N(s)]=i[s]}),this.calMilliseconds(),this;if(typeof i=="string"){var M=i.match(H);if(M){var T=M.slice(2).map(function(s){return s!=null?Number(s):0});return this.$d.years=T[0],this.$d.months=T[1],this.$d.weeks=T[2],this.$d.days=T[3],this.$d.hours=T[4],this.$d.minutes=T[5],this.$d.seconds=T[6],this.calMilliseconds(),this}}return this}var l=m.prototype;return l.calMilliseconds=function(){var i=this;this.$ms=Object.keys(this.$d).reduce(function(g,p){return g+(i.$d[p]||0)*F[p]},0)},l.parseFromMilliseconds=function(){var i=this.$ms;this.$d.years=O(i/z),i%=z,this.$d.months=O(i/J),i%=J,this.$d.days=O(i/j),i%=j,this.$d.hours=O(i/L),i%=L,this.$d.minutes=O(i/D),i%=D,this.$d.seconds=O(i/k),i%=k,this.$d.milliseconds=i},l.toISOString=function(){var i=E(this.$d.years,"Y"),g=E(this.$d.months,"M"),p=+this.$d.days||0;this.$d.weeks&&(p+=7*this.$d.weeks);var d=E(p,"D"),M=E(this.$d.hours,"H"),T=E(this.$d.minutes,"M"),s=this.$d.seconds||0;this.$d.milliseconds&&(s+=this.$d.milliseconds/1e3,s=Math.round(1e3*s)/1e3);var a=E(s,"S"),n=i.negative||g.negative||d.negative||M.negative||T.negative||a.negative,r=M.format||T.format||a.format?"T":"",t=(n?"-":"")+"P"+i.format+g.format+d.format+r+M.format+T.format+a.format;return t==="P"||t==="-P"?"P0D":t},l.toJSON=function(){return this.toISOString()},l.format=function(i){var g=i||"YYYY-MM-DDTHH:mm:ss",p={Y:this.$d.years,YY:h.s(this.$d.years,2,"0"),YYYY:h.s(this.$d.years,4,"0"),M:this.$d.months,MM:h.s(this.$d.months,2,"0"),D:this.$d.days,DD:h.s(this.$d.days,2,"0"),H:this.$d.hours,HH:h.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:h.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:h.s(this.$d.seconds,2,"0"),SSS:h.s(this.$d.milliseconds,3,"0")};return g.replace(R,function(d,M){return M||String(p[d])})},l.as=function(i){return this.$ms/F[N(i)]},l.get=function(i){var g=this.$ms,p=N(i);return p==="milliseconds"?g%=1e3:g=p==="weeks"?O(g/F[p]):this.$d[p],g||0},l.add=function(i,g,p){var d;return d=g?i*F[N(g)]:P(i)?i.$ms:I(i,this).$ms,I(this.$ms+d*(p?-1:1),this)},l.subtract=function(i,g){return this.add(i,g,!0)},l.locale=function(i){var g=this.clone();return g.$l=i,g},l.clone=function(){return I(this.$ms,this)},l.humanize=function(i){return b().add(this.$ms,"ms").locale(this.$l).fromNow(!i)},l.valueOf=function(){return this.asMilliseconds()},l.milliseconds=function(){return this.get("milliseconds")},l.asMilliseconds=function(){return this.as("milliseconds")},l.seconds=function(){return this.get("seconds")},l.asSeconds=function(){return this.as("seconds")},l.minutes=function(){return this.get("minutes")},l.asMinutes=function(){return this.as("minutes")},l.hours=function(){return this.get("hours")},l.asHours=function(){return this.as("hours")},l.days=function(){return this.get("days")},l.asDays=function(){return this.as("days")},l.weeks=function(){return this.get("weeks")},l.asWeeks=function(){return this.as("weeks")},l.months=function(){return this.get("months")},l.asMonths=function(){return this.as("months")},l.years=function(){return this.get("years")},l.asYears=function(){return this.as("years")},m}(),Y=function(m,l,i){return m.add(l.years()*i,"y").add(l.months()*i,"M").add(l.days()*i,"d").add(l.hours()*i,"h").add(l.minutes()*i,"m").add(l.seconds()*i,"s").add(l.milliseconds()*i,"ms")};return function(m,l,i){b=i,h=i().$utils(),i.duration=function(d,M){var T=i.locale();return I(d,{$l:T},M)},i.isDuration=P;var g=l.prototype.add,p=l.prototype.subtract;l.prototype.add=function(d,M){return P(d)?Y(this,d,1):g.bind(this)(d,M)},l.prototype.subtract=function(d,M){return P(d)?Y(this,d,-1):p.bind(this)(d,M)}}})})(Ne);const Ye=re;ne.extend(Ye);const Qe=(e,f=new Date)=>{let b=0,h=0,k=0;return f.getFullYear()!==e.getFullYear()?(k=f.getMonth(),h=(f.getFullYear()-e.getFullYear()-1)*12,b=12-e.getMonth()):b=f.getMonth()-e.getMonth(),b+h+k+1},Be=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e],Ue=(e,f)=>`${e} | ${f}`;function Ve(e,f=new Date(Date.now()+1e3*60*60*24)){const b=ne(e),h=ne(f),k=ne.duration(h.diff(b));let D=0,L="day";return k.as("days")<=7?(L="day",D=k.as("days")):k.as("months")<=1?(L="week",D=k.as("weeks")):k.as("years")<=1?(L="month",D=k.as("months")):(L="year",D=k.as("years")),D=Math.trunc(D),`${Math.trunc(D)} ${L}${D>1?"s":""}`}function qe(e,f){const b=["logo","links","color","screenshots"];return f=f.toLowerCase(),e.filter(h=>le(h,f,b))}function le(e,f,b=[]){return Array.isArray(e)?e.some(h=>le(h,f)):typeof e=="object"&&e!==null?e instanceof Date?[e.toString().toLowerCase(),e.toLocaleDateString("default",{month:"long",year:"numeric"}).toLowerCase(),e.toLocaleDateString("default",{day:"numeric",month:"long",year:"numeric"}).toLowerCase(),e.toLocaleDateString("en-US").toLowerCase(),e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}).toLowerCase()].some(k=>k.includes(f)):Object.keys(e).some(h=>!b.includes(h)&&le(e[h],f)):e.toString().toLowerCase().includes(f)}var te=(e=>(e.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",e.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",e.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",e.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",e.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",e.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",e.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",e.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",e.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",e.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",e.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",e.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",e.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",e.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",e.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",e.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",e.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",e.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",e.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",e.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",e))(te||{});const Ke="Slick template with Svelte",Ze={home:"Home",personal:"Projects",career:"Experiences",resume:"Resume",skills:"Skills",Education:"Education"},Xe=e=>{switch(e){case Q.GitHub:return te.GitHub;case Q.Linkedin:return te.LinkedIn;case Q.Email:return te.Email}},en={title:"Home",name:"Tim",lastName:"LITTAU",description:"Data Scientist by education, Software Developer by nature.",links:[{platform:Q.GitHub,link:"https://github.com/tmlittau"},{platform:Q.Linkedin,link:"https://www.linkedin.com/in/tim-littau-a63510251/"},{platform:Q.Email,link:"projects@tmlittau.com"}]},nn={title:"Projects",items:Je},tn={title:"Experiences",items:Re},an={title:"Skills",items:pe},on={title:"Resumé",item:""},sn={title:"Search"},rn={items:ye,title:"Education"};export{rn as E,en as H,te as I,pe as M,Ze as N,nn as P,on as R,sn as S,Ke as T,ie as a,Xe as b,Ve as c,Be as d,tn as e,Re as f,Ge as g,he as h,Qe as i,Je as j,qe as k,an as l,We as o,ce as t,Ue as u};
