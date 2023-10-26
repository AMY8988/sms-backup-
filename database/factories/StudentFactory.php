<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'email'=>$this->faker->email(),
            'name'=>$this->faker->name(),
            'phone'=>$this->faker->phoneNumber(),
            'address'=>$this->faker->address(),
            'cv_data'=>'images/sample_cv.jpg',
            'photo'=>'images/profile_sample.jpg',
        ];
    }
}
