let prompts = ["Please enter your name", "Please enter your email", "Please enter your phone number"];
let currentPrompt = 0;
let userInput = [];

$("#input-field").on("keyup", function(event) {
    if (event.key === "Enter") {
        userInput.push($(this).val());
        $(this).val("");
        currentPrompt++;
        if (currentPrompt < prompts.length) {
            $(this).attr("placeholder", prompts[currentPrompt]);
        } else {
            $(this).attr("placeholder", "");
            alert("You've completed all the prompts! Here are your inputs:\n" + userInput.join("\n"));
        }
    }
});

$("#input-field").attr("placeholder", prompts[currentPrompt]);
