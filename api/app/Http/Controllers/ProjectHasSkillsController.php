<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;

class ProjectHasSkillsController extends Controller
{
    public function index($project_id){
        
        $project = Project::find($project_id);
        
        if(!$project){
            return response('Does not exist a project with id '.$project_id, 404);
        }
    
        $skills = $project->skills;
        
        foreach($skills as $skill){
            $skill->logo_route = asset("storage/skills_logos/".$skill->logo_filename);
            unset($skill->logo_filename);
        }
        
        return $skills;
    }
}
