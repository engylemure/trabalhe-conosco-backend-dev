<?php

namespace App\Http\Controllers;

use App\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{
    public function index(Request $request)
    {
        $profiles = DB::table('profiles');
        if($search = $request->get('search')){
            $profiles = $profiles->where('name','like',"%{$search}%")
                        ->orWhere('username','like',"%{$search}%")
                        ->leftJoin('priority_list1','profiles.string_id','=','priority_list1.identifier')
                        ->orderBy('priority_list1.identifier','desc')
                        ->leftJoin('priority_list2','profiles.string_id','=','priority_list2.identifier')
                        ->orderBy('priority_list2.identifier','desc');
        }
        return $profiles->simplePaginate(15);
    }

    public function show(Profile $profile)
    {
        return $profile;
    }

    public function store(Request $request)
    {
        $profile = Profile::create($request->all());

        return response()->json($profile, 201);
    }

    public function update(Request $request, Profile $profile)
    {
        $profile->update($request->all());

        return response()->json($profile, 200);
    }

    public function delete(Profile $profile)
    {
        $profile->delete();

        return response()->json(null, 204);
    }
}
