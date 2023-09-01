jQuery(document).ready(function(){

    $('.sidebarToggleBtn').on('click', function() {
        $(this).toggleClass('open');
        $('#app-sidebar').toggleClass('active');
        $('html').toggleClass('sidebar-opend');
    });

    $('.close-sidebar').on('click', function(){
        $('#app-sidebar').toggleClass('active');
        $('html').removeClass('sidebar-opend');
    });

    $('.toggle-btn').on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('.toggle-dropdown').not($(this).parent().find('.toggle-dropdown')).hide();
        $('.toggle-btn').not($(this)).removeClass('opened');
        $(this).toggleClass('opened');
        $(this).parent().find('.toggle-dropdown').toggle();
    });

    $(document).on('click', function(e) {
        if($('.toggle-dropdown').is(':visible')) {
            $('.toggle-dropdown').hide();
            $('.toggle-btn').removeClass('opened');
        }
    });

    $(".toggle-dropdown").click(function(e){
        e.stopPropagation();
    });

    $('.close-popup, .cancel-popup').on('click', function() {
        $('.popup-modal').hide();
    });

    $('.popup-modal-btn').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.toggle-dropdown').hide();
        var popupModal = $(this).attr('data-popup');
        $(popupModal).show();
    });

    $('select.select-placeholder').each(function() {
        if ($(this).val() === '' || $(this).val() === null) {
            $(this).addClass('select-placeholder');
        } else {
            $(this).removeClass('select-placeholder');
        }
    });

    $(document).on('change', 'select.select-placeholder', function() {
        if ($(this).val() === '' || $(this).val() === null) {
            $(this).addClass('select-placeholder');
        } else {
            $(this).removeClass('select-placeholder');
        }
    });

    $('.accordion-header').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        //const accordionWrapper = $(this).parentsUntil('.accordion-wrapper').parent();
        const accordionEles = $(this).parent().siblings();
        accordionEles.find('.accordion-header').removeClass('opened-header');
        accordionEles.find('.accordion-text-body').removeClass('opened-body-text');
        accordionEles.find('.accordion-text-body').hide(600);
        accordionEles.find($('.switch input[type=checkbox]')).prop('checked', false); 

        $(this).toggleClass('opened-header');
        $(this).parent().find('.accordion-text-body').toggleClass('opened-body-text');
        $(this).parent().find('.accordion-text-body').toggle(400);
        $(this).find($('.switch input[type=checkbox]')).prop('checked', function(_, checked) {
            return !checked;
        });
    });

    // Search on KeyPress
    $(".namesList li").hide();
    $('#searchNames').keyup(function(){
        var val = $(this).val().toLowerCase();
        $(".namesList li").hide();
        $(".namesList li").each(function(){
        var text = $(this).text().toLowerCase();

        if(text.indexOf(val) != -1) {
            $('.no-client-result').hide();
            $(this).show();
        }
        if(val == '') {
            $(".namesList li").hide();
        }
        });
        var countResults= $(".namesList li:visible").length;
        if (countResults === 0 && $('#searchNames').val() !== '') {
            $('.no-client-result').show();
        }
    });
    $(".namesList li").on('click', function(){
        var text = $(this).find('.full-name').text();
        $('#searchNames').val(text);
        $(".namesList li").hide();
    });

    $('.toggleOption').on('change', function() {
        const optionName = $(this).val();
        if ($(this).is(':checked')) {
            $(`.${optionName}`).removeClass('d-none');
        }
        else {
            $(`.${optionName}`).addClass('d-none');
        }
    });

    let checkboxesID = 1;
    $('.add-item-button').on('click', function() {
        const appendText = `
            <li>
                <input type="checkbox" id="dy_checkbox_${checkboxesID}" value="" class="th-checkbox" checked />
                <label for="dy_checkbox_${checkboxesID}">
                    <div class="dy_text">
                        <input type="text" class="th-textbox dy_textbox" placeholder="Type here" name="dy_textbox_${checkboxesID}">
                    </div>
                </label>
            </li>
        `;
        $(this).parent().find('.checkboxes-list').append(appendText);
        checkboxesID += 1;
    });

    $(document).on('keyup', ".dy_textbox", function(event) {
        if (event.keyCode === 13) {
            const value = $(this).val();
            const liParent = $(this).parentsUntil('li').parent();
            $(liParent).find('.th-checkbox').val(value);
            $(liParent).find('label').append(value);
            $(liParent).find('.dy_text').remove();
        }
    });

});
