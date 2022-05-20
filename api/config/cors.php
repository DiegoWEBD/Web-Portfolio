<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['GET', 'POST', 'PUT', 'DELETE'],

    'allowed_origins' => ['https://diego-maldonado.com', 'http://localhost:3000', 'http://192.168.1.120:3000', 'http://192.168.1.120:3000'],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['content-type', 'accept', 'x-custom-header'],

    'exposed_headers' => ['x-custom-response-header'],

    'max_age' => 60,

    'supports_credentials' => false,

];
