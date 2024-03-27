const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");
const header = document.querySelector("header");
const selectOne = document.querySelector("#selectOne");
const selectTwo = document.querySelector("#selectTwo");
const input = document.querySelector("input.form-control");
const question = document.querySelector("#quesition");
const response = document.querySelector("#response");
const submitBtn = document.querySelector("#submit");
const chat = document.querySelector(".chat");
const inputFixed = document.querySelector(".input-fixed");

let username, assistant_name, version, greetings;

fetch("http://125.229.172.232:5567/projects/get_ai_assistant_metadata")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    username = data.username;
    version = data.version;
    assistant_name = data.assistant_name;
    greetings = data.greetings;
    const versionEl = document.querySelector("#version");
    versionEl.textContent = `版本：` + version;
    const greetingsEl = document.querySelector("#greetings");
    typeWriter(assistant_name + "：" + greetings, greetingsEl);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const toggleHeader = () => {
  header.classList.toggle("transform-open");
  console.log("toggle");
};

openBtn.addEventListener("click", toggleHeader);
closeBtn.addEventListener("click", toggleHeader);

const updateInputValue = (select) => {
  const value = select.options[select.selectedIndex].text;
  input.value = value;
};

selectOne.addEventListener("change", () => updateInputValue(selectOne));
selectTwo.addEventListener("change", () => updateInputValue(selectTwo));

submitBtn.addEventListener("click", () => {
  const questionValue = input.value;
  const responseText = "error: Something went wrong, please try again later.";
  const questionEl = document.createElement("p");
  questionEl.classList.add("p-lg-3", "p-1");
  questionEl.id = "question";
  questionEl.textContent = `${username}：${questionValue}`;

  const responseEl = document.createElement("p");
  responseEl.classList.add(
    "bg-gpt-third",
    "p-lg-3",
    "p-1",
    "mb-5",
    "d-flex",
    "align-items-center"
  );
  responseEl.id = "response";
  responseEl.textContent = `${assistant_name}：`;
  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  responseEl.appendChild(spinner);

  chat.appendChild(questionEl);
  chat.appendChild(responseEl);

  const API_KEY = "";
  const settings = {
    url: "https://beta-openai.4impact.cc/chat_to_avatar",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      api_key: API_KEY,
      message: questionValue,
      name: "chat_to_avatar",
    }),
  };

  $.ajax({
    url: settings.url,
    type: settings.method,
    data: settings.data,
    name: "chat_to_avatar",
    contentType: "application/json",
    success: function (data) {
      responseEl.classList.remove("spinner");
      typeWriter(data.message, responseEl);
    },
    error: function (error) {
      console.error("Error:", error);
      setTimeout(() => {
        responseEl.classList.remove("spinner");
      }, 2000);
      setTimeout(() => {
        responseEl.classList.add("text-danger", "font-weight-bold");
        typeWriter(responseText, responseEl);
      }, 2500);
      console.log("error");
    },
  });
  input.value = "";
});

const typeWriter = (text, el) => {
  let index = 0;
  const typingInterval = setInterval(() => {
    if (index < text.length) {
      el.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }, 50);
};

window.addEventListener('resize', () => {
  setInputFixedWidth();
});

window.addEventListener('load', () => {
  setInputFixedWidth();
});

const setInputFixedWidth = () => {
  const greetingsWidth = document.querySelector("#greetings").offsetWidth;
  inputFixed.style.width = `${greetingsWidth}px`;
};
