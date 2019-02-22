<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProfileResource;
use App\Profile;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param \Illumnate|Http|Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = $request->get('search');
        $query = $search ? Profile::search($search) : Profile::query();
        $profiles = $query
            ->leftJoin('primary_relevance_list', 'profiles.uuid', '=', 'primary_relevance_list.profile_uuid')
            ->orderBy('primary_relevance_list.profile_uuid', 'desc')
            ->leftJoin('secondary_relevance_list', 'profiles.uuid', '=', 'secondary_relevance_list.profile_uuid')
            ->orderBy('secondary_relevance_list.profile_uuid', 'desc');
        return $profiles->paginate(15);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Profile  $profile
     * @return \Illuminate\Http\Response
     */
    public function show(Profile $profile)
    {
        return new ProfileResource($profile);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Profile  $profile
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Profile $profile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Profile  $profile
     * @return \Illuminate\Http\Response
     */
    public function destroy(Profile $profile)
    {
        //
    }
}
