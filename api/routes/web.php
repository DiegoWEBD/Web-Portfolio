<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\AdminController;


Route::get('/admin/curriculum', [AdminController::class, 'get_curriculum']);
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/test', [ProjectController::class, 'test']);
Route::post('/projects', [ProjectsController::class, 'create']);
Route::get('/skills', [SkillController::class, 'index']);
