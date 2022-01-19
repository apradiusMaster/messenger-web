<?php

use Illuminate\Database\Seeder;

use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'apradius',
            'email' => 'rochapradius@gmail.com',
            'password' => bcrypt('grr12343')
        ]);

        User::create([
            'name' => 'cuchi',
            'email' => 'cuchi@gmail.com',
            'password' => bcrypt('123321')
        ]);

        User::create([
            'name' => 'paola',
            'email' => 'paola@gamil.com',
            'password' => bcrypt('123321') 
        ]);
    }
}
