import React from "react";

export default function About(props) {
    document.title = "Text Manipulator- About";

    let myStyle = {
      backgroundColor: props.mode === "dark" ? "black" : "white",
      color: props.mode === "dark" ? "white" : "#05042d",
    }
    let myStyle2 = {backgroundColor: props.mode === "dark" ? "rgb(15 14 62)" : "white",
    color: props.mode === "dark" ? "white" : "#05042d",
}
  return (
    <div
      className="container  rounded-2"
      style={{ color: props.mode === "dark" ? "White" : "black" }}
    >
      <h1 className="m-3">About App</h1>
      <p className="m-3">Let us know the few things used in building of this web application. Click on each below to know about how those helped in real life:</p>
      <br />
      <div className="accordion m-3" id="accordionExample">
        <div
          className="accordion-item"
          style={myStyle}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle2}
            >
              React JS
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                React JS is an open-source JavaScript library that was developed
                by Facebook in 2011. It is used for building user interfaces and
                creating dynamic, interactive web applications. React uses a
                component-based architecture, which makes it easy to create
                reusable UI elements and manage complex application logic.
              </strong>
              <br />
              <br />
              One of the key features of React is its ability to update the UI
              in response to changes in data, without having to reload the
              entire page. This is achieved through the use of a virtual DOM,
              which is a lightweight representation of the actual DOM. When data
              changes, React updates the virtual DOM, compares it to the
              previous version, and then selectively updates the actual DOM to
              reflect the changes.
              <br />
              React also provides a number of other features that make it a
              popular choice for web development, including:
              <br />
              - JSX: a syntax extension that allows developers to write
              HTML-like code in JavaScript, making it easier to build UI
              components.
              <br />
              - Component lifecycle methods: a set of methods that allow
              developers to define what happens at specific points in a
              component's lifecycle, such as when it is mounted or updated.
              <br />
              - State management: a way to manage the data and state of a
              component, allowing it to update and render dynamically based on
              user interaction or other events.
              <br />- React Native: a framework for building mobile apps using
              React, allowing developers to use a single codebase for both web
              and mobile applications. <br />
              <br />
              <code>
                React has a large and active community of developers, with many
                third-party libraries and tools available to extend its
                functionality. It is widely used by companies such as Netflix,
                Instagram, and Airbnb, and has become one of the most popular
                JavaScript libraries for front-end web development.
              </code>
              .
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={myStyle}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle2}
            >
              JavaScript
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                JavaScript is a high-level programming language that follows the
                ECMAScript standard.
              </strong>
              <br /> <br />
              It was originally designed as a scripting language for websites
              but became widely adopted as a general-purpose programming
              language, and is currently the most popular programming language
              in use. JavaScript is usually found running in a web browser as
              interactive or automated content, ranging from popup messages and
              live clocks to large web applications. JavaScript is also commonly
              used in server-side programming through platforms like Node.js, or
              "embedded" in non-JavaScript applications where the base
              programming language lacks the high-level functionality that
              JavaScript offers. Despite the similarities in name and syntax,
              JavaScript is not related to the programming language Java.
              <br />
              <br />
              Though the names of both languages are trademarks of Oracle
              Corporation, the two languages follow different design principles,
              and are actively developed by unrelated organizations.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={myStyle}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle2}
            >
              About Text manipulator
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                A text manipulator is a software tool that allows users to
                perform various operations on text.
              </strong>
              <br />
              <br />
              Text manipulators can be used to edit, transform, or analyze text
              in a variety of ways. Some common operations that text
              manipulators can perform include formatting text, searching and
              replacing text, extracting specific pieces of information from
              text, sorting and filtering text, and generating new text based on
              existing text. Text manipulators are useful for a wide range of
              applications, including data analysis, content management, and
              text processing. They can be standalone software tools or
              integrated into other software applications, such as text editors
              or programming environments.
              <br />
              <br />
              Some popular text manipulators include regular expression engines,
              scripting languages like Python or Perl, and specialized text
              manipulation software such as sed or awk.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
