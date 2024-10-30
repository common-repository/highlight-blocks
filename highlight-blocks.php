<?php
/**
 * Plugin Name: Highlight Gutenberg Blocks
 * Plugin URI:        https://www.thedotstore.com/
 * Description: Highlight each individual Gutenberg Blocks and display the relative name of the block. which is used in page and post editor
 * Version:           1.0.3
 * Author:            Thedotstore
 * Author URI:        https://thedotstore.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       highlight-blocks
 */

defined('ABSPATH') || exit;

/**
 * Enqueue the block's assets for the editor.
 *
 * wp-blocks:  The registerBlockType() function to register blocks.
 * wp-element: The wp.element.createElement() function to create elements.
 * wp-i18n:    The __() function for internationalization.
 *
 * @since 1.0.0
 */
function hgb_highlight_gt_blocks_backend_enqueue()
{
    wp_enqueue_script(
        'highlight-gt-blocks-backend-script', // Unique handle.
        plugins_url('js/block.build.js', __FILE__), // block.js: We register the block here.
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-edit-post', 'wp-components') // Dependencies, defined above.
    );

    wp_enqueue_script(
        'highlight-gt-blocks',
        plugins_url('js/highlight-gt-blocks.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor'),
        null,
        true
    );
    // Styles.
    wp_enqueue_style(
        'highlight-gt-blocks-editor-css', // Handle.
        plugins_url('css/editor.css', __FILE__), // Block editor CSS.
        array('wp-edit-blocks') // Dependency  to include the CSS after it.
    );
}

add_action('enqueue_block_editor_assets', 'hgb_highlight_gt_blocks_backend_enqueue');