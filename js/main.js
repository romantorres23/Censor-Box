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
// var cuss = ['shit', 'fuck', 'bitch', 'whore', 'cunt', 'ass', 'horseshit', 'twat'];
//     nouns = ['doodoo', 'darn', 'good doggy', 'working woman', 'vajay', 'booty', 'cow-pie', 'noob'];

// $('.go').on("click", function () {
//     let str = $('.str').val();

//     for (let i = 0; i < cuss.length; i = i + 1 ) {
//         str = str.replace(cuss[i], nouns[i]);
//     } 

//     $('.str').val(str);
// });

/**************Will replace cuss words with a noun using objects*******************/
// const cusswords = {
//             'shit' : 'doodoo',
//             'fuck' : 'darn',
//             'bitch' : 'good doggy',    
// };

// $(".go").on("click", function () {
//     let cuss = $('.str').val().split(' ');
//     //console.log(cuss);

//     for (let i = 0; i < cuss.length; i = i + 1) {
//         if (typeof cusswords[cuss[i]] !== "undefined") {
//             cuss[i] = cusswords[cuss[i]];
//         }
//     };
//     $('.str').val(cuss.join(' '));
// });

/**************Will replace cuss words with a noun using objects using JSON*******************/
let cusswords = "js/cusswords.json";
console.log(cusswords);

fetch(cusswords)
    .then(response => response.json())
    .then(cusswords => {
        console.dir(cusswords)
        $(".go").on("click", function () {
            let cuss = $('.str').val().split(' ');

            for (let i = 0; i < cuss.length; i = i + 1) {
                if (typeof cusswords[cuss[i]] !== "undefined") {
                    cuss[i] = cusswords[cuss[i]];
                }
            };
            $('.str').val(cuss.join(' '));
        });
    })
    .catch(err => console.log(err));