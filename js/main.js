/****Can Detect the word shit in input text*********/
// function validateText () {
//     let x = $( ".badwordshere" ).val(),
//         newx = x.split(""),
//         bw = 'shit';

//     for (let i = 0; i < newx.length; i = i + 1) {
//         let check = newx.slice(i,i + bw.length);

//         if (check.join('') === bw) {
//             alert('Watch your mouth!');
//             newx.splice(i, bw.length);
//         }
//     };
//     return newx.join("");
// }

// $(".submitbutton").on('click', validateText)

/****Will Replace the word shit with doodoo**********/
// function validateText () {
//     let x = $( ".badwordshere" ).val(),
//         newx = x.split(""),
//         gw = "dodoo"
//         bw = 'shit';

//     for (let i = 0; i < newx.length; i = i + 1) {
//         let check = newx.slice(i,i + bw.length);

//         if (check.join('') === bw) {
//             newx.splice(i, bw.length);
//             //alert('Watch your mouth!');
//         }
//     };
//     return $('.badwordshere').val(newx.join('') + gw);
// }

// $(".submitbutton").on('click', validateText);


/*************Will replace any cuss word with a noun*****************/
var cuss = ['shit', 'fuck', 'bitch', 'whore', 'cunt', 'ass', 'horseshit', 'twat'];
    nouns = ['doodoo', 'darn', 'good doggy', 'working woman', 'vajay', 'booty', 'cow-pie', 'noob'];

$('.go').on("click", function () {
    let str = $('.str').val();

    for (let i = 0; i < cuss.length; i = i + 1 ) {
        str = str.replace(cuss[i], nouns[i]);
    } 

    $('.str').val(str);
});