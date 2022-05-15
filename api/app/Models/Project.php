<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'github_link',
        'page_link',
        'logo_filename',
        'description'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function skills(){
        return $this->belongsToMany(Skill::class, 'project_has_skills');
    }
}
