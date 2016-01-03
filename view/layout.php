<!DOCTYPE html>
<html>
    <head>
      <meta charset="utf-8">
      <title>Ruimtekoerier</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="stylesheet" type="text/css" href="css/style.css"/>
      <link rel="shortcut icon" type="image/png" href="/assets/meteoor.png"/>
    </head>
    <body>

        <div class="container">
            <?php if(!empty($_SESSION['info'])): ?><div class="alert alert-success"><?php echo $_SESSION['info'];?></div><?php endif; ?>
            <?php if(!empty($_SESSION['error'])): ?><div class="alert alert-danger"><?php echo $_SESSION['error'];?></div><?php endif; ?>

            <?php echo $content; ?>
        </div>

        <script src="js/vendors/phaser.min.js"></script>
        <script src="js/script.js"></script>
    </body>
</html>
