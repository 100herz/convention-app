<?php
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
