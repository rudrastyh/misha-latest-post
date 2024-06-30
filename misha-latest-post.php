<?php
/**
 * Plugin Name:  Misha Latest Post Block
 * Plugin URI:   https://rudrastyh.com
 * Description:  Dynamic block example
 * Version:      1.0.0
 * Author:       Misha Rudrastyh
 */
add_action( 'init', 'misha_latest_post_block' );
function misha_latest_post_block() {
	register_block_type( __DIR__ );
}
