<?
$name, 'email' => $email];

   // Write the updated array back to the JSON file
   file_put_contents('users.json', json_encode($users));
}

// Redirect back to index.html
header('Location: index.html');
exit();
php?>
