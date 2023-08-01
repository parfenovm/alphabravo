"use strict";
(() => {
  // index.js
  var PHONETIC_WORDS = {
    "A": "Alfa",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliett",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whiskey",
    "X": "X-ray",
    "Y": "Yankee",
    "Z": "Zulu",
    "\xC6": "\xC6rlig",
    "\xD8": "\xD8sten",
    "\xC5": "\xC5se"
  };
  var formatText = (text) => {
    const words = text.split(" ");
    return words.map((word) => ({
      word,
      spelling: [...word].map((letter) => PHONETIC_WORDS[letter.toUpperCase()]).join(" ")
    }));
  };
  function Home() {
    const [text, setText] = React.useState("");
    const [phoneticText, setPhoneticText] = React.useState([]);
    const updateText = (text2) => {
      setText(text2);
      if (!text2.length && phoneticText.length) {
        setPhoneticText([]);
        return;
      }
      if (!text2.length) {
        return;
      }
      setPhoneticText(formatText(text2));
    };
    const clearText = () => {
      setText("");
      setPhoneticText([]);
    };
    return /* @__PURE__ */ React.createElement("div", { className: "h-screen w-full flex flex-col justify-center items-center" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col justify-center items-center  p-5" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Text"), /* @__PURE__ */ React.createElement("input", { placeholder: "text", className: "p-4 border-2 border-black rounded text-xl", value: text, onChange: (event) => updateText(event.target.value) }), /* @__PURE__ */ React.createElement("button", { className: "ml-8", onClick: () => clearText() }, "Clear")), /* @__PURE__ */ React.createElement("div", { className: "mt-4 flex flex-col gap-4 items-start" }, /* @__PURE__ */ React.createElement("label", null, "Output"), phoneticText.map((data, index) => /* @__PURE__ */ React.createElement("div", { key: data.word + index, className: "flex flex-col gap-4" }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, data.word, ":")), data.spelling)))));
  }
  console.log(document.getElementById("app"));
  var root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(/* @__PURE__ */ React.createElement(Home, null));
})();
