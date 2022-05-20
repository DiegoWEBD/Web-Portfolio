<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProjectHasSkillsController;
use App\Mail\ContactMailable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

Route::get('/admin/curriculum', [AdminController::class, 'get_curriculum']);
Route::get('/projects', [ProjectController::class, 'index']);
Route::post('/projects', [ProjectsController::class, 'create']);
Route::get('/skills', [SkillController::class, 'index']);
Route::get('/projects/{project_id}/skills', [ProjectHasSkillsController::class, 'index']);

Route::get('/contact/{name}/{email}/{message}', function($name, $email, $message) {
   
   $mail = new ContactMailable($name, $email, $message);
   
   try{
       Mail::to('diegomz.webdev@gmail.com')->send($mail);
   } catch(Exception $err){
       return response('An error has been ocurred', 400);
   }
   
   return response('Email sent', 200);
});