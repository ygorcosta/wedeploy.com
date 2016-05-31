$(document).ready(function() {

    $('.open-modal').on('click', function() {
        $('.modal').show();
        setTimeout(function(){
            $('.modal').addClass('active');
            $('#modal__form-container').addClass('active');
        }, 100);
    });

    $('.modal-container').on('click', function(e) {
        if (e.target === this){
            closeModal();
        }
    });

    $('.modal__close').on('click', function() {
        closeModal(); 
    });

    $('#view-1__form').submit(function(e){
        saveEmail(e.target.email, function() {
            $('.modal').show();

            setTimeout(function(){
                $('.modal').addClass('active');
                $('#modal__response-container').addClass('active');
            }, 100);
        });

        e.preventDefault();
    });

    $('#form-modal').submit(function(e){
        saveEmail(e.target.email, function() {
            $('#modal__form-container').removeClass('active');
            $('#modal__response-container').addClass('active');
        });

        e.preventDefault();
    });

    function saveEmail(emailElem, callback) {
        if (isValidEmail(emailElem)) {
            $.ajax({
                method: 'POST',
                data: { 'email': emailElem.value },
                url: 'http://liferay.io/wedeploy/emails'
            }).done(callback);
        }
    }

    function isValidEmail(emailElem) {
        var isValid = false;
        var emailInput = $(emailElem);
        var emailFeedback = emailInput.parent().next();

        if (emailInput.val() === '') {
            emailInput.addClass('error');
            emailFeedback.addClass('active');
            emailFeedback.text('*Please enter an email address.');
        }
        else if (!isValidEmailAddress(emailInput.val())) {
            emailInput.addClass('error');
            emailFeedback.addClass('active');
            emailFeedback.text('*Please enter a full email address, including the ‘@’..');
        }
        else {
            emailInput.val('');
            emailInput.removeClass('error');
            emailFeedback.removeClass('active');
            emailFeedback.text('');

            isValid = true;
        }

        return isValid;
    }

    function isValidEmailAddress(emailAddress) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    };

    function closeModal() {
        $('.modal').removeClass('active');
        $('.modal').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
            $('.modal').hide();
            $('.modal').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');

            //clear containers
            $('#modal__form-container').removeClass('active');
            $('#modal__response-container').removeClass('active');

            //clear form validation
            $('#form-modal__email').removeClass('error');
            $('#form-modal__validation').removeClass('active');
            $('#form-modal__validation').text('');
        });
    }
});