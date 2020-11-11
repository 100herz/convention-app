<?php
add_action('wp_enqueue_scripts', 'my_theme_enqueue_styles');
function my_theme_enqueue_styles()
{
	wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
}

/* Custom Scripts einbinden */

// Custom JS einbinden
add_action('init', 'my_init_method');
function my_init_method()
{
	if (!is_admin()) {
		wp_deregister_script('custom');
		wp_register_script('custom', get_stylesheet_directory_uri() . '/custom.js', array('jquery'), '1.0', true);
		wp_enqueue_script('custom');
	}
}

/* ---------------------------------------------------------------- */
/* Remove Frontend Admin Bar
/* ---------------------------------------------------------------- */
if (!current_user_can('manage_options')) {
	show_admin_bar(false);
}

/* ---------------------------------------------------------------- */
/* Login/Logout Links <img src="/wp-content/uploads/2016/01/flag_gb.png"> /magazine-event-planners
/* ---------------------------------------------------------------- */
add_filter('wp_nav_menu_items', 'my_login_func', 10, 2);

function my_login_func($nav, $args)
{
	global $current_user;
	get_currentuserinfo();

	// if (is_user_logged_in()) {
	// 	$loginoutlink = '<li class="menu-item current-menu-item"><a href="/login?a=logout">Logout ' . $current_user->display_name . '</a></li>';
	// }
	// else {
	// 	$class_name = '';
	// 	if (basename(get_permalink($id)) == 'login') {
	// 		$class_name = 'menu-item current-menu-item';
	// 	}
	//
	// 	$loginoutlink = '<li class="' . $class_name . '"><a href="/login" >Login</a></li>';
	// }

	// if ($args->theme_location == 'top-menu')
	if ($args->menu->term_id == 3) {
		$nav .= $loginoutlink . '<li class="menu-item flag-en"><a href="/magazine-event-planners"><img src="/wp-content/uploads/2016/01/flag_gb.png"/></a></li>';
	}

	return $nav;
}

// Redirect nach erfolgreicher Anmeldung
add_filter('wpmem_login_redirect', 'my_login_redirect', 10, 2);

function my_login_redirect($redirect_to, $user_id)
{
	// return the url that the login should redirect to
	return '/ausgaben';
}

// Standard E-Mail umleiten bzw einen zusätzlichen Empfänger eintragen
add_filter('wpmem_notify_addr', 'my_admin_email');

function my_admin_email($email)
{

	// single email example
	// $email = 'notify@mydomain.com';

	// multiple emails example
	// $email = 'notify1@mydomain.com, notify2@mydomain.com';

	// take the default and append a second address to it example:
	$email = $email . ', homepage@convention-net.de';

	// return the result
	return $email;
}

// add_image_size('download-archive-16x9', 800, 450 true);
add_image_size('download-archive-4x3', 760, 570, true);

/* ---------------------------------------------------------------- */
/* Add featured images to the Rest API
/* ---------------------------------------------------------------- */

/**
 * Adds the field `featured_image_thumb` to te rest api of posts
 */
add_action( 'rest_api_init', function () {
  register_rest_field( 'post', 'featured_image_thumb', array(
    'get_callback' => function ( $post_arr ) {
      $image_src_arr = wp_get_attachment_image_src( $post_arr['featured_media'], 'thumbnail' );
      return $image_src_arr[0];
    },
    'update_callback' => null,
    'schema' => null
  ) );
} );

/**
 * Adds the field `featured_image_medium` to te rest api of posts
 */
add_action( 'rest_api_init', function () {
  register_rest_field( 'post', 'featured_image_medium', array(
    'get_callback' => function ( $post_arr ) {
      $image_src_arr = wp_get_attachment_image_src( $post_arr['featured_media'], 'medium' );
      return $image_src_arr[0];
    },
    'update_callback' => null,
    'schema' => null
  ) );
} );

/**
 * Adds the field `categories_names` to te rest api of posts
 */
add_action( 'rest_api_init', function () {
  register_rest_field( 'post', 'categories_names', array(
    'get_callback' => function ( $post_arr ) {
      $categories = get_the_category( $post_arr['id'] );
      $formatted_categories = array();
      foreach ( $categories as $category ) {
        $formatted_categories[] = $category->name;
      }
      return $formatted_categories;
    },
    'update_callback' => null,
    'schema' => null
  ) );
} );
