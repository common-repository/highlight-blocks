(function () {
    jQuery(window).load(function () {
        var selectedBlock = jQuery('.editor-block-list__block').hasClass('is-selected');

        // Display highlighted box for each block
        jQuery(document).on('click', '.md-highlight-blocks', function () {
            if (!jQuery('.md-highlight-blocks').hasClass('is-active')) {
                jQuery(this).addClass('is-active');
                jQuery('.editor-block-list__block').each(function (index) {
                    jQuery(this).addClass('is-hovered');
                    var blockAreaLabel = jQuery(this).attr('aria-label');
                    var avoid = 'Block: ';
                    var finalLabel = blockAreaLabel.replace(avoid, '');
                    jQuery(this).find('.editor-block-list__block-edit .editor-block-list__breadcrumb').remove();
                    jQuery(this).find('.editor-block-list__block-edit').prepend('<div class="editor-block-list__breadcrumb"><div class="components-toolbar components-toolbar">' + finalLabel + '</div></div>');
                });
            } else {
                jQuery(this).removeClass('is-active');
                jQuery('.md-highlight-blocks-toolbar').removeClass('is-active');
                jQuery('.editor-block-list__block').each(function (index) {
                    jQuery(this).removeClass('is-hovered');
                    jQuery(this).find('.editor-block-list__block-edit .editor-block-list__breadcrumb').remove();
                });
            }
        });

        // Display highlighted box for nested block.
        jQuery(document).on('click', '.md-highlight-blocks-toolbar', function () {

            if (!jQuery('.md-highlight-blocks-toolbar').hasClass('is-active')) {
                jQuery(this).addClass('is-active');
                var blockId = jQuery(this).closest('.editor-block-list__block').attr('id');
                var dataBlock = blockId.replace('block-', '');

                jQuery(this).closest('.editor-block-list__block').addClass('is-hovered');
                var blockAreaLabel = jQuery(this).parents('.editor-block-list__block').attr('aria-label');
                var avoid = 'Block: ';
                var finalLabel = blockAreaLabel.replace(avoid, '');
                jQuery(this).closest('.editor-block-list__block').find('.editor-block-list__block-edit .editor-block-list__breadcrumb').remove();
                jQuery(this).closest('.editor-block-list__block').find('.editor-block-list__block-edit').prepend('<div class="editor-block-list__breadcrumb"><div class="components-toolbar components-toolbar">' + finalLabel + '</div></div>');

                if (jQuery('div[data-block="' + dataBlock + '"] .editor-block-list__block').length > 0) {
                    jQuery('div[data-block="' + dataBlock + '"] .editor-block-list__block').each(function (index) {
                        jQuery(this).addClass('is-hovered');
                        var blockAreaLabelChild = jQuery(this).attr('aria-label');
                        var avoidChild = 'Block: ';
                        var finalLabelChild = blockAreaLabelChild.replace(avoidChild, '');
                        jQuery(this).find('.editor-block-list__block-edit .editor-block-list__breadcrumb').remove();
                        jQuery(this).find('.editor-block-list__block-edit').prepend('<div class="editor-block-list__breadcrumb"><div class="components-toolbar components-toolbar">' + finalLabelChild + '</div></div>');
                    });
                }
            } else {
                jQuery(this).removeClass('is-active');
                var blockId = jQuery(this).closest('.editor-block-list__block').attr('id');
                var dataBlock = blockId.replace('block-', '');
                jQuery(this).closest('.editor-block-list__block').removeClass('is-hovered');
                jQuery(this).closest('.editor-block-list__block').find('.editor-block-list__block-edit .editor-block-list__breadcrumb').remove();
                if (jQuery('div[data-block="' + dataBlock + '"] .editor-block-list__block').length > 0) {
                    jQuery('div[data-block="' + dataBlock + '"] .editor-block-list__block').each(function (index) {
                        jQuery(this).removeClass('is-hovered');
                        jQuery(this).find('.editor-block-list__block-edit .editor-block-list__breadcrumb').remove();
                    });
                }
            }

        });


        // Hide breadcrumb block on mouseout event
        jQuery('.editor-block-list__block').on('mouseout', function () {
            jQuery(this).find('.editor-block-list__block-edit .editor-block-list__breadcrumb').hide();
        });

        // Display breadcrumb block on mouseover event
        jQuery('.editor-block-list__block').on('mouseover', function () {
            if (jQuery(this).hasClass('is-selected')) {
                jQuery(this).children('.editor-block-list__block-edit').children('.editor-block-list__breadcrumb').hide();
            } else {
                if (jQuery(this).parents('.editor-block-list__block')) {
                    jQuery(this).parents('.editor-block-list__block').children('.editor-block-list__block-edit').children('.editor-block-list__breadcrumb').hide();
                    jQuery(this).children('.editor-block-list__block-edit').children('.editor-block-list__breadcrumb').show();
                } else {
                    jQuery(this).children('.editor-block-list__block-edit').children('.editor-block-list__breadcrumb').show();
                }
            }
        });

        if (selectedBlock) {
            jQuery(this).find('.editor-block-list__block-edit .editor-block-list__breadcrumb').hide();
        }
    });

})(jQuery);