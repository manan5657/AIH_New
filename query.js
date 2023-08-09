// //! Movement Animation to happen
// const card = document.querySelector(".card");
// const container = document.querySelector(".container");
// //Items
// const title = document.querySelector(".title");
// const heart = document.querySelector(".heart img");
// const appointment = document.querySelector(".appointment");
// const description = document.querySelector(".info h3");
// const description1 = document.querySelector(".info h2");
// const slots = document.querySelector(".slots");

// //Moving Animation Event
// container.addEventListener("mousemove", (e) => {
//   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//   let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
//   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// });
// //Animate In
// container.addEventListener("mouseenter", (e) => {
//   card.style.transition = "none";
//   //Popout
//   title.style.transform = "translateZ(150px)";
//   heart.style.transform = "translateZ(200px) rotateZ(-45deg)";
//   description.style.transform = "translateZ(125px)";
//   description1.style.transform = "translateZ(125px)";
//   slots.style.transform = "translateZ(100px)";
//   appointment.style.transform = "translateZ(75px)";
// });
// //Animate Out
// container.addEventListener("mouseleave", (e) => {
//   card.style.transition = "all 0.5s ease";
//   card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   //Popback
//   title.style.transform = "translateZ(0px)";
//   heart.style.transform = "translateZ(0px) rotateZ(0deg)";
//   description.style.transform = "translateZ(0px)";
//   description1.style.transform = "translateZ(0px)";
//   slots.style.transform = "translateZ(0px)";
//   appointment.style.transform = "translateZ(0px)";
// });

// document.querySelector(".input").addEventListener("click", () => {
//   document.querySelector(".container").style.display = "none";
// });

const searchInput = document.querySelector(".input");
const drpPara = document.querySelectorAll(".drp-p");
const drpImg = document.querySelectorAll(".drp-i");
var defaultarr = [
  "How do I schedule an appointment with a specific doctor?",
  "Do you accept my health insurance?",
  "What are the guidelines for visiting patients in critical care units?",
  "What is the hospital's policy on patient privacy and data security?",
];
var eyeRoom = [
  "Ophthalmologist Doctor Prakash can be found in Room Number 26A.",
  "Ophthalmologist Doctor Pankaj can be found in Room Number 30A.",
  "Ophthalmologist Doctor Aryan can be found in Room Number 23B.",
  "Ophthalmologist Doctor Deepika can be found in Room Number 50D.",
];
var eye = [
  "What is LASIK surgery and how does it correct vision?",
  "What is conjunctivitis (pink eye) and how is it treated?",
  "How do contact lenses work and how are they used?",
  "What are some tips for maintaining good eye health?",
];
var eyeSlot = [
  "Doctor Aakash can be scheduled for an appointment at 10:00 AM.",
  "Doctor Surya can be scheduled for an appointment at 2:00 PM.",
  "Doctor Rohanpreet can be scheduled for an appointment at 1:00 PM.",
  "Doctor Elois can be scheduled for an appointment at 11:00 AM.",
];
var HrRoom = [
  "Cardiologist Doctor Prakash can be found in Room Number 26A.",
  "Cardiologist Doctor Pankaj can be found in Room Number 30A.",
  "Cardiologist Doctor Aryan can be found in Room Number 23B.",
  "Cardiologist Doctor Deepika can be found in Room Number 50D.",
];
var hr = [
  "Are there specific foods that are beneficial for heart health?",
  "What are the risk factors for heart disease, and how can I reduce them?",
  "What is coronary artery disease (CAD) and its causes?",
  "What are the symptoms and treatments for arrhythmias?",
];
var hrSlot = [
  "Doctor Prakash can be scheduled for an appointment at 10:00 AM.",
  "Doctor Pankaj can be scheduled for an appointment at 2:00 PM.",
  "Doctor Aryan can be scheduled for an appointment at 1:00 PM.",
  "Doctor Deepika can be scheduled for an appointment at 11:00 AM.",
];
searchInput.value = "";
searchInput.addEventListener("input", performSearch);

function performSearch() {
  let a = 0; // Initialize 'a' variable
  const searchTerm = searchInput.value.trim().toLowerCase();
  // Clear previous results
  drpPara.forEach((e) => {
    e.textContent = ""; // Clear previous content
  });

  if (searchTerm.includes("eye") && searchTerm.includes("room")) {
    drpPara.forEach((e) => {
      e.textContent = eyeRoom[a];
      a = a + 1;
    });
  } else if (searchTerm.includes("eyes")) {
    drpPara.forEach((e) => {
      e.textContent = eye[a];
      a = a + 1;
    });
  } else if (searchTerm.includes("eye") && searchTerm.includes("slot")) {
    drpPara.forEach((e) => {
      e.textContent = eyeSlot[a];
      a = a + 1;
    });
  } else if (searchTerm.includes("heart") && searchTerm.includes("room")) {
    drpPara.forEach((e) => {
      e.textContent = HrRoom[a];
      a = a + 1;
    });
  } else if (searchTerm.includes("heart") && searchTerm.includes("slot")) {
    drpPara.forEach((e) => {
      e.textContent = hrSlot[a];
      a = a + 1;
    });
  } else if (searchTerm.includes("heart")) {
    drpPara.forEach((e) => {
      e.textContent = hr[a];
      a = a + 1;
    });
  } else {
    // Reset 'a' when none of the conditions are met
    drpPara.forEach((e) => {
      e.textContent = defaultarr[a];
      a = a + 1;
    });
  }
}

//! Draggable
