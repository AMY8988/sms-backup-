<?php

namespace App\Http\Controllers\Laravel_Con;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;

class LstudentsController extends Controller
{
    public function index(){
        $students=Student::all();
        return view('Student.index',compact('students'));
    }

    // Toe Tet
    public function insertStudent(Request $request){
        $student= new Student;
        $student->email = $request->email;
        $student->name = $request->name;
        $student->phone = $request->phone;
        $student->address = $request->address;
        
        $student->save();
    }
}
