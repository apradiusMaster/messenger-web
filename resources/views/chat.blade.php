@extends('layouts.app')

@section('content')

   <!-- <mesenger-component :user="{{ auth()->user() }}" /> -->

    <router-view  :user="{{ auth()->user() }}" />
@endsection
