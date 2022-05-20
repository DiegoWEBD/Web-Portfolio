<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
    </head>
    <body>
            <h2>Has recibido un mensaje de contacto desde tu Web:</h2>
            <p><strong>Nombre: </strong>{{ $contact_data['name'] }}</p>
            <p><strong>Correo: </strong>{{ $contact_data['email'] }}</p>
            <p><strong>Mensaje: </strong></p>
            <p>{{ $contact_data['message'] }}</p>
    </body>
</html>