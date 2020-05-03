$('button').click(() => {
    $('ul').append('<li>' + document.getElementById('todo').value + '<button class="done">' + 
        '</button>' + '</li>');
    $('li:last-child').click((event) => {
        $(event.target).toggleClass('completed');
        });
        $('input').val('');
})

/*$('button').click(() => {
    $('ul').append(`<li>${$('input').val()}</li>`);
    $('li:last-child').click((event) => {
    $(event.target).toggleClass('completed');
    });
    $('input').val('');
    });*/