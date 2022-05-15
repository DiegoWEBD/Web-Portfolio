<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Skill;
use Exception;

class SkillController extends Controller
{
    public static function index(){
        
        $skills = Skill::all();
        
        foreach($skills as $skill){
            $skill->logo_route = asset("storage/skills_logos/".$skill->logo_filename);
            unset($skill->logo_filename);
        }
        
        return $skills;
    }
}
