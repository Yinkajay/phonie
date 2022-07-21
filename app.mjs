function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  console.log('make magic inn here!');
  // console.log(typeof(cellNumber));
  // let name = "Samuel";
  // console.log(name[2]);


  function changeH1() {

    setTimeout(() => {
      document.querySelector("h1").innerHTML = "..test your number"
    }, 100);

    setTimeout(() => {
      document.querySelector("h1").innerHTML = "Phonie <sup>+234</sup>"
    }, 1000);


  }

  document.querySelector("h1").addEventListener('click', () => {
    changeH1()
  })


  const header = document.querySelector('h2');
  if (header) {
    header.textContent = 'make some magic here!!';
  }
};

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //

function greeting() {
  document.getElementsByClassName("second-p")[0].innerText = "Hello, " + (document.getElementById("firstName").value) + " , your mobile number is " + (document.getElementById("phoneNumber").value)
}

// Function to determine the network from the users input
function getNetwork(Number) {
  greeting()
  if (Number.length == 11) {
    if (Number[1] == 7) {
      switch (Number[3]) {
        case "1":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/airtel.jpg")
          break;
        case "3":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/mtn.jpg")
          break;
        case "5":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/glo.jpg")
          break;
        case "6":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/mtn.jpg")
          break;
        case "8":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/airtel.jpg")
          break;

        default:
          document.getElementsByClassName("network-img")[0].setAttribute('src', "unknown/mtn.jpg")
          break;
      }
    } else if (Number[1] == 8 && Number[2] == 0) {
      switch (Number[3]) {
        case "2":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/airtel.jpg")
          break;
        case "3":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/mtn.jpg")
          break;
        case "5":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/glo.jpg")
          break;
        case "6":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/mtn.jpg")
          break;
        case "7":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/glo.jpg")
          break;
        case "8":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/airtel.jpg")
          break;
          case "9":
            document.getElementsByClassName("network-img")[0].setAttribute('src', "images/9mobile.jpg")
          break;

        default:
          document.getElementsByClassName("network-img")[0].setAttribute('src', "unknown/mtn.jpg")
          break;
      }
    } else if (Number[1] == 8 && Number[2] == 1) {
      switch (Number[3]) {
        case "0":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/mtn.jpg")
          break;
        case "1":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/glo.jpg")
          break;
        case "2":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/airtel.jpg")
          break;
        case "3":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/mtn.jpg")
          break;
        case "4":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/mtn.jpg")
          break;
        case "5":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/glo.jpg")
          break;
        case "6":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/mtn.jpg")
          break;
        case "7":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/9mobile.jpg")
          break;
        case "8":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/9mobile.jpg")
          break;

        default:
          document.getElementsByClassName("network-img")[0].setAttribute('src', "unknown/mtn.jpg")
          break;
      }
    } else if (Number[1] == 9) {
      switch (Number[3]) {
        case "2":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/airtel.jpg")
          break;
        case "3":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/mtn.jpg")
          break;
        case "5":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/glo.jpg")
          break;
        case "9":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/9mobile.jpg")
          break;

        default:
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/unknown.jpg")
          break;
      }
    }
  } else if (Number.length == 13) {
    if (Number[3] == 7) {
      switch (Number[5]) {
        case "1":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/airtel.jpg")
          break;
        case "3":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/mtn.jpg")
          break;
        case "5":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/glo.jpg")
          break;
        case "6":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/mtn.jpg")
          break;
        case "8":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/airtel.jpg")
          break;

        default:
          document.getElementsByClassName("network-img")[0].setAttribute('src', "unknown/mtn.jpg")
          break;
      }
    } else if (Number[3] == 8 && Number[4] == 0) {
      switch (Number[5]) {
        case "2":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/airtel.jpg")
          break;
        case "3":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/mtn.jpg")
          break;
        case "5":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/glo.jpg")
          break;
        case "6":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/mtn.jpg")
          break;
        case "7":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/glo.jpg")
          break;
        case "8":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/airtel.jpg")
          break;
        case "9":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/9mobile.jpg")
          break;
          
          default:
            document.getElementsByClassName("network-img")[0].setAttribute('src', "unknown/mtn.jpg")
            break;
          }
        } else if (Number[31] == 8 && Number[4] == 1) {
      switch (Number[5]) {
        case "0":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/mtn.jpg")
          break;
        case "1":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/glo.jpg")
          break;
        case "2":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/airtel.jpg")
          break;
        case "3":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/mtn.jpg")
          break;
        case "4":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/mtn.jpg")
          break;
        case "5":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/glo.jpg")
          break;
        case "6":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/mtn.jpg")
          break;
        case "7":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/9mobile.jpg")
          break;
        case "8":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/9mobile.jpg")
          break;

        default:
          document.getElementsByClassName("network-img")[0].setAttribute('src', "unknown/mtn.jpg")
          break;
      }
    } else if (Number[3] == 9) {
      switch (Number[5]) {
        case "2":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/airtel.jpg")
          break;
        case "3":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/mtn.jpg")
          break;
        case "5":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/glo.jpg")
          break;
        case "9":
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/9mobile.jpg")
          break;

        default:
          document.getElementsByClassName("network-img")[0].setAttribute('src', "images/unknown.jpg")
          break;
      }
    }
  }
}
// Making the button display the user network
document.getElementsByClassName("button")[0].addEventListener("click", () => {
  getNetwork(document.getElementById("phoneNumber").value)
})



