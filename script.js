$(document).ready(function() {
    $('#registration-form').on('submit', function(event) {
        event.preventDefault();

        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var address = $('#address').val();

        $('#display-name').text('Name: ' + name);
        $('#display-email').text('Email: ' + email);
        $('#display-phone').text('Phone: ' + phone);
        $('#display-address').text('Address: ' + address);

        $('#registration-form').addClass('hidden');
        $('#display-section').removeClass('hidden');
    });
});
