// Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
$(document).ready(function(){
    for (var i = 0; i < 36; i++) {
        var clone = $('.template .square').clone()
        $('.container').append(clone);
    };

    $('.square').click(function() {
        var quadrato = $(this)
        if (quadrato.text() != "") {
            return alert('già cliccato')
        } else {
            $.ajax(
                {
                    url: "https://flynn.boolean.careers/exercises/api/random/int",
                    method: "GET",
                    success: function (risposta) {
                        console.log(risposta);
                        quadrato.text(risposta.response);
                        if (risposta.response <= 5) {
                            quadrato.addClass('verde');
                        } else {
                            quadrato.addClass('giallo');
                        }
                    },
                    error: function (richiesta, stato, errori) {
                        alert("E' avvenuto un errore.");
                    }
                }
            );
        }
    });



});
