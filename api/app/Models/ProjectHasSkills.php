<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectHasSkills extends Model
{
    use HasFactory;
    protected $table = 'project_has_skills';

    protected $fillable = [
        'project_id',
        'skill_id'
    ];
}
