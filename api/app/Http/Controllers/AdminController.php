<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminController extends Controller
{
    public function get_curriculum(){

        $curriculum = Storage::disk('local')->path('public/admin/curriculum.pdf');

        return response()->download($curriculum);
    }
}
