@extends('layouts.app')

@section('content')

<b-container>
    <b-row align-h="center">
    
        <b-col cols="8">

            <b-card title="Inicion de sesion" class="my-5">
                    
                    @if($errors->any())
                    <b-alert show variant="danger">
                         @foreach($errors->all() as $error)
                        <ul class="mb-0">
                            <li>{{ $error }}</li>
                        </ul>
                        @endforeach
                    </b-alert>
                    @else 
                      <b-alert show>
                        Por favor ingresa tus datos:
                    </b-alert>

                    @endif


            <b-form  method="POST" action="{{ route('register') }}">
                        {{ csrf_field() }}

                        <b-form-group
                            label="Nombre"
                            label-for="name">

                            <b-form-input
                            type="text"
                            id="name"
                            name="name"   
                            value="{{ old('name') }}" 
                            required autofocus>
                            </b-form-input>
                        </b-form-group>

                        <b-form-group
                            label="Correo electronico"
                            label-for="email">

                            <b-form-input
                            type="email"
                            id="email"
                            name="email"   
                            value="{{ old('email') }}" 
                            placeholder="example@programacionymas.com"
                            required autofocus>
                            </b-form-input>
                        </b-form-group>

                        <b-form-group
                            label="Contraseña"
                            label-for="password">

                            <b-form-input
                            type="password"
                            id="password"
                            name="password"
                            value="{{ old('password') }}" 
                            required>
                            </b-form-input>
                        </b-form-group>

                        <b-form-group
                            label="Confirmar Contraseña"
                            label-for="password-confirm">

                            <b-form-input
                            type="password"
                            id="password-confirm"
                            name="password_confirmation"
                            required>
                            </b-form-input>
                        </b-form-group>
    
                              <b-button type="submit" variant="primary">Registrarse</b-button>
                         
              </b-form>                 
              
            </b-card>    

        </b-col>
      
    </b-row>
</b-container>

@endsection
