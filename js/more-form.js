jQuery(function($){
$('.form-more_validate').submit(function() {
    // для читаемости кода
    var $form = $(this);

    // чистим ошибки
    $form.find('.error').remove();

    // проверяем поле с именем пользователя
    if ($form.find('input[name=Name]').val() === '') {
        // добавляем текст ошибки
        $form.find('input[name=Name]')
          .after('<div class="error">* Пустое поле</div>');
        // прерываем дальнейшую обработку
        return false;
    }
    if ($form.find('input[name=email]').val() === '') {
        // добавляем текст ошибки
        $form.find('input[name=email]')
          .after('<div class="error">* Пустое поле</div>');
        // прерываем дальнейшую обработку
        return false;
    }

    if ($form.find('textarea[name=question]').val() === '') {
        // добавляем текст ошибки
        $form.find('textarea[name=question]')
          .after('<div class="error">* Пустое поле</div>');
        // прерываем дальнейшую обработку
        return false;
    }

    // всё хорошо – отправляем запрос на сервер
    $.post(
        $form.attr('action'), // ссылка куда отправляем данные
        $form.serialize(),     // данные формы
          function (response) {
            console.log('Ответ сервера: ', response);
            $('.more_form_head').hide();
            $('.form-more_validate').hide();
            $('.popup.more_form').append(`
                <div class="Perfomed">
                <img src="img/performed.png">
                <div class="Form-performed">
                <p>Контактная форма отправлена!</p>      
                <p>Мы скоро свяжемся</p>
                </div>
                </div>
                `);
        }
    );

    function HidePopup() {
        $('#overlay').remove('#overlay');
        $('.popup.more_form').hide();
   }

   setTimeout(HidePopup, 2000);
    // отключаем действие по умолчанию
    return false;
});
});