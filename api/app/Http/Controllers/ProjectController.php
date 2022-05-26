<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Http\Controllers\ProjectHasSkillsController;

class ProjectController extends Controller
{
    public function index(){
        
        $projects = Project::all();
        
        foreach($projects as $project){
            $project->logo_route = asset("storage/projects_logos/".$project->logo_filename);
            unset($project->logo_filename);

            $project_skills_controller = new ProjectHasSkillsController;
            $project->skills = $project_skills_controller->index($project->id);
        }
        
        return $projects;
    }
}
