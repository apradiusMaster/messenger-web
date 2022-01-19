<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Message;
use DB;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
          $userId = auth()->id();
          $contactId = $request->contact_id;

          return  Message::select(
                 'id',
                 DB::raw("IF(`from_id` = $userId, TRUE, FALSE ) as written_by_me"),
                 'created_at',
                 'content'
          )->where(function ($query) use ($userId, $contactId){
              $query-> Where('from_id', $userId)->Where('to_id', $contactId);
          })->orWhere(function ($query) use ($userId, $contactId){
              $query->Where('from_id', $contactId)->Where('to_id', $userId);
          })->get();
               
    }

    public function store(Request $request)
    {
        $message = new Message();
         
        $message->from_id = auth()->id();
        $message->to_id = $request->to_id;
        $message->content = $request->content;
        $saved =  $message->save();

        $data = [];
        $data['success'] = $saved;
        return $data;

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
