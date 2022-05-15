<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use Exception;

class ProjectController extends Controller
{
    public function index(){
        
        $projects = Project::all();
        
        foreach($projects as $project){
            $project->skills = $project->skills();
            $project->logo_route = asset("storage/projects_logos/".$project->logo_filename);
            unset($project->logo_filename);
        }
        
        return $projects;
    }
    
    public function test(){
        $projects = Project::all();
        $skills = $projects[0]->skills();
        return $skills;
    }
}
