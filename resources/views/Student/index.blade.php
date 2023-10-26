<!DOCTYPE html>
<html>
<head>
    <title>Test Form</title>
</head>
<body>
    <h1>Test Form</h1>

    <form action="process.php" method="post">
        @csrf

        <details>
            <summary>Add Student</summary>
            <form method="POST" action="">
                @csrf
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"><br>
                <label for="phone">Phone:</label>
                <input type="text" id="phone" name="phone"><br>
                <label for="address">Address:</label>
                <input type="text" id="address" name="address"><br>
                <button type="submit">Submit</button>
              </form>
        </details>

        <table border = 1>
            <tr>
                <td>ID</td>
                <td>Name</td>
            </tr>
            @foreach ($students as $student)
              <tr>
                <td>SID_{{ $student->id }}</td>
                <td>{{ $student->name }}</td>
              </tr>
            @endforeach
          </table>


    </form>
</body>
</html>
