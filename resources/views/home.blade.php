@extends('layouts.app')

@section('content')

    <mesenger-component :user="{{ auth()->user() }}" 
                        />
@endsection
