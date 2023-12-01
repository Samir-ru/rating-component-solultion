const scaleButtons = document.querySelectorAll(".scl_btn");
const submitButton = document.getElementById("submit");

scaleButtons.forEach(scaleButton => {
    scaleButton.addEventListener("click", function() {

        scaleButtons.forEach(btn => {
            btn.classList.remove("clicked");
        });
        this.classList.add("clicked");
      let result = this.innerText;
        document.getElementById("result").innerHTML = `You have selected ${result} out of 5`
    });
});

submitButton.addEventListener("click", function(){
    document.querySelector(".rating_page").style.display = "none";
    document.querySelector(".thankyou_page").style.display = "flex";
})
