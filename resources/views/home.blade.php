@extends('layouts.app')

@section('content')

    <mesenger-component :user-id="{{ auth()->id() }}" />
@endsection
