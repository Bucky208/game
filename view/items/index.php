<section>
  <h1>Items</h1>
  <div id="items-result">
    <?php if(empty($items)): ?>
    <p>No Items In Database</p>
    <?php else: ?>
    <ol>
    <?php foreach($items as $item): ?>
    <li><?php echo $item['name'];?>: <?php echo $item['score'];?></li>
    <?php endforeach;?>
    </ol>
    <?php endif;?>
  </div>
</section>
<section>
  <h2>Add Item</h2>
  <form method="post" action="index.php" id="itemAddForm">
    <div class="form-group<?php if(!empty($errors['name'])) echo ' has-error';?>">
      <label for="inputName">Title</label>
      <input type="text" class="form-control" id="inputName" placeholder="Enter Item Name" name="name" value="<?php if(!empty($_POST['name'])) echo $_POST['name'];?>">
      <?php if(!empty($errors['name'])) echo '<span class="help-block">' . $errors['name'] . '</span>'; ?>
    </div>
    <input type="hidden" name="action" value="add-item" />
    <input type="hidden" name="score" value="3" />
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
</section>
