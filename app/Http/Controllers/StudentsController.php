<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use Inertia\Inertia;

class StudentsController extends Controller
{

    // For table
    public function index()
    {
        // for paginate
        // $students = Student::paginate(10);
        // for paginate
        // index yae table out mar
        // {{$students->link()}}


        $students = Student::paginate(6)->withQueryString();

        return Inertia::render('Students/Index', [
            'students' => $students,
            'searchUrl' => route('students.fetchData'),
        ]);
    }

    public function fetchData(Request $request)
    {

        if ($request->keyword ) {
            $keyword = $request->keyword;

            $students = Student::where('name', 'like', "%$keyword%")
                ->orWhere('email', 'like', "%$keyword%")
                ->paginate(6)->withQueryString();
        } else {
            $students = Student::paginate(6)->withQueryString();
        }


        return response()->json($students);
    }


    public function storeStudent(Request $request)
    {
        // $student = new Student();
        // $student->email = $request->email;
        // $student->name = $request->name;
        // $student->phone = $student->phone;
        // $student->address = $student->address;
        // $student->cv_data =
        // $student->photo =
        // $student->save();

        // return redirect()
    }

    public function updateStudent(Request $request, $id)
    {
        // $student = Student::find($id);
        // $student = new Student();
        // $student->email = $request->email;
        // $student->name = $request->name;
        // $student->phone = $student->phone;
        // $student->address = $student->address;
        // $student->cv_data =
        // $student->photo =
        // $student->save();

        // return redirect()
    }
    public function delete($id)
    {

        // 1
        // $student = Student::find($id);

        // if ($student) {
        //     $student->delete();
        //     // return redirect('/index')->with('success', 'deleted successfully.');
        // } else {
        //     // return redirect('/index')->with('error', 'Student not found.');
        // }

        // 2
        // Student::find($id)->delete();
        // return redirect('/index')->with('successAlert','You have successfully deleted');

    }
}
